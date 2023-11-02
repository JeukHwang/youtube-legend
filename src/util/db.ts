import { PrismaClient } from "@prisma/client";
import { VideoInfo } from "./browse";

const prisma = new PrismaClient();

export async function addVideoIfPossible(
  videoInfo: VideoInfo
): Promise<boolean> {
  const video: VideoInfo | null = await prisma.video.findUnique({
    where: { id: videoInfo.id },
  });
  if (!video) {
    await prisma.video.create({ data: videoInfo });
  }
  return !video;
}
