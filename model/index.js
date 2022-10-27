

const Sequelize  = require("sequelize");

const connection = require('../database/index');



const modelSymbianppdm = connection.define(
  'tbl_Symbianpatient',
  {
    cod_patient:{
        type:Sequelize.INTEGER(10),
        primaryKey:true,
        autoIncrement:true
    },
    namepatient:{
        type:Sequelize.STRING(100),
        allowNull:true
    },
    telpatient:{
        type:Sequelize.STRING(100),
        allowNull:true
    },
    cellpatient:{
        type:Sequelize.STRING(100),
        allowNull:true
    },
    emailpatient:{
        type:Sequelize.STRING(100),
        allowNull:true
    },
    
    

  }
);

// modelSymbianppdm.sync({force:true});

module.exports = modelSymbianppdm;