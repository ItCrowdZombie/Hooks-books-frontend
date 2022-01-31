import React, { useState, useEffect, Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FakeBookList } from "./FakeBookList";
import { Paper } from "@mui/material";
import { Image } from "@mui/icons-material";
import Book from "./Book";

export default function BookList(props) {


  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
        console.log(books);
      });
  }, []);

  return (
    <div>
      {books.map(({title, author, description, price, imageUrl}) => (
         <Book 
          title={title}
          author = {author}
          description = {description}
          price = {price}
          imageUrl = {imageUrl}
          />
      ))}
    </div>
  );
}