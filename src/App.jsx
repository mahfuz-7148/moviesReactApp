import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";

const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const fetchMovies = async () => {

    try {
      const endPoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endPoint, API_OPTIONS)
        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }
    } catch (error) {
      console.error(`Error fetching movies ${error}`)
      setErrorMessage("Error fetching movies please try again");
    }
  }

  useEffect(() => {
    fetchMovies()
  
  }, [])
  
  return (
    <main>
      <div className="pattern" />
      <div className="wrapper">
        <header>
          <img src="/public/hero.png" alt="" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2>All Movies</h2>
          {errorMessage && <p className="text-teal-500">{errorMessage }</p>}
          
        </section>
      </div>
    </main>
  );
};

export default App;
