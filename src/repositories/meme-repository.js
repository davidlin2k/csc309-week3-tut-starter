// src/infrastructure/MemeRepository.js
// Import the Meme class.
// Create a class called MemeRepository.
// Define a method `getAllMemes()` that returns a list of Meme objects.
// Use a hardcoded array of URLs for the memes.

import { Meme } from "@/schemas/meme";

export class MemeRepository {
  constructor() {
    this.memeUrls = [
      "https://i.imgflip.com/1bij.jpg",
      "https://i.imgflip.com/26am.jpg",
      "https://i.imgflip.com/9ehk.jpg",
      "https://i.imgflip.com/3si4.jpg",
      "https://i.imgflip.com/39t1o.jpg",
    ];
  }

  getAllMemes() {
    return this.memeUrls.map((url) => new Meme(url)); // Return domain models
  }
}
