import React from "react";
import Item from "../Item/Item";
import "./List.css";

export default function List(props) {
  return (
    <ul className="list">
      {props.items.map((character) => (
        <Item key={character.id} item={character} />
      ))}
    </ul>
  );
}