import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { replies } from "./replyData";

console.log("🚀 Starting WhatsApp Bot...");

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "educest-bot-session",
  }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
  },
});

client.on("qr", (qr) => {
  console.log("📸 Scan QR code below:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp Bot is ready and connected!");
});

// --- Message Handler ---
client.on("message", async (msg) => {
  const userMessage = msg.body.toLowerCase().trim();
  console.log("📩 Message received:", userMessage);

  // find reply from replyData.ts
  const match = replies.find((item) =>
    item.trigger.some((t) => userMessage.includes(t.toLowerCase()))
  );

  if (match) {
    await msg.reply(match.response);
  } else {
    await msg.reply("Thanks for your message! 😊 Please choose a course or say 'hello' to start.");
  }
});

client.initialize();
