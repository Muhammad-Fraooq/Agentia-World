import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[Chat API] Request body:", body);

    // Forward the request to the FastAPI backend
    const backendUrl = process.env.BACKEND_URL || "https://huggingface.co/spaces/muhammaddev2007/agentia-chatbot-api"
    console.log("[Chat API] Forwarding to:", `${backendUrl}/api/backend/chat`);

    const response = await fetch(`${backendUrl}/api/backend/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    console.log("[Chat API] Backend response status:", response.status);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        error: "Unknown error occurred",
      }));
      console.error("[Chat API] Backend error:", errorData);

      return NextResponse.json(
        { error: errorData.error || errorData.details || `HTTP ${response.status}` },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.log("[Chat API] Backend response data:", data);

    return NextResponse.json({ reply: data.response || data.reply });
  } catch (error) {
    console.error("[Chat API] Error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to connect to backend" },
      { status: 500 }
    );
  }
}
