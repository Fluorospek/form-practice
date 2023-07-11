const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Form = require("./model/formModel");

app.use(express.json());

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
  const forms = await Form.find();
  res.status(200).json({
    status: "success",
    data: {
      forms,
    },
  });
});

module.exports = app;
