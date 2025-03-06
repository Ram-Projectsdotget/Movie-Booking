import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams(); // Get movie ID from URL
  const [movie, setMovie] = useState(location.state?.movie || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movie) {
      setLoading(true);
      axios
        .get(`http://localhost:8080/getMovie/${id}`)
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
          setError("Failed to fetch movie details. Please try again.");
          setLoading(false);
        });
    }
  }, [id, movie]);

  // Handle Navigation to Booking Page with Proper Movie Data
  const handleBooking = () => {
    if (!movie || !movie.movieId) {
      alert("Movie details are missing! Cannot proceed.");
      return;
    }
    navigate(`/booking/${movie.movieId}`, { state: { movie } });
  };

  // Styles
  const styles = {
    container: { textAlign: "center", padding: "20px" },
    image: { width: "50%", borderRadius: "10px", maxWidth: "600px" },
    title: { fontSize: "2rem", fontWeight: "bold", margin: "10px 0", color: "#2c3e50" },
    info: { fontSize: "1.1rem", color: "#555", margin: "5px 0" },
    button: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px 15px",
      fontSize: "1rem",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "15px",
      transition: "background 0.3s ease-in-out",
    },
    error: { textAlign: "center", color: "red", fontSize: "1.2rem" },
  };

  if (loading) return <p style={styles.info}>Loading movie details...</p>;
  if (error) return <p style={styles.error}>{error}</p>;
  if (!movie) return <p style={styles.error}>Movie details not found!</p>;

  return (
    <div style={styles.container}>
      <img src={movie.movieImage} alt={movie.movieTitle} style={styles.image} />
      <h1 style={styles.title}>{movie.movieTitle}</h1>
      <p style={styles.info}>{movie.movieGenre}</p>
      <p style={styles.info}>{movie.movieDescription}</p>
      <button
        style={styles.button}
        onClick={handleBooking}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Book Tickets
      </button>
    </div>
  );
};

export default MovieDetails;
