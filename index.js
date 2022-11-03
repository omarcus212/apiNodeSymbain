const express = require ('express');

const app = express();

app.use(express.json());

const controlle = require('./controller/index');

app.use('/', controlle);

app.listen(3000,()=>{
    console.log("APLICAÇÃO RODANDO EM http://localhost:3000"); 
});