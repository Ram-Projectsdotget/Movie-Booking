import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Movies from "./pages/movies";
import MovieDetails from "./pages/MovieDetails"; 
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Seats from "./pages/Seats";

const App = () => {
  return (
    // <><Seats/></>
 <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/seats/:theaterId/:showId" element={<Seats/>} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
