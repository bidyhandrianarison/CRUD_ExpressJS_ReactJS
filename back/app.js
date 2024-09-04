const express = require("express");
const mysql = require("mysql");
const home = require("./routes/home");
const user = require("./routes/user");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/home", home);
app.use(user);

// CONNEXION A LA BASE DE DONNEE MYSQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "user_db"
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connecté à la base de données user_db avec succès !");
});

app.set('db', db); // Set the db connection in the app

app.listen(3005, () => {
    console.log("Démarrage du serveur sur le port 3005");
});