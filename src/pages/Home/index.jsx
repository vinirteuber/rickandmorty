import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { Card } from "./styles";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div>
        <div className="text-align">
          <h1>Lista de personagens</h1>
        </div>
        <div className="card">
          {characters.map((character) => (
            <Card key={character.id}>
              <div className="image">
                <img src={character.image} alt="images-characters" />
              </div>
              <div className="title">
                <h3>{character.name}</h3>
              </div>
              <div className="btn">
                <Link to={`/details/${character.id}`}>
                  <button>Details</button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
