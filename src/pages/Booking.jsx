import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Booking = () => {
  const { id } = useParams(); // Movie ID from URL
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({ name: "", email: "" });
  const [theaters, setTheaters] = useState([]);
  const [showTimings, setShowTimings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [detailsSaved, setDetailsSaved] = useState(false);

  useEffect(() => {
    const fetchTheaters = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:8080/getAllTheaters");
        setTheaters(response.data);
      } catch (error) {
        console.error("Error fetching theaters:", error);
        setError("Failed to fetch theaters. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchTheaters();
  }, []);

  useEffect(() => {
    const fetchShowTimings = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get("http://localhost:8080/shows/getAllShows");
        setShowTimings(response.data);
      } catch (error) {
        console.error("Error fetching show timings:", error);
        setError("Failed to fetch show timings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchShowTimings();
  }, []);

  const handleSubmit = async () => {
    if (!userDetails.name || !userDetails.email) {
      alert("Please enter both name and email.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/users/save", userDetails);
      console.log("User saved:", response.data);
      alert("User details saved successfully!");
      setDetailsSaved(true); // Enable theater selection
    } catch (error) {
      console.error("Error saving user details:", error);
      alert("Failed to save user details.");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Book Your Tickets</h1>

      {/* User Details */}
      <input
        type="text"
        placeholder="Your Name"
        value={userDetails.name}
        onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
        style={styles.input}
        disabled={detailsSaved}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={userDetails.email}
        onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
        style={styles.input}
        disabled={detailsSaved}
      />
      {!detailsSaved && (
        <button onClick={handleSubmit} style={styles.submitButton}>
          Save Details
        </button>
      )}

      {/* Theater Selection (Only Show if User Details are Saved) */}
      {detailsSaved && (
        <>
          <h2 style={styles.sectionTitle}>Select Theater</h2>
          {loading && <p>Loading theaters...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {theaters.map((theater) => (
            <div key={theater.theaterId} style={{ marginBottom: "20px" }}>
              <h3>
                {theater.theaterName}, {theater.theaterLocation}
              </h3>
              {showTimings.slice(0, 4).map((timing, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!theater.theaterId || !timing.showId) {
                      alert("Error: Theater ID or Show ID is missing!");
                      console.error("Missing ID - Theater:", theater, "Show:", timing);
                      return;
                    }
                    navigate(`/seats/${theater.theaterId}/${timing.showId}`, {
                      state: { userDetails },
                    });
                  }}
                  style={styles.button}
                >
                  {timing.showTimings}
                </button>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

// Styles
const styles = {
  input: {
    width: "250px",
    padding: "8px",
    margin: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
  sectionTitle: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: "15px 0",
  },
  button: {
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 15px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
    transition: "background 0.3s ease-in-out",
  },
  submitButton: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "10px 15px",
    fontSize: "1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  },
};

export default Booking;
