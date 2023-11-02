import { Video } from "@prisma/client";
import { googleLogin } from "./api/oauth";
import { getVideoInformation } from "./api/youtube";
import { VideoInfo, browseToFindTarget } from "./util/browse";
import prisma from "./util/db";
import { id2url } from "./util/util";

async function login() {
  const oauth2client = await googleLogin();
  const videoInfo = await getVideoInformation(oauth2client, "wmqsk1vZSKw");
  console.log(videoInfo);
}
// main3();

async function browseAndSave(): Promise<void> {
  const videoInfos: VideoInfo[] = await browseToFindTarget(10);
  console.log("Browse done", videoInfos.length);
  const videos: Video[] = await prisma.$transaction(
    videoInfos.map((videoInfo) => {
      return prisma.video.create({ data: videoInfo });
    })
  );
  console.log("Save done");
  for (const video of videos) {
    console.log(id2url(video.id), video.views, video.time);
  }
  console.log("Finish");
}

browseAndSave();
