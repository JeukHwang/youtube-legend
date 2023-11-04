import { parseId } from "./util";

export const targetId: string[] = [
  "https://www.youtube.com/watch?v=wmqsk1vZSKw",
].map((url) => parseId(url)!.id) as string[];

export const chromePath =
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
