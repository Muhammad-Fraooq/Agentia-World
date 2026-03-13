/**
 * API types for Agentia AI Assistant
 */

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  message: string;
  history: Message[];
}

export interface ChatResponse {
  reply: string;
}

export interface ApiError {
  error: string;
  details?: string;
}

/**
 * Sends a message to the Agentia AI backend and returns the response.
 *
 * @param request - The chat request containing message and history
 * @returns Promise resolving to the AI reply
 * @throws Error if the API request fails
 */
export async function sendChatMessage(request: ChatRequest): Promise<string> {
  console.log("[API] Sending message:", request);

  const response = await fetch("/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message: request.message,
      history: request.history,
    }),
  });

  console.log("[API] Response status:", response.status);

  if (!response.ok) {
    const errorData: ApiError = await response.json().catch(() => ({
      error: "Unknown error occurred",
    }));
    console.error("[API] Error response:", errorData);

    throw new Error(
      errorData.details || errorData.error || `HTTP ${response.status}`
    );
  }

  const data: ChatResponse = await response.json();
  console.log("[API] Response data:", data);
  
  return data.reply;
}
