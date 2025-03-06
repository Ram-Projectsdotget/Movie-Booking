import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  let [movies, setMovies] = useState(null);
  useEffect(() => {
    const FetchData = async () => {
      let { data } = await axios.get("http://localhost:8080/getAll");
      console.log(data);
      setMovies(data);
    };
    FetchData();
  }, []);

  let navigate = useNavigate();

  // Inline Styles
  const containerStyle = {
    textAlign: "center",
    padding: "20px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    padding: "20px",
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease-in-out",
  };

  const cardHoverStyle = {
    transform: "translateY(-5px)",
  };

  const imgStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    marginTop: "10px",
    color: "#2c3e50",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    color: "#777",
    margin: "5px 0",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    transition: "background 0.3s ease-in-out",
  };

  const buttonHoverStyle = {
    backgroundColor: "#0056b3",
    boxShadow: "0 4px 8px rgb(1, 1, 1)",
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>MOVIES</h1>
      <div style={gridStyle}>
        {movies === null ? (
          <p>Loading...</p>
        ) : (
          movies.map((ele) => {
            return (
              <div
                key={ele.id}
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = cardHoverStyle.transform)}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "none")}
              >
                <img src={ele.movieImage} alt={ele.movieTitle} style={imgStyle} />
                <h1 style={titleStyle}>{ele.movieTitle}</h1>
                <p style={paragraphStyle}>{ele.movieGenre}</p>
                <p style={paragraphStyle}>{ele.movieLanguage}</p>
                <button
  style={buttonStyle}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor)}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor)}
  onClick={() => navigate(`/movie/${ele.id}`, { state: { movie: ele } })} // ✅ Pass movie data
>
  View Details
</button>

              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Movies;
