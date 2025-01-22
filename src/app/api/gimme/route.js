// src/app/api/gimme/route.js
// Import the NextResponse object from "next/server".
// Import the MemeService class.
// Create an instance of MemeService.
// Implement the `GET` method that:
// - Calls `generateRandomMeme()` from the service.
// - Returns the result as JSON.

// When implemented correctly, the route should return:
// {
//   "url": "https://example.com/meme.jpg"
// }

import { NextResponse } from "next/server";
import { MemeService } from "@/services/meme-service";

const memeService = new MemeService();

export async function GET() {
  const randomMeme = memeService.generateRandomMeme();
  return NextResponse.json({ meme: randomMeme.url }); // Serialization only
}
