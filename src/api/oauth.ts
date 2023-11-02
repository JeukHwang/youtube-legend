import { google } from "googleapis";
import rlp from "readline";

const rl = rlp.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(): Promise<string> {
  return new Promise((resolve) => {
    rl.question("Enter input: ", (input: string) => resolve(input));
  });
}

export async function googleLogin() {
  const oauth2Client = new google.auth.OAuth2(
    "165195661478-affv8ogbb5ol7fb4ohkqetptk2qlfp45.apps.googleusercontent.com",
    "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",
    "urn:ietf:wg:oauth:2.0:oob"
  );

  const authorizationUrl = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/youtube"],
    prompt: "consent",
  });

  console.log(
    "Please visit this URL to authorize this application:",
    authorizationUrl
  );

  const code: string = (await ask()) || "";

  oauth2Client.getToken(code, (err, tokens) => {
    if (err) {
      console.error("Error retrieving access token", err);
      return;
    }
    if (tokens) {
      console.log("Token is ", tokens);
      oauth2Client.setCredentials(tokens);
    } else {
      console.error("No token received");
    }
  });
  return oauth2Client;
}
