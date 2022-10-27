const express = require('express');

const patient = require('../model/index');


//CONFIGURAR A ROTA (ROUTER)
const router = express.Router();

//ROTA DE LISTAGEM DE LIVROS
router.get('/Allpatient', (req, res) => {

    findAll()
    patient.then(
        (books) => {
            res.status(200).send(books);
        }
    )
    .catch((erro) => {
        res.status(500).json({ "erro": "não á livros existentes " + erro })
    });


});


router.post ('/creatpatient', (req, res) => {

    return res.send('hellu gfrnagi');
    

});


module.exports = router;