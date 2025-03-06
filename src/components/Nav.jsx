import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Styles
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#1a202c",
    padding: "16px",
    color: "white",
  };

  const searchContainerStyle = {
    position: "relative",
    width: "33%",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px 8px 8px 40px",
    borderRadius: "6px",
    backgroundColor: "#2d3748",
    color: "white",
    outline: "none",
    border: "none",
  };

  const searchIconStyle = {
    position: "absolute",
    left: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#a0aec0",
  };

  const titleStyle = {
    alignItems:"center",
    fontSize: "1.25rem",
    fontWeight: "bold",
  };

  // Handle search submission
  const handleSearch = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      if (query.trim()) {
        navigate(`/search?query=${query}`);
      }
    }
  };

  return (
    <nav style={navStyle}>
      <h1 style={titleStyle}>Movie Booking Site</h1>
    </nav>
  );
}
