const mongoose = require("mongoose");
const validator = require("validator");

const formSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: [5, "Title must be at least 5 characters long"],
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
  },
  {
    versionKey: false,
  }
);

const Form = mongoose.model("Form", formSchema);

module.exports = Form;
