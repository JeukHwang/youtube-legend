import { Video } from "@prisma/client";
import puppeteer, { ElementHandle, Page } from "puppeteer";
import { chromePath, targetId } from "./constant";
import {
  id2url,
  isTargetVideo,
  parseId,
  parseTimeString,
  parseViewString,
} from "./util";

export type VideoInfo = Pick<Video, "id" | "time" | "views">;

async function getVideoInfo(
  video: ElementHandle<HTMLDivElement>
): Promise<VideoInfo | null> {
  const [views, time, id]: [number | null, number | null, string | null] =
    await Promise.all([
      new Promise<number | null>(async (resolve) => {
        const el = (await video.$(
          ".inline-metadata-item.style-scope.ytd-video-meta-block"
        )) as ElementHandle<HTMLSpanElement> | null;
        if (!el) {
          resolve(null);
          return;
        }
        const str: string | undefined = await el.evaluate((el) =>
          el.textContent?.trim()
        );
        resolve(str ? parseViewString(str) : null);
      }),
      new Promise<number | null>(async (resolve) => {
        const el = (await video.$(
          "#time-status"
        )) as ElementHandle<HTMLDivElement> | null;
        if (!el) {
          resolve(null);
          return;
        }
        const str: string | undefined = await el.evaluate((el) =>
          el.textContent?.trim()
        );
        resolve(str ? parseTimeString(str) : null);
      }),
      new Promise<string | null>(async (resolve) => {
        const el = (await video.$(
          "a#thumbnail"
        )) as ElementHandle<HTMLAnchorElement> | null;
        if (!el) {
          resolve(null);
          return;
        }
        const str: string | null = await el.evaluate((el) =>
          el.getAttribute("id")
        );
        resolve(str ? parseId(str) : null);
      }),
    ]);
  return views && time && id ? { views, time, id } : null;
}

async function getVideosInPage(page: Page): Promise<VideoInfo[]> {
  await page.waitForSelector(
    "div#dismissible.style-scope.ytd-compact-video-renderer"
  );
  const videos = await page.$$(
    "div#dismissible.style-scope.ytd-compact-video-renderer"
  );
  return (await Promise.all(videos.map(getVideoInfo))).filter(
    (video: VideoInfo | null) => video !== null
  ) as VideoInfo[];
}

async function browseDFS(
  page: Page,
  id: string,
  found: VideoInfo[] = [],
  visit: Set<string> = new Set(),
  depth = 0
): Promise<void> {
  if (visit.has(id) || depth > 5) return;
  visit.add(id);

  await page.goto(id2url(id), { waitUntil: "networkidle2" });
  const videos = await getVideosInPage(page);
  console.log("browse", depth, id2url(id), videos.length);

  for (const video of videos) {
    if (isTargetVideo(video, found.length >= 4 ? 10_0000 : 1000, 60)) {
      if (isTargetVideo(video, 10000000, 60)) {
        found.push(video);
      }
      await browseDFS(page, video.id, found, visit, depth + 1);
    }
  }
}

export async function browseToFindTarget(
  init: number = 10
): Promise<VideoInfo[]> {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: chromePath,
  });
  const page = await browser.newPage();
  console.log("Init");

  for (let i = 0; i < init; i++) {
    await page.goto(id2url(targetId[i]), { waitUntil: "networkidle2" });
    // await page.waitForTimeout(1000);
  }
  console.log("Iterate target id");

  const found: VideoInfo[] = [];
  const visit = new Set<string>();
  await browseDFS(page, targetId[0], found, visit);
  console.log("Finish browse");

  await browser.close();
  return found;
}
