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

// Show QR
client.on("qr", (qr) => {
  console.log("📸 Scan QR code below:");
  qrcode.generate(qr, { small: true });
});

// Bot ready
client.on("ready", () => {
  console.log("✅ WhatsApp Bot is ready and connected!");
});

// Message handler
client.on("message", async (msg) => {

  // ⛔ STOP the bot from replying inside groups
  if (msg.from.includes("@g.us")) {
    return;
  }

  const text = msg.body?.trim().toLowerCase() || "";
  if (!text) return;

  console.log("📩 Message received:", text);

  // Match trigger keywords
  const match = replies.find((item) =>
    item.trigger.some((t) => text.includes(t.toLowerCase()))
  );

  if (match) {
    await msg.reply(match.response);
    return;
  }

  // 🔥 Your custom fallback reply
  await msg.reply(
    "Please share a suitable time when you’re available so I can call you."
  );
});

client.initialize();
