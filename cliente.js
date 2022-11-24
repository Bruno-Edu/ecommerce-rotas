const Sequelize = require ('sequelize');
const database = require ('./db');

const Cliente = database.define('cliente',{
   
    idcliente:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    nome:{
        type: Sequelize.STRING,
        allowNull:false
    },
    email:{
        type: Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type: Sequelize.STRING,
        allowNull:false
    },
    telefone:{
        type: Sequelize.INTEGER,
        allowNull:true
    }
   
});

// Comentar a linha abaixo após a criação da tabela
//Cliente.sync({force:true});
module.exports = Cliente;