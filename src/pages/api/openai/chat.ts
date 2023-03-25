import type { NextApiRequest, NextApiResponse } from "next";

import { ChatOptions, Messages } from "@/types";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({ apiKey: process.env.OPENAI_TOKEN });
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.setHeader("Allow", ["POST"]).end(`Method ${req.method} is not allowed!`);
  if (req.body.token !== process.env.OPENAI_TOKEN) return res.send("Not authorized");

  const options = ChatOptions.safeParse(req.body);
  const messages = Messages.safeParse(JSON.parse(req.body.messages));
  if (!options.success || !messages.success) return res.send("Bad Request");

  const completion = await openai.createChatCompletion({ ...options.data, messages: messages.data });
  return res.json(completion);
}
