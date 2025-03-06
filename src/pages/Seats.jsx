import React, { useState, useEffect } from "react";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const COLUMNS = 10;
const MAX_SELECTION = 5;

const PRESELECTED_SEATS = ["A1", "B3", "C5", "F7", "H2"]; // Example booked seats

const Seats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Load selected seats from local storage when the component mounts
  useEffect(() => {
    const savedSeats = JSON.parse(localStorage.getItem("selectedSeats")) || [];
    setSelectedSeats(savedSeats);
  }, []);

  // Save selected seats to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  }, [selectedSeats]);

  const toggleSeatSelection = (seat) => {
    if (PRESELECTED_SEATS.includes(seat)) return; // Block already booked seats

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else if (selectedSeats.length < MAX_SELECTION) {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotal = () => {
    return selectedSeats.reduce((total, seat) => {
      return total + (["A", "B", "C", "D", "E"].includes(seat.charAt(0)) ? 200 : 150);
    }, 0);
  };

  const handleBuy = () => {
    if (selectedSeats.length === 0) return;
    alert(`Seats: ${selectedSeats.join(", ")}\nTotal: ₹${calculateTotal()}\nThank you!`);
  };

  return (
    <div style={styles.container}>
      <h1>Select Your Seats</h1>

      {/* Diamond Seats */}
      <h2 style={styles.categoryLabel}>Diamond Seats (₹200)</h2>
      {ROWS.slice(0, 5).map((row) => (
        <div key={row} style={styles.row}>
          {Array.from({ length: COLUMNS }, (_, i) => {
            const seat = `${row}${i + 1}`;
            return (
              <button
                key={seat}
                onClick={() => toggleSeatSelection(seat)}
                disabled={PRESELECTED_SEATS.includes(seat)}
                style={{
                  ...styles.seat,
                  backgroundColor: PRESELECTED_SEATS.includes(seat)
                    ? "black"
                    : selectedSeats.includes(seat)
                    ? "green"
                    : "#ccc",
                  cursor: PRESELECTED_SEATS.includes(seat) ? "not-allowed" : "pointer",
                }}
              >
                {seat}
              </button>
            );
          })}
        </div>
      ))}

      {/* Gold Seats */}
      <h2 style={styles.categoryLabel}>Gold Seats (₹150)</h2>
      {ROWS.slice(5, 10).map((row) => (
        <div key={row} style={styles.row}>
          {Array.from({ length: COLUMNS }, (_, i) => {
            const seat = `${row}${i + 1}`;
            return (
              <button
                key={seat}
                onClick={() => toggleSeatSelection(seat)}
                disabled={PRESELECTED_SEATS.includes(seat)}
                style={{
                  ...styles.seat,
                  backgroundColor: PRESELECTED_SEATS.includes(seat)
                    ? "black"
                    : selectedSeats.includes(seat)
                    ? "green"
                    : "#ccc",
                  cursor: PRESELECTED_SEATS.includes(seat) ? "not-allowed" : "pointer",
                }}
              >
                {seat}
              </button>
            );
          })}
        </div>
      ))}

      <h2>Total: ₹{calculateTotal()}</h2>
      <button style={styles.buyButton} onClick={handleBuy} disabled={selectedSeats.length === 0}>
        BUY ₹{calculateTotal()}
      </button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  categoryLabel: { fontSize: "1.2rem", fontWeight: "bold", marginTop: "20px", color: "#333" },
  row: { display: "flex", justifyContent: "center", gap: "8px", marginBottom: "5px" },
  seat: { width: "40px", height: "40px", borderRadius: "5px", fontSize: "14px", border: "1px solid #999", cursor: "pointer" },
  buyButton: { backgroundColor: "red", color: "white", padding: "10px 20px", fontSize: "1.2rem", border: "none", borderRadius: "5px", cursor: "pointer", marginTop: "15px" },
};

export default Seats;
