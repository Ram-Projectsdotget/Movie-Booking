import React from "react";
import Movies from "./movies";

const Home = () => {
  const homeStyle = {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#f8f9fa",
  };

  const titleStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2c3e50",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#555",
    marginTop: "10px",
  };

  return (
    <div style={homeStyle}>
      <h1 style={titleStyle}>Welcome to Movie Booking Site</h1>
      <p style={paragraphStyle}>Book your favorite movies easily.</p>
      <Movies />
    </div>
  );
};

export default Home;
