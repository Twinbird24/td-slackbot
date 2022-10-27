require("dotenv").config();
const dayjs = require("dayjs");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");

dayjs.extend(isSameOrAfter);

const { App } = require("@slack/bolt");

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN,
});

app.message(/week\s*end/i, async ({ say }) => {
  const fridayAt5pm = dayjs().day(5).minute(0).hour(17);

  if (dayjs().isSameOrAfter(fridayAt5pm)) {
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "Have a great weekend everyone!",
          },
        },
        {
          type: "image",
          image_url: "https://i.giphy.com/media/utUEJY2cXzVvnrB152/giphy.webp",
          alt_text: "apple",
        },
      ],
    });
  } else {
    await say({
      blocks: [
        {
          type: "section",
          text: {
            type: "plain_text",
            text: "Nope!",
          }
        },
        {
          type: "image",
          image_url: "https://i.giphy.com/media/utUEJY2cXzVvnrB152/giphy.webp",
          alt_text: "apple",
        },
      ],
    });
  }
});

app.action("button_click", async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});

(async () => {
  await app.start();

  console.log("⚡️ Bolt app is running!");
})();
