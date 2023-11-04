import { googleLogin } from "./api/oauth";
import { getVideoInformation } from "./api/youtube";
import { VideoInfo, browseToFindTarget } from "./util/browse";
import { targetId } from "./util/constant";
import { addVideoIfPossible } from "./util/db";
import { id2url } from "./util/util";

async function login() {
  const oauth2client = await googleLogin();
  const videoInfo = await getVideoInformation(oauth2client, "wmqsk1vZSKw");
  console.log(videoInfo);
}

async function browseAndSave(
  initId: string,
  initIdNum: number,
  maxDepth: number
): Promise<void> {
  const videoInfos: Map<string, VideoInfo> = await browseToFindTarget(
    initId,
    initIdNum,
    maxDepth
  );
  console.log("Browse done", videoInfos.size);

  let count = 0;
  for (const [_, videoInfo] of videoInfos) {
    try {
      const isNew = await addVideoIfPossible(videoInfo);
      if (isNew) count++;
    } catch (e) {
      console.error(e);
      console.log(id2url(videoInfo.id), videoInfo.views, videoInfo.time);
    }
  }
  console.log("Save done", count);
}

async function main() {
  const set = new Set(targetId);
  for (let i = 110; i < set.size; i++) {
    console.log(i, set.size);
    const id = targetId[i];
    await browseAndSave(id, i, 0);
  }
}

main();
