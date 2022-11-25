const express = require ('express'); //Instanciando a classe do Express já instalado usando NPM
const app = express(); // Atribuindo uma variável para utilização nos métodos
const Produto = require ('./produto'); //Instanciando a classe do ponto que possui as querys
const Cliente = require ('./cliente'); //Instanciando a classe do ponto que possui as querys

app.use(express.json())// 

app.get('/', (request, response) => { //Primeira rota. 
    response.send ("<h1>E-Commerce</h1>");//Resposta desssa rota é enviar um texto html
});

// CADASTRAR PRODUTO
app.post('/cadastrarProduto', async (req,res)=>{
  await Produto.create(req.body)
  .then (()=>{
    return res.json ({
      erro:false,
      mensagem:"Produto inserido com Sucesso!"});

  }).catch (()=>{
      return res.status(400).json ({
        erro:true,
        mensagem:"Erro no cadastro do produto!"});
  });
});

// CONSULTA TODOS OS PRODUTOS
app.get ('/consultaProduto', async (req,res)=>{
  await Produto.findAll({}).then((ponto)=>{
    return res.json({
      erro:'false',
      ponto
    })
  })
  .catch(()=>{
    return res.json({
      erro:'true'
    })
  })
});

// CONSULTA PRODUTO POR ID
app.get ('/consultaProduto/:id', async (req,res)=>{
  const {id} = req.params
  try{
    const consulta = await Produto.findOne({
      where:{
        idproduto: Number(id)
      }
    })
    return res.status(200).json(consulta)
  }
  
  catch (error){
    return res.status(500).json(error.message)
  }
});

// ALTERAÇÃO DE UM PRODUTO
app.put ('/updateProduto/:id', async (req,res)=>{ // 
  const {id} = req.params
  const novosProds = req.body;

  try{
    await Produto.update(novosProds, {
      where:{
      idproduto: Number(id) }}
      )
      const produtoatual = await Produto.findOne({
        where:{
          idproduto: Number(id)
        }
      })
      return res.status (200).json(produtoatual)
  }catch (error){
    return res.status(500).json(error.message)
  }
}); 

// EXCLUIR PRODUTO
app.delete ('/deleteProduto/:id', async (req,res)=>{
  const {id} = req.params

  try{
    await Produto.destroy ({where:{idproduto:Number(id)}})
    return res.status(200).json({mensagem:`id ${id} Produto Excluído!`})
  }catch (error){
    return res.status(500).json(error.message)
  }
});

// CADASTRAR CLIENTE
app.post('/cadastrarCliente', async (req,res)=>{
  
  await Cliente.create(req.body)
  .then (()=>{
    return res.json ({
      erro:false,
      mensagem:"Cliente cadastrado com Sucesso!"});
  
  }).catch (()=>{
      return res.status(400).json ({
        erro:true,
        mensagem:"Erro no cadastro do Cliente!"});
  });

});

// CONSULTAR CLIENTES
app.get ('/consultaCliente', async (req,res)=>{
  await Cliente.findAll({}).then((ponto)=>{
    return res.json({
      erro:'false',
      ponto
    })
  })
  .catch(()=>{
    return res.json({
      erro:'true'
    })
  })
});


// CONSULTA CLIENTE POR ID
app.get ('/consultaCliente/:id', async (req,res)=>{
  const {id} = req.params
  try{
    const consulta = await Cliente.findOne({
      where:{
        idcliente: Number(id)
      }
    })
    return res.status(200).json(consulta)
  }
  
  catch (error){
    return res.status(500).json(error.message)
  }
});

// ALTERAÇÃO DE UM CLIENTE
app.put ('/updateCliente/:id', async (req,res)=>{ // 
  const {id} = req.params
  const novosClientes = req.body;

  try{
    await Cliente.update(novosClientes, {
      where:{
        idcliente: Number(id) }}
      )
      const clienteatual = await Cliente.findOne({
        where:{
          idcliente: Number(id)
        }
      })
      return res.status (200).json(clienteatual)
  }catch (error){
    return res.status(500).json(error.message)
  }
});

// EXCLUIR CLIENTE
app.delete ('/deleteCliente/:id', async (req,res)=>{
  const {id} = req.params
  try{
    await Cliente.destroy ({where:{idcliente:Number(id)}})
    return res.status(200).json({mensagem:`id ${id} Produto Excluído!`})
  }catch (error){
    return res.status(500).json(error.message)
  }
});

// PORTA PARA RODAR O SERVIDOR
app.listen(3000, ()=>{
  console.log('Servidor iniciado')
});  