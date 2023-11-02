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
const viewSelector = ".inline-metadata-item.style-scope.ytd-video-meta-block";
const timeSelector = "#time-status";
const idSelector = "a#thumbnail";
async function getVideoInfo(
  video: ElementHandle<HTMLDivElement>
): Promise<VideoInfo | null> {
  //   #time-status sometime cause timeout error since it is not loaded
  //   await Promise.all([
  //     video.waitForSelector(viewSelector),
  //     video.waitForSelector(timeSelector),
  //     video.waitForSelector(idSelector),
  //   ]);
  const info = (
    await Promise.allSettled([
      video.$eval(viewSelector, (el) => el.textContent?.trim()),
      video.$eval(timeSelector, (el) => el.textContent?.trim()),
      video.$eval(idSelector, (el) => el.getAttribute("href")),
    ])
  ).map((i) =>
    i.status === "fulfilled" && i.value !== null ? i.value : null
  ) as [string | null, string | null, string | null];

  const views = info[0] ? parseViewString(info[0]) : null;
  const time = info[1] ? parseTimeString(info[1]) : null;
  const id = info[2] ? parseId(info[2]) : null;
  if (views && time && id) {
    if (id.type === "shorts") return null;
    return { views, time, id: id.id };
  } else {
    console.error("getVideoInfo", info, views, time, id);
    return null;
  }
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
  maxDepth: number,
  id: string,
  found: Map<string, VideoInfo> = new Map(),
  visit: Set<string> = new Set(),
  depth = 0
): Promise<void> {
  if (visit.has(id) || depth > maxDepth) return;
  visit.add(id);

  await page.goto(id2url(id), { waitUntil: "networkidle2" });
  const videos = await getVideosInPage(page);
  console.log("browse", depth, id2url(id), videos.length);

  for (const video of videos) {
    if (isTargetVideo(video, found.size >= 4 ? 10_0000 : 1000, 60)) {
      if (isTargetVideo(video, 1000_0000, 60)) {
        found.set(video.id, video);
      }
      await browseDFS(page, maxDepth, video.id, found, visit, depth + 1);
    }
  }
}

export async function browseToFindTarget(
  init: number = 0,
  maxDepth: number = 4
): Promise<Map<string, VideoInfo>> {
  const browser = await puppeteer.launch({
    headless: "new",
    executablePath: chromePath,
  });
  const page = await browser.newPage();
  await page.setExtraHTTPHeaders({ "Accept-Language": "ko" });
  console.log("Init");

  for (let i = 0; i < init; i++) {
    await page.goto(id2url(targetId[i]), { waitUntil: "networkidle2" });
    // await page.waitForTimeout(1000);
  }
  console.log("Iterate target id");

  const found: Map<string, VideoInfo> = new Map();
  const visit = new Set<string>();
  await browseDFS(page, maxDepth, targetId[0], found, visit);
  console.log("Finish browse");

  await browser.close();
  return found;
}
