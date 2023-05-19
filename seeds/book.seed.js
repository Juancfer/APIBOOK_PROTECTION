const mongoose = require("mongoose");
const { connect } = require("../db.js");
const { Book } = require("../models/Book.js");

const bookList = [
  {
    title: "Harry Potter",
    author: {
      name: "J.K. Rowling",
      country: "SPAIN",
      email: "jkrowling@gmail.com",
      password: "12345678",
    },
    pages: 543,
  },
  {
    title: "1984",
    author: {
      name: "George Orwell",
      country: "GERMANY",
      email: "gorwell@gmail.com",
      password: "12345678",
    },
    pages: 328,
  },
  {
    title: "To Kill a Mockingbird",
    author: {
      name: "Harper Lee",
      country: "USA",
      email: "hlee@gmail.com",
      password: "12345678",
    },
    pages: 281,
  },
  {
    title: "The Great Gatsby",
    author: {
      name: "F. Scott Fitzgerald",
      country: "USA",
      email: "fsfitzgerald@gmail.com",
      password: "12345678",
    },
    pages: 180,
  },
  {
    title: "Pride and Prejudice",
    author: {
      name: "Jane Austen",
      country: "FRANCE",
      email: "jausten@gmail.com",
      password: "12345678",
    },
    pages: 279,
  },
  {
    title: "100 AÑOS DE SOLEDAD",
    author: {
      name: "Gabriel G. Marquez",
      country: "COLOMBIA",
      email: "ggmarquez@gmail.com",
      password: "12345678",
    },
    pages: 350,
  },
  {
    title: "DOÑA BARBARA",
    author: {
      name: "Romulo Gallegos",
      country: "VENEZUELA",
      email: "rgallegos@gmail.com",
      password: "12345678",
    },
    pages: 320,
  },
  {
    title: "LANZAS COLORADAS",
    author: {
      name: "Arturo Uslar Pietri",
      country: "VENEZUELA",
      email: "aupietri@gmail.com",
      password: "12345678",
    },
    pages: 320,
  },
];

connect().then(() => {
  console.log("Tenemos conexión");

  Book.collection.drop().then(() => {
    console.log("Usuarios eliminados");

    const documents = bookList.map((book) => new Book(book));
    Book.insertMany(documents)
      .then(() => console.log("Datos guardados correctamente!"))
      .catch((error) => console.error(error))
      .finally(() => mongoose.disconnect());
  });
});
