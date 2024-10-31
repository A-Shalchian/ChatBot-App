import OpenAI from "openai";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { message, apiKey } = req.body;

    if (!apiKey) {
      return res.status(400).json({ error: "No API key provided." });
    }

    const openai = new OpenAI({
      apiKey: apiKey, // Use the API key provided in the request
    });

    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo", // Using the gpt-3.5-turbo model
        messages: [{ role: "user", content: message }],
      });

      const reply = completion.choices[0]?.message?.content;
      res.status(200).json({ reply });
    } catch (error) {
      console.error("Error with OpenAI API:", error);
      res.status(500).json({ error: "Failed to get a response from OpenAI" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
