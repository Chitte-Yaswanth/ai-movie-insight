import { NextResponse } from "next/server";
import Sentiment from "sentiment";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  const response = await fetch(
    `http://www.omdbapi.com/?i=${id}&apikey=87c17e4f`
  );

  const movie = await response.json();

  const sentiment = new Sentiment();
  const result = sentiment.analyze(movie?.Plot || "");

  let label = "Mixed";
  if (result.score > 2) label = "Positive";
  if (result.score < -2) label = "Negative";

  return NextResponse.json({
    ...movie,
    sentiment: label,
  });
}