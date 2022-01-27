import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FakeBookList } from "./FakeBookList";

export default function Form() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const handleClick = (e) => {
    e.preventDefault();
    const Form = { title, author, description, price, imageUrl };
    console.log(Form);
    fetch("http://localhost:8080/books",{ 
    method:"POST", 
    headers:{"Content-Type":"application/json"}, 
    body:JSON.stringify(book)
  
  }).then(()=>{ 
    console.log("New Book added")
  } 
    )} 
  };

  return (
    <form action="">
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