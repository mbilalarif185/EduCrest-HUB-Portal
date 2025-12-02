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

// 👉 Flag: bot should ignore all messages before startup
let botStarted = false;

// QR
client.on("qr", (qr) => {
  console.log("📸 Scan QR code below:");
  qrcode.generate(qr, { small: true });
});

// When bot is ready
client.on("ready", () => {
  console.log("✅ WhatsApp Bot is ready and connected!");
  botStarted = true; // Now bot will reply ONLY to new messages
});

// Message handler
client.on("message", async (msg) => {
  // ⛔ Ignore messages received before bot started
  if (!botStarted) return;

  // ⛔ Ignore groups
  if (msg.from.includes("@g.us")) return;

  const text = msg.body?.trim().toLowerCase() || "";
  if (!text) return;

  console.log("📩 New message received:", text);

  // Check keyword triggers
  const match = replies.find((item) =>
    item.trigger.some((t) => text.includes(t.toLowerCase()))
  );

  if (match) {
    await msg.reply(match.response);
    return;
  }

  // Fallback reply
  await msg.reply(
    "Please share a suitable time when you’re available so I can call you."
  );
});

// Start bot
client.initialize();
