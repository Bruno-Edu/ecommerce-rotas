const Sequelize = require ('sequelize'); //Criando uma variável e fazendo a requisição do Sequelize que foi instalado através no npm
const database = require ('./db'); // Criando uma variável e fazendo a requisição do arquivo criado em js que está se conectando com o Bando de Dados 

const Cliente = database.define('cliente',{ //Criando uma variável com o nome relacionado ao nome da tabela.
   //Esse serão os campos que a minha tabela cliente terá
    idcliente:{ // Especificando o tipo de campo que contêm a tabela
        type: Sequelize.INTEGER, // Usando a linguagem Sequelize e informando que é do Tipo Inteiro
        primaryKey: true, // Chave Primária
        autoIncrement: true, // Auto Incremento
        allowNull:false, // Não pode ser nulo. Precisa preencher
    },
    nome:{
        type: Sequelize.STRING, // Usando a linguagem Sequelize e informando que é do Tipo Varchar
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    email:{
        type: Sequelize.STRING, // Usando a linguagem Sequelize e informando que é do Tipo Varchar
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    senha:{
        type: Sequelize.STRING, // Usando a linguagem Sequelize e informando que é do Tipo Varchar
        allowNull:false // Não pode ser nulo. Precisa preencher
    },
    telefone:{
        type: Sequelize.INTEGER, // Usando a linguagem Sequelize e informando que é do Tipo Inteiro
        allowNull:true // Pode ser nulo. NÃO precisa preencher
    }
   
});

// Comentar a linha abaixo após a criação da tabela. Se não comentar e usar o nodemon, os dados não ficarão salvos
//Cliente.sync({force:true});
module.exports = Cliente; // Exportando para usar em outro lugar