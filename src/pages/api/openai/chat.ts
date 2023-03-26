import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

import { ChatRequest } from "@/types/chatgpt";

const configuration = new Configuration({ apiKey: process.env.OPENAI_TOKEN });
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.setHeader("Allow", ["POST"]).end(`Method ${req.method} is not allowed`);

  if (req.headers.authorization !== process.env.OPENAI_TOKEN) {
    return res.status(401).json({ status: false, message: "Not authorized" });
  }

  const request = ChatRequest.safeParse(req.body);
  if (!request.success) return res.status(400).json({ status: false, message: "Bad request" });

  try {
    const result = await openai.createChatCompletion(request.data);

    if (result.status !== 200) return res.status(500).json({ status: false, message: "ChatGPT failed to response" });
    else return res.json({ status: true, data: result.data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: false, message: "ChatGPT failed to response" });
  }
}
