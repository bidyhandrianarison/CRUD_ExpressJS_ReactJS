const expresss=require('express');
const cors=require('cors')

const router= expresss.Router()

router.use(cors());
router.use(expresss.json());

router.post('/tasks', (req,res) => {
    const db = req.app.get('db');
    const sql = 'INSERT INTO task(tasks) VALUES(?)';
    const values=[
        req.body.task
    ];
    db.query(sql,[values],(err,data) => {
        if(err){
            return res.json("Erreur lors de la requête");
        }
        else{
            console.log("Nouvelle tâche ajoutée avec succès");
            return res.json(data);
        }
    });
});

router.get('/tasks', (req,res) => {
    const db = req.app.get('db');
    const sql = 'SELECT * FROM task' ;
    db.query(sql, (err,results) => {
        if(err){
            return res.json("Erreur lors de la requête");
        }
        else{
            console.log("Données récuperés avec succès");
            res.json(results);
        }
    });
})
router.delete('/tasks/:id', (req,res) => {
    const db = req.app.get('db');
    const sql = 'DELETE FROM task WHERE ID = ?' ;
    const id = req.params.id;
    db.query(sql,id, (err,results) => {
        if(err){
            return res.json("Erreur lors de la requête");
        }
        else{
            console.log("Tâche supprimé avec succès");
            res.json(results);
        }
    });
})

module.exports=router;