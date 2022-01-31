import React, { useState, useEffect, Fragment } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { FakeBookList } from "./FakeBookList";
import { Paper } from "@mui/material";
import { Image } from "@mui/icons-material";

export default function Book(props) {
 git 

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="img"
              height="140"
              image={props.imageUrl}
              alt="green iguana"
            />
            <Typography gutterBottom variant="h5" component="div">
              {" "}
              Title: {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <br />
              Author: {props.author}
              <br />
              Description: {props.description}
              <br />
              Price: {props.price} €
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
