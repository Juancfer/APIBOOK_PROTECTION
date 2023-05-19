const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const allowedCountries = ["SPAIN", "ITALY", "USA", "GERMANY", "JAPAN", "FRANCE", "COLOMBIA", "VENEZUELA"];

const authorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: [3, "Debe ingresar al menos 3 letras para el nombre"],
      maxLength: 20,
      trim: true,
    },
    country: {
      type: String,
      required: false,
      enum: allowedCountries,
      uppercase: true,
      trim: true,
    },
    profileImage: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: "Email incorrecto",
      },
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
      select: false
    },
  },
  {
    timestamps: true,
  }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = { Author };
