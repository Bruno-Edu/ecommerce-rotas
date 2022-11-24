const Sequelize = require ('sequelize');
const database = require ('./db');

const Produto = database.define('produtos',{
   
    idproduto:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull:false
    },
    categoria:{
        type: Sequelize.STRING,
        allowNull:false
    },
    valor:{
        type: Sequelize.DOUBLE,
        allowNull:false
    },
    quantidade:{
        type: Sequelize.INTEGER,
        allowNull:false
    },
    desc:{
        type: Sequelize.STRING,
        allowNull:false
    },
})
 
// Comentar a linha abaixo após a criação da tabela
//Produto.sync({force:true});

module.exports = Produto;