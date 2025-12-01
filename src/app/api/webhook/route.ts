// app/api/webhook/route.ts
import { NextRequest, NextResponse } from "next/server";

// Handle incoming WhatsApp messages
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📩 Incoming WhatsApp Message:", body);

    // Extract message and sender
    const message =
      body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.text?.body;
    const from =
      body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0]?.from;

    // Simple auto-reply
    if (message && from) {
      await sendWhatsAppMessage(from, "Thanks! Your message is received ❤️");
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Error handling POST:", error);
    return NextResponse.json({ status: "error" }, { status: 500 });
  }
}

async function sendWhatsAppMessage(to: string, text: string) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;

  if (!token || !phoneNumberId) {
    console.error("Missing WhatsApp credentials in environment variables");
    return;
  }

  const payload = {
    messaging_product: "whatsapp",
    to,
    text: { body: text },
  };

  const res = await fetch(`https://graph.facebook.com/v22.0/${phoneNumberId}/messages`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();
  console.log("💬 WhatsApp API response:", data); // <- new line
}

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  console.log("Verification Request:", { mode, token, challenge });

  if (mode === "subscribe" && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    console.log("✅ Webhook verified");
    return new Response(challenge, { status: 200 });
  }

  console.log("❌ Forbidden: Invalid token or mode", { mode, token });
  return new Response("Forbidden", { status: 403 });
}
