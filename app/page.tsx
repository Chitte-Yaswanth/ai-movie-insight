"use client";

import { useState } from "react";

export default function Home() {

  const [movieId, setMovieId] = useState("");
  const [movie, setMovie] = useState<any>(null);

  const searchMovie = async () => {

    if (!movieId) {
      alert("Please enter IMDb ID");
      return;
    }

    const res = await fetch(`/api/movie?id=${movieId}`);
    const data = await res.json();

    setMovie(data);
  };

  return (

    <div style={{ textAlign: "center", padding: "40px", fontFamily: "Arial" }}>

      <h1>AI Movie Insight Builder</h1>

      <div style={{ marginTop: "20px" }}>

        <input
          type="text"
          placeholder="Enter IMDb ID (tt0133093)"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
          style={{
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "220px"
          }}
        />

        <button
          onClick={searchMovie}
          style={{
            marginLeft: "10px",
            padding: "10px 18px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Search
        </button>

      </div>

      {movie && (
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            alignItems: "flex-start"
          }}
        >

          <img src={movie.Poster} width="220" />

          <div style={{ textAlign: "left", maxWidth: "500px" }}>

            <h2>{movie.Title}</h2>

            <p><b>Year:</b> {movie.Year}</p>

            <p><b>Rating:</b> {movie.imdbRating}</p>

            <p><b>Cast:</b> {movie.Actors}</p>

            <p><b>Plot:</b> {movie.Plot}</p>

            <p><b>AI Sentiment:</b> {movie.sentiment}</p>

          </div>

        </div>
      )}

    </div>
  );
}