require("dotenv").config();

const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message("hello", async ({ message, say }) => {
  await say(`Hey there <@${message.user}>!`);
});

(async () => {
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();

// socket token: xapp-1-A04601VNCTZ-4242869649616-c11b2b398f7ec3078b74eb0efcda075eeb31950dd3182088464a2a25c7480ed3
