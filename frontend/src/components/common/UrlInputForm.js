import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

function UrlInputForm() {
  const [url, setUrl] = useState("");

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the backend with the URL data
    fetch("http://your_backend_url/api/scrape", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data from the backend
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error:", error);
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Input Url"
        variant="outlined"
        value={url}
        onChange={handleUrlChange}
      />
      <Button type="submit" variant="contained">
        Submit
      </Button>
    </Box>
  );
}

export default UrlInputForm;
