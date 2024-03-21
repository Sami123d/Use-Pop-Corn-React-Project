import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import MovieShow from "./components/MovieShow";

function App() {
  const [inputSearch, SetinputSearch] = useState("");
  const [movieShow, setMovieShow] = useState([]);
  const [foundLength, setFoundLength] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=78757657&s=${inputSearch}`
      )
      .then((res) => {
        console.log(res.data, "====> ressssss");
        setFoundLength(res.data.Search.length)
        console.log(res.data.Search.length, "sssssssssss");
        setMovieShow(res.data.Search);

      })
      .catch((error) => {
        console.log("error");
      });
  }, [inputSearch]);

  return (
    <div
      style={{ backgroundColor: "#1b2021", width: "100vw", height: "100vh" }}
    >
      <Navbar Setinput={SetinputSearch} foundLength={foundLength} setMovie={setMovieShow} />
      <div className="movies-div">
        <MovieShow movieShow={movieShow}/>
        <MoviesList />
      </div>
    </div>
  );
}

export default App;
