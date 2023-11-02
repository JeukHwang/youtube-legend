import { google, youtube_v3 } from "googleapis";

export async function addVideoToPlaylist(
  oauth2client: youtube_v3.Options["auth"],
  videoId: string,
  playlistId: string
) {
  const youtube = google.youtube({ version: "v3", auth: oauth2client });
  const response = await youtube.playlistItems.insert({
    part: ["snippet"],
    requestBody: {
      snippet: {
        playlistId: playlistId,
        resourceId: {
          kind: "youtube#video",
          videoId: videoId,
        },
      },
    },
  });
  return response.data;
}

export async function getVideoInformation(
  oauth2client: youtube_v3.Options["auth"],
  videoId: string
) {
  const youtube = google.youtube({ version: "v3", auth: oauth2client });
  const response = await youtube.videos.list({
    part: ["snippet", "contentDetails", "statistics"], // You can adjust the parts as needed
    id: [videoId],
  });
  return response.data.items; // This will return the information of the video
}
