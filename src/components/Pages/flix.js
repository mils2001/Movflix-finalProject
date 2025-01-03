import React, { useState, useEffect } from "react";
import './flix.css'

const API_URL = "http://localhost:3000/films";

function Flix() {
  const [movieList, setMovieList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [isPaymentPopupVisible, setIsPaymentPopupVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Fetch movies from the API
  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      setMovieList(data);
    } catch (error) {
      console.log("Error fetching movies", error);
    }
  };

  // Handle purchase button click
  const handlePurchaseClick = (movie) => {
    setSelectedMovie(movie);
    setIsPaymentPopupVisible(true);
  };

  // Handle payment form submission
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setAlertMessage(
      `You purchased "${selectedMovie.title}" using ${paymentMethod}! Phone Number: ${phoneNumber}`
    );
    setIsPaymentPopupVisible(false);
    setTimeout(() => setAlertMessage(""), 8000);
    setPhoneNumber("");
    setPaymentMethod("");
  };

  // Filter movies based on search query
  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="flix-app">
      {/* Alert Message */}
      {alertMessage && <div className="alert">{alertMessage}</div>}

      {/* Search Bar */}
      <div className="search-bar">
    
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        
          
        />
         <button className="btn">Search</button>
    
      </div>

      {/* Movie List */}
      <div className="movie-list">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <button className="btn" onClick={() => handlePurchaseClick(movie)}>
                Purchase Movie
              </button>
            </div>
          ))
        ) : (
          <p>No Movies Found Please Reload The Page Or Kindly Check Your Internet Connection.</p>
        )}
      </div>

      {/* Payment Popup */}
      {isPaymentPopupVisible && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Choose Payment Method for {selectedMovie?.title}</h3>
            <form onSubmit={handlePaymentSubmit}>
              <label htmlFor="payment-method">Payment Method:</label>
              <select
                id="payment-method"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="" disabled>
                  Select Payment Method
                </option>
                <option value="M-Pesa">M-Pesa</option>
                <option value="Airtel Money">Airtel Money</option>
                <option value="Western Union">Western Union</option>
              </select>
              <input
                type="tel"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
              <button type="submit" className="btn-submit">
                Submit
              </button>
              <button
                type="button"
                className="close-btn"
                onClick={() => setIsPaymentPopupVisible(false)}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <span>2025 Molvotv Entertainment @ All rights reserved.</span>
      </footer>
    </div>
  );
}

export default Flix;
