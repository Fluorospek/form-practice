import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { TextField, Button, Typography } from "@mui/material";
import axios from "axios";
import Grid from "@mui/material/Grid";

function Form() {
  const [user, setUser] = useState({ name: "", email: "" });

  const setField = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const submit = async () => {
    await axios.post("http://localhost:5000/submitform", user);
    console.log(user);
  };

  return (
    <Grid container direction="column" maxWidth="sm" alignItems="center" style={{margin:"auto",marginTop:"10%"}}> 
      <Typography variant="h4" color="initial">
        LOGIN
      </Typography>
      <TextField id="name" label="name" value={user.name} onChange={setField} />

      <TextField
        id="email"
        label="email"
        value={user.email}
        onChange={setField}
      />

      <Button variant="contained" onClick={submit} sx={{ my: 3}} style={{width:"200px"}}>
        Submit
      </Button>
    </Grid>
  );
}

export default Form;
