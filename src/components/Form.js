import React, { useState, useEffect,Fragment } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FakeBookList } from "./FakeBookList";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { CardContent } from "@mui/material";
import { Paper } from "@mui/material";
import { Image } from "@mui/icons-material";

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const [books, setBooks] = useState([]);


  const handleClick = (e) => {
    e.preventDefault();
    const Form = { title, author, description, price, imageUrl };
    console.log(Form);
    fetch("http://localhost:8080/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Form),
    }).then(() => {
      console.log("New Book added");
    });
  };

  useEffect(()=>{
    fetch("http://localhost:8080/books")
    .then(res=>res.json())
    .then((result)=>{
      setBooks(result);
      console.log(books)
    }
  )
  },[])

  


  return (
    <Fragment>
    <form>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Title"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Author"
          variant="standard"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="description"
          variant="standard"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Price"
          variant="standard"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          id="standard-basic"
          label="Book Cover"
          variant="standard"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button
          variant="outlined"
          startIcon={<SaveIcon />}
          size="small"
          onClick={handleClick}
        >
          Save
        </Button>
      </Box>
    </form>
    <h1>Books Availables</h1>
    <div>
    {books.map((book)=>(
    
      <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
        <CardMedia
          component="img"
          height="140"
          image= {book.imageUrl}
          alt="green iguana"
        />
          <Typography gutterBottom variant="h5" component="div"> Title: {book.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            
            <br/>
            Author: {book.author}
            <br/>
            Description: {book.description}
            <br/>
            Price: {book.price} €

          </Typography>
          <Paper variant="outlined">
          <Image src='https://via.placeholder.com/64'
          />

          </Paper>

        </CardContent>
      </CardActionArea>
    </Card>
      
    ))}
    </div>
    </Fragment>
  );
 
}

// export default function LoadingButtonsTransition() {
//   const [loading, setLoading] = React.useState(false);
//   function handleClick() {
//     setLoading(true);
//   }

//   return (
//     <Box sx={{ '& > button': { m: 1 } }}>
//       <FormControlLabel
//         sx={{
//           display: 'block',
//         }}
//         control={
//           <Switch
//             checked={loading}
//             onChange={() => setLoading(!loading)}
//             name="loading"
//             color="primary"
//           />
//         }
//         label="Loading"
//       />
//       <LoadingButton
//         onClick={handleClick}
//         loading={loading}
//         variant="outlined"
//         disabled
//       >
//         disabled
//       </LoadingButton>
//       <LoadingButton
//         onClick={handleClick}
//         loading={loading}
//         loadingIndicator="Loading..."
//         variant="outlined"
//       >
//         Fetch data
//       </LoadingButton>
//       <LoadingButton
//         onClick={handleClick}
//         endIcon={<SendIcon />}
//         loading={loading}
//         loadingPosition="end"
//         variant="contained"
//       >
//         Send
//       </LoadingButton>

//     </Box>
//   );
// }
