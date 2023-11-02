import { VideoInfo } from "./browse";

const units = new Map<string, number>([
  ["억", 1_0000_0000],
  ["만", 1_0000],
  ["천", 1000],
]);

export function parseViewString(str: string): number | null {
  const matchedArray = str.match(/조회수 (.+)회/);
  if (!matchedArray) return null;
  const matchedStr = matchedArray[1];
  const unit = units.get(matchedStr[matchedStr.length - 1]);
  const number = parseFloat(unit ? matchedStr.slice(0, -1) : matchedStr);
  return isNaN(number) ? null : Math.round((unit ?? 1) * number);
}

export function parseTimeString(str: string): number | null {
  const splited = str.split(":").map((i) => parseInt(i, 10));
  if (splited.some(isNaN)) return null;
  if (splited.length === 2) {
    const [minute, second] = splited;
    return minute * 60 + second;
  } else if (splited.length === 3) {
    const [hour, minute, second] = splited;
    return hour * 3600 + minute * 60 + second;
  } else {
    return null;
  }
}

export function parseId(
  str: string
): { type: "video" | "shorts"; id: string } | null {
  const matchedArrayForVideo = str.match(/\/watch\?v=(.+)/);
  if (matchedArrayForVideo)
    return { type: "video", id: matchedArrayForVideo[1] };
  const matchedArrayForShort = str.match(/\/shorts\/(.+)/);
  if (matchedArrayForShort)
    return { type: "shorts", id: matchedArrayForShort[1] };
  return null;
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
