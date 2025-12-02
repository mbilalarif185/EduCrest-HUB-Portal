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

client.on("message", async (msg) => {
  const text = msg.body?.trim().toLowerCase() || "";

  if (!text) return;

  console.log("📩 Message received:", text);

  const match = replies.find((item) =>
    item.trigger.some((t) => text.includes(t.toLowerCase()))
  );

  if (match) {
    await msg.reply(match.response);
    return;
  }

  // 🔥 New fallback message (your custom line)
  await msg.reply("Please share a suitable time when you’re available so I can call you.");
});

client.initialize();
