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

// 👉 Track users who already received a reply
const repliedUsers = new Set<string>();

// Show QR code
client.on("qr", (qr) => {
  console.log("📸 Scan QR code below:");
  qrcode.generate(qr, { small: true });
});

// On bot ready
client.on("ready", () => {
  console.log("✅ WhatsApp Bot is ready and connected!");
});

// Message handler
client.on("message", async (msg) => {
  // ⛔ Ignore group messages
  if (msg.from.includes("@g.us")) {
    return;
  }

  const userId = msg.from; // Like "9198xxxx@s.whatsapp.net"

  // ⛔ Ignore old chats: if we already replied once, stop.
  if (repliedUsers.has(userId)) {
    return;
  }

  const text = msg.body?.trim().toLowerCase() || "";
  if (!text) return;

  console.log("📩 Message received:", text);

  // Match trigger keywords
  const match = replies.find((item) =>
    item.trigger.some((t) => text.includes(t.toLowerCase()))
  );

  // Mark user as replied so bot never replies again to old chats
  repliedUsers.add(userId);

  if (match) {
    await msg.reply(match.response);
    return;
  }

  // 🔥 Fallback reply
  await msg.reply(
    "Please share a suitable time when you’re available so I can call you."
  );
});

// Start bot
client.initialize();
