import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Details() {
  const [characters, setCharacters] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode")
      .then((response) => {
        setEpisodes(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });

    // axios
    //   .get("https://rickandmortyapi.com/api/character")
    //   .then((response) => {
    //     setCharacters(response.data.results);
    //   })
    //   .then((data) => {
    //     setCharacters;
    //   });
  }, [id]);

  return (
    <>
      <Navbar />

      <div className="container">
        <div className="image">
          <img src={characters.image} alt="character" />
        </div>

        <div className="episodes">
          <h1>List EPs:</h1>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Details;
