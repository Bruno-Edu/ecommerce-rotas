const Sequelize = require ('sequelize'); //Criando uma variável e fazendo a requisição do Sequelize que foi instalado através no npm
const database = require ('./db'); // Criando uma variável e fazendo a requisição do arquivo criado em js que está se conectando com o Bando de Dados

const Produto = database.define('produtos',{ //Criando uma variável com o nome relacionado ao nome da tabela.
   //Esse serão os campos que a minha tabela cliente terá
    idproduto:{ // Especificando o tipo de campo que contêm a tabela
        type: Sequelize.INTEGER, // Usando a linguagem Sequelize e informando que é do Tipo Inteiro
        primaryKey: true,
        autoIncrement: true,
        allowNull:false, // Não pode ser nulo. Precisa preencher
    },
    nome: {
        type: Sequelize.STRING, // Usando a linguagem Sequelize e informando que é do Tipo VARCHAR
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    categoria:{
        type: Sequelize.STRING, // Usando a linguagem Sequelize e informando que é do Tipo VARCHAR
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    valor:{
        type: Sequelize.DECIMAL, // Usando a linguagem Sequelize e informando que é do Tipo VARCHAR
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    quantidade:{
        type: Sequelize.INTEGER, // Usando a linguagem Sequelize e informando que é do Tipo Inteiro
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    desc:{
        type: Sequelize.STRING, // Usando a linguagem Sequelize e informando que é do Tipo VARCHAR
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
})
 
// Comentar a linha abaixo após a criação da tabela. Se não comentar e usar o nodemon, os dados não ficarão salvos
//Produto.sync({force:true});
module.exports = Produto; // Exportando para usar em outro lugar