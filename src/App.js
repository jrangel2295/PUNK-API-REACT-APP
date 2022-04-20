import { useState, useEffect } from "react";
import List from "./components/List/List";
import "./App.css";

export default function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <>
      <List items={characters} />
    </>
  );
}
