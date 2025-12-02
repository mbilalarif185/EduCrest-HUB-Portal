import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

console.log("🚀 Starting WhatsApp Bot...");

const client = new Client({
  authStrategy: new LocalAuth({
    clientId: "educest-bot-session", // will save session inside .wwebjs_auth
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
  console.log("📩 Message received:", msg.body);

  if (msg.body.toLowerCase() === "hi" || msg.body.toLowerCase() === "hello") {
    msg.reply("Hello! 👋 How can I help you today?");
  } else {
    msg.reply("Thanks for your message! 😊");
  }
});

client.initialize();
