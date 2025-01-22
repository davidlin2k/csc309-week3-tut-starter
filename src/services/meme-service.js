// src/services/MemeService.js
// Import the MemeRepository class.
// Create a class called MemeService.
// Define a method `generateRandomMeme()` that selects a random meme from the repository.

import { MemeRepository } from "@/repositories/meme-repository";

export class MemeService {
  constructor() {
    this.memeRepository = new MemeRepository();
  }

  generateRandomMeme() {
    const memes = this.memeRepository.getAllMemes();
    const randomIndex = Math.floor(Math.random() * memes.length);
    return memes[randomIndex];
  }
}
