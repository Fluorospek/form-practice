import React, { useState } from "react";
import { Box } from "@material-ui/core";
import { TextField, Button } from "@mui/material";
import axios from "axios";

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
    <div>
      <Box display="flex" flexDirection="column">
        <TextField
          id="name"
          label="name"
          value={user.name}
          onChange={setField}
        />
        <TextField
          id="email"
          label="email"
          value={user.email}
          onChange={setField}
        />
        <Button variant="contained" onClick={submit}>
          Submit
        </Button>
      </Box>
    </div>
  );
}

export default Form;
