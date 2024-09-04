const express = require("express");
const cors = require("cors");

const router = express.Router();
// OPERATIONS POUR LES CRUD
router.use(cors());
router.use(express.json());

// CREATE
router.post("/user", (req, res) => {
  const db = req.app.get('db');
  const sql = 'INSERT INTO user(name, email) VALUES(?,?)';

    const values = [
        req.body.name,
        req.body.email
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Erreur lors de la requête");
        } else {
            console.log("Nouvel utilisateur ajouté avec succès");
            return res.json(data);
        }
    });
});
//READ
router.get('/user', (req, res) => {
    const db = req.app.get('db');
    const sql = 'SELECT * FROM user';
    db.query(sql, (err, results) => {
        if (err) {
            return res.json("Erreur lors de la requête");
        } else {
            console.log("Données récuperés avec succès");
            res.json(results);
        }
    });
})

router.get('/user/:id', (req, res) => {
    const db = req.app.get('db');
    const sql = 'SELECT * FROM user WHERE id = ?';
    const userId = req.params.id;
    db.query(sql, [userId], (err, results) => {
        if (err) {
            return res.json("Erreur lors de la requête");
        } else {
            console.log("Données de l'utilisateur récupérées avec succès");
            res.json(results[0]);
        }
    });
});


router.put('/user/:id', (req, res) => {
    const db = req.app.get('db');
    const sql = 'UPDATE user SET name = ?, email = ? WHERE id = ?';
    const values = [
        req.body.name,
        req.body.email,
        req.body.id
    ];
    db.query(sql, values, (err, data) => {
        if (err) {
            return res.json("Erreur lors de la requête");
        } else {
            console.log("Utilisateur mis à jour avec succès");
            return res.json(data);
        }
    });
})

//DELETE
router.delete('/user/:id', (req, res) => {
    const db = req.app.get('db');
    const sql ='DELETE FROM user WHERE id = ?';
    const id = req.params.id;
    db.query(sql, [id], (err, results) => {
        if (err) {
            return res.json("Erreur lors de la requête");
        } else {
            console.log("Utilisateur supprimé avec succès");
            res.json(results);
        }
    });
})

module.exports = router;
