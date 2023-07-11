import React, { useState } from "react";
import Button from "@mui/material/Button";

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
        <div>
          <h1>{item.name}</h1>
          <h1>{item.email}</h1>
        </div>
      );
    });
  };

  return (
    <div>
      <Button variant="contained" onClick={clickHandler}>
        Show Data
      </Button>
      {show ? mapData() : null}
    </div>
  );
}

export default Data;
