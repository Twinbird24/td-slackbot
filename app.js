require("dotenv").config();
const https = require('https');
const dayjs = require('dayjs');
const isSameOrAfter = require('dayjs/plugin/isSameOrAfter')

dayjs.extend(isSameOrAfter)

const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message("hello", async ({ message, say }) => {
  await say({
        text: {
          type: "mrkdwn",
          text: `Hey there <@${message.user}>!`,
        },
        accessory: {
          type: "button",
          text: {
            type: "plain_text",
            text: "Click Me",
          },
          action_id: "button_click",
        },
  });
});

app.message(/week\s*end/i, async ({ say }) => {
  if (dayjs().isSameOrAfter(fridayAt5pm)) {
  } else {

  // Acknowledge the action
  https.get('https://api.giphy.com/v1/gifs/random?api_key=3wsd8o4aHRtmY4iBrs93tJwblG2EDt8W&tag=danielcraig&rating=g', (resp) => {
  })
}
});

(async () => {
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();
