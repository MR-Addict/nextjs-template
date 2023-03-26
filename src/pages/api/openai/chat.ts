import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

import { ChatRequest } from "@/types";

const configuration = new Configuration({ apiKey: process.env.OPENAI_TOKEN });
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.setHeader("Allow", ["POST"]).end(`Method ${req.method} is not allowed!`);
  if (req.body.token !== process.env.OPENAI_TOKEN) return res.send("Not authorized");

  const request = ChatRequest.safeParse(req.body);
  if (!request.success) return res.send("Bad Request");

  try {
    const result = await openai.createChatCompletion(request.data);

    if (result.status !== 200) return res.json({ status: false, message: "ChatGPT failed to response" });
    else return res.json({ status: true, data: result.data });
  } catch (error) {
    console.error(error);
    return res.json({ status: false, message: "ChatGPT failed to response" });
  }
}
