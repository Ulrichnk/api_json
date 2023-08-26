const express = require("express");
const jsonServer = require("json-server");
const cors = require("cors");

const app = express();
const router = jsonServer.router("db.json"); // Remplacez par le chemin vers votre fichier de données JSON
const middlewares = jsonServer.defaults();

app.use(cors()); // Utiliser le middleware cors

// Configurer les en-têtes CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "react-inventaire.web.app"); // Remplacez * par vos domaines autorisés
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Méthodes HTTP autorisées
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  ); // En-têtes autorisés
  next();
});

// Utiliser les middlewares de json-server
app.use(middlewares);

// Utiliser le routeur de json-server
app.use(router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
