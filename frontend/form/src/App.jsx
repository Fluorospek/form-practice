import { useState } from "react";
import Form from "./Form.jsx";
import Data from "./Data.jsx";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

function App() {
  return (
    <>
      <Grid container direction="column" alignItems="center">
      <Form></Form>
      <Data></Data>
      </Grid>
    </>
  );
}

export default App;
