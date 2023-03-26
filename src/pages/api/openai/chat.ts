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
    console.log(request);

    const result = await openai.createChatCompletion(request.data);
    const completion = result.data;

    console.log(completion);

    return res.json(completion);
  } catch (error) {
    console.error(error);
    return res.json({ status: false, message: "Openai failed to response" });
  }
}
