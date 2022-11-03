const express = require('express');

const bdpatient = require('../model/index');


//CONFIGURAR A ROTA (ROUTER)
const router = express.Router();

//ROTA DE LISTAGEM DE LIVROS
router.get('/Allpatient', (req, res) => {

    bdpatient.findAll()
        .then(
            (patiente) => {
                res.status(200).send(patiente)
            }
        )
        .catch((erro) => {
            res.status(500).json({ erro: "não encontrado nenhum paciente" })
        })



});


router.post('/creatpatient', (req, res) => {

    let { namepatient, telpatient, cellpatient, emailpatient } = req.body;


    bdpatient.create({
        namepatient,
        telpatient,
        cellpatient,
        emailpatient
    }).then(() => {
        res.status(201).json({ "sucess": "paciente registrado com sucesso" })
    })
        .catch((error) => { res.status(500).json({ "error": "DEU TUDO ERRADO" }) });


});


module.exports = router;