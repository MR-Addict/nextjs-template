import z from "zod";

const Message = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
});

const ChatRequest = z.object({
  model: z.enum(["gpt-3.5-turbo"]),
  messages: z.array(Message),
  temperature: z.number().min(0).max(2).optional(),
  top_p: z.number().min(0).max(1).optional(),
  n: z.number().int().min(1).optional(),
  stream: z.boolean().optional(),
  max_tokens: z.number().int().optional(),
  presence_penalty: z.number().min(-2).max(2).optional(),
  frequency_penalty: z.number().min(-2).max(2).optional(),
});

type ChatRequestType = z.TypeOf<typeof ChatRequest>;
type MessageType = z.TypeOf<typeof Message>;

export { ChatRequest, Message };
export type { ChatRequestType, MessageType };
