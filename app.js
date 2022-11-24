const express = require ('express'); //instanciando a classe do Express
const app = express(); // atribuindo uma variável para utilização nos métodos
const Produto = require ('./produto'); //instanciando a classe do ponto que possui as querys
const Cliente = require ('./cliente'); //instanciando a classe do ponto que possui as querys

app.use(express.json())

app.get('/', (request, response) => {
    response.send ("<h1>E-Commerce</h1>");
});

// CADASTRAR PRODUTO
app.post('/cadastrarProduto', async (req,res)=>{
  console.log (req.body);
  await Produto.create(req.body)
  .then (()=>{
    return res.json ({
        erro:false,
        mensagem:"Produto inserido com Sucesso!"
    });
  
  }).catch (()=>{
      return res.status(400).json ({
          erro:true,
          mensagem:"Erro no cadastro do produto!"
  });
});

});

// CONSULTA GERAL
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

// CONSULTA POR ID
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

// ALTERAÇÃO
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

// PORTA PARA RODAR O SERVIDOR
app.listen(3000, ()=>{
  console.log('Servidor iniciado')
});  