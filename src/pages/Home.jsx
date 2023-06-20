import React from "react";
import "./Home.css";
import { books } from "../services/bookMockAPI";

function Home() {
  return (
    <div>
      <p>Домашняя страница</p>
      {books.map((book, i) => (
        <img alt={book.title} src={book.img} key={i} />
      ))}
    </div>
  );
}

export default Home;
