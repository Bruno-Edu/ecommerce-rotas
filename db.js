const Sequelize = require ('sequelize'); // instânciando o Sequelize
const sequelize = new Sequelize ('e_commerce','root','',{dialect:'mysql',host:'localhost'}); // criando conexão com BD

// Verificando se a conexão foi bem sucedida
sequelize.authenticate() 
.then (function(){
    console.log('Conectado com o Banco de Dados !!!');
})
.catch (function(){
    console.log ('Erro de conexão');
})

//exortando o modulo para ser utilizado em outras classes

module.exports = sequelize;