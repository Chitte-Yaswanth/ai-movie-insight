# AI Movie Insight Builder 🎬

AI Movie Insight Builder is a web application that allows users to enter an IMDb movie ID and view detailed information about the movie along with AI-based sentiment insights.

## Features

* Search movies using IMDb ID
* Display movie title, poster, release year, and IMDb rating
* Show cast list and plot summary
* Perform sentiment analysis on the movie plot
* Classify sentiment as **Positive**, **Mixed**, or **Negative**
* Clean and responsive UI

## Tech Stack

* **Frontend:** Next.js (React)
* **Backend:** Next.js API Routes
* **API:** OMDb API
* **Sentiment Analysis:** sentiment npm library
* **Deployment:** Vercel

## How It Works

1. The user enters an IMDb movie ID (example: `tt0133093`).
2. The application fetches movie details from the OMDb API.
3. The movie plot is analyzed using a sentiment analysis library.
4. The sentiment score is used to classify the movie sentiment as Positive, Mixed, or Negative.
5. The results are displayed in a clean interface.

## Example IMDb IDs

You can test the application with:

* `tt0133093` — The Matrix
* `tt0111161` — The Shawshank Redemption
* `tt1375666` — Inception

## Live Demo

https://ai-movie-insight.vercel.app

## GitHub Repository

https://github.com/Chitte-Yaswanth/ai-movie-insight

## Author

Chitte Yaswanth
B.Tech – Computer Science Engineering
Alliance University
