import { NextApiRequest, NextApiResponse } from "next";

export async function GET() {
  return new Response("Hello World");
}
