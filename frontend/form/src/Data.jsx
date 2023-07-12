import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

function Data() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const clickHandler = async () => {
    setShow(false);
    const response = await fetch("http://localhost:5000/getresponses");
    const RawData = await response.json();
    setData(RawData.data.forms);
    setShow(true);
  };

  const mapData = () => {
    return data.map((item) => {
      return (
        <Grid container alignItems="center" key={item._id}>
          <h3>{item.name}</h3>
          <h3>{item.email}</h3>
          <br />
        </Grid>
      );
    });
  };

  return (
    <div>
      <Button
        variant="contained"
        onClick={clickHandler}
        style={{ width: "200px" }}
      >
        Show Data
      </Button>
      {show ? mapData() : null}
    </div>
  );
}

export default Data;
