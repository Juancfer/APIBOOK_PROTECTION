const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Author } = require("../models/Author.js");

const authorList = [
  {
    name: "J.K. Rowling",
    country: "SPAIN",
    email: "jkrowling@gmail.com",
    password: "12345678",
  },
  {
    name: "George Orwell",
    country: "GERMANY",
    email: "gorwell@gmail.com",
    password: "12345678",
  },
  {
    name: "Harper Lee",
    country: "USA",
    email: "hlee@gmail.com",
    password: "12345678",
  },
  {
    name: "F. Scott Fitzgerald",
    country: "USA",
    email: "fsfitzgerald@gmail.com",
    password: "12345678",
  },
  {
    name: "Jane Austen",
    country: "FRANCE",
    email: "jausten@gmail.com",
    password: "12345678",
  },
  {
    name: "Gabriel G. Marquez",
    country: "COLOMBIA",
    email: "ggmarquez@gmail.com",
    password: "12345678",
  },
  {
    name: "Romulo Gallegos",
    country: "VENEZUELA",
    email: "rgallegos@gmail.com",
    password: "12345678",
  },
  {
    name: "Arturo Uslar Pietri",
    country: "VENEZUELA",
    email: "aupietri@gmail.com",
    password: "12345678",
  },
];

connect().then(() => {
  console.log("Tenemos conexión");

  Author.collection.drop().then(() => {
    console.log("Usuarios eliminados");

    const documents = authorList.map((author) => new Author(author));
    Author.insertMany(documents)
      .then(() => console.log("Datos guardados correctamente!"))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  });
});
