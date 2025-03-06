import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const footerStyle = {
    backgroundColor: "#1a202c",
    color: "white",
    padding: "16px",
    marginTop: "32px",
    textAlign: "center",
  };

  const titleStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginTop: "8px",
  };

  const iconStyle = {
    transition: "color 0.3s ease-in-out",
  };

  return (
    <footer style={footerStyle}>
      <h2 style={titleStyle}>Contact Us</h2>
      <div style={iconContainerStyle}>
        <a href="#" style={{ ...iconStyle, color: "#ffffff" }} onMouseEnter={(e) => e.currentTarget.style.color = "#3b82f6"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
          <Facebook size={24} />
        </a>
        <a href="#" style={{ ...iconStyle, color: "#ffffff" }} onMouseEnter={(e) => e.currentTarget.style.color = "#60a5fa"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
          <Twitter size={24} />
        </a>
        <a href="#" style={{ ...iconStyle, color: "#ffffff" }} onMouseEnter={(e) => e.currentTarget.style.color = "#ec4899"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
          <Instagram size={24} />
        </a>
        <a href="#" style={{ ...iconStyle, color: "#ffffff" }} onMouseEnter={(e) => e.currentTarget.style.color = "#2563eb"} onMouseLeave={(e) => e.currentTarget.style.color = "#ffffff"}>
          <Linkedin size={24} />
        </a>
      </div>
      <p style={{ marginTop: "8px", fontSize: "0.875rem" }}>
        &copy; 2025 Movie Booking Site. All Rights Reserved.
      </p>
    </footer>
  );
}
