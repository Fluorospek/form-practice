const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Form = require("./model/formModel");
const cors = require("cors");

app.use(express.json());
app.use(
  cors({
    origin: true,
  })
);

app.post("/submitform", async (req, res) => {
  const form = await Form.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      form,
    },
  });
});

app.get("/getresponses", async (req, res) => {
  const forms = await Form.find({}, { _id: 0 });
  res.status(200).json({
    status: "success",
    data: {
      forms,
    },
  });
});

module.exports = app;
