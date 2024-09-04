const express =require("express")

router=express.Router()
//PAGE D'ACCUEIL
router.get('/',(req,res)=>{
    res.send("<h1>HOMEPAGE</h1>")
})

module.exports=router