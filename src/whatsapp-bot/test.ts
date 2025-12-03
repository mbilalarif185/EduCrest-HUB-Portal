import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { replies } from "./replyData";

console.log("🚀 Starting WhatsApp Bot...");

// Store sessions for new chats
const userSessions = new Map<string, number>();

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
  const from = msg.from;

  // ⛔ Ignore group messages
  if (from.endsWith("@g.us")) return;

  // ⛔ Ignore Status messages
  if (from.endsWith("@broadcast")) return;

  const text = msg.body?.trim().toLowerCase() || "";
  if (!text) return;

  const chat = await msg.getChat();
  const userId = from;

  // 🕒 Auto-expire old sessions after 24 hours
  const lastReplied = userSessions.get(userId);
  if (lastReplied && Date.now() - lastReplied > 24 * 60 * 60 * 1000) {
    userSessions.delete(userId);
  }

  // 🎯 Detect NEW CHAT
  if (!userSessions.has(userId)) {
    const messages = await chat.fetchMessages({ limit: 5 });

    // If more than 2 messages exist → It's an old chat → Ignore
    if (messages.length > 2) {
      return;
    }

    // Mark this user as a NEW CHAT
    userSessions.set(userId, Date.now());
  }

  console.log("📩 Message received:", text);

  // Keyword match
  const match = replies.find((item) =>
    item.trigger.some((t) => text.includes(t.toLowerCase()))
  );

  // Update session timestamp
  userSessions.set(userId, Date.now());

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
