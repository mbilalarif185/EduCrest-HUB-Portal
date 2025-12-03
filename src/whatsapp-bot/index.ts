import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { replies } from "./replyData";

console.log("🚀 Starting WhatsApp Bot...");

// OLD chats stored here
const oldChats = new Set<string>();

// Track first message timestamp for NEW chats
const userFirstSeen = new Map<string, number>();

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "educest-bot-session",
  }),
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
  },
});

// QR
client.on("qr", (qr) => {
  console.log("📸 Scan QR code:");
  qrcode.generate(qr, { small: true });
});

// On Bot Ready
client.on("ready", async () => {
  console.log("✅ WhatsApp Bot is ready!");

  const chats = await client.getChats();

  chats.forEach((chat) => {
    const id = chat.id._serialized;

    // Ignore groups and statuses
    if (chat.isGroup) return;
    if (id.endsWith("@status")) return;

    // Mark all these chats as OLD
    oldChats.add(id);
  });

  console.log("🛑 All existing chats marked as OLD.");
});

// Message handler
client.on("message", async (msg) => {
  const from = msg.from;

  // Ignore Groups
  if (from.endsWith("@g.us")) return;

  // Ignore Status/Broadcast
  if (from.endsWith("@broadcast") || from.endsWith("@status")) return;

  const now = Date.now();
  const text = msg.body?.trim().toLowerCase() || "";

  if (!text) return;

  // 🟥 OLD CHAT → ignore
  if (oldChats.has(from)) {
    return;
  }

  // 🟩 NEW CHAT
  let firstSeen = userFirstSeen.get(from);

  if (!firstSeen) {
    firstSeen = now;
    userFirstSeen.set(from, now);
  }

  // After 24 hours → treat as OLD
  if (now - firstSeen > 24 * 60 * 60 * 1000) {
    oldChats.add(from);
    return;
  }

  console.log("📩 Message received:", text);

  // Keyword match
  const match = replies.find((item) =>
    item.trigger.some((t) => text.includes(t.toLowerCase()))
  );

  if (match) {
    await msg.reply(match.response);
    return;
  }

  await msg.reply("Please share a suitable time when you’re available so I can call you.");
});

client.initialize();
