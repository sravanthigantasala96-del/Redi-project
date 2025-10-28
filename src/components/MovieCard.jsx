function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h2>{movie.name}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Release Year: {movie.releaseYear}</p>
    </div>
  );
}

export default MovieCard;