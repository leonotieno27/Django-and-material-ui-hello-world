import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Typography, Paper } from "@mui/material";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/hello/")
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
        <Typography variant="h4" gutterBottom>
          {message}
        </Typography>
      </Paper>
    </Container>
  );
}

export default App;
