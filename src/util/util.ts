import { VideoInfo } from "./browse";

const units = new Map<string, number>([
  ["억", 1_0000_0000],
  ["만", 1_0000],
  ["천", 1000],
]);

export function parseViewString(str: string): number {
  try {
    const num = str.split("조회수")[1].trim().split("회")[0].trim();
    for (let [unit, multiplier] of units) {
      if (num.includes(unit)) {
        return Math.round(parseFloat(num.split(unit)[0]) * multiplier);
      }
    }
    return parseInt(num);
  } catch (e) {
    console.log("parseView", str);
    throw e;
  }
}

export function parseTimeString(str: string): number {
  try {
    const splited = str.split(":");
    if (splited.length === 2) {
      const [minute, second] = str
        .split(":")
        .map((num) => parseInt(num.trim()));
      return minute * 60 + second;
    } else {
      // must be 3
      const [hour, minute, second] = str
        .split(":")
        .map((num) => parseInt(num.trim()));
      return hour * 3600 + minute * 60 + second;
    }
  } catch (e) {
    console.log("parseTime", str);
    throw e;
  }
}

export function parseId(str: string): string {
  try {
    return str.split("/watch?v=")[1];
  } catch (e) {
    console.log("parseId", str);
    throw e;
  }
}

export function isTargetVideo(
  video: VideoInfo,
  views: number,
  time: number
): boolean {
  return video.views > views && video.time <= time;
}

export function id2url(id: string): string {
  return `https://www.youtube.com/watch?v=${id}`;
}
