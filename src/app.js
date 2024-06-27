
//inisiar el servidor
const express = require("express")
const bd = require("./bd"); 

//crear el servidor 
const app = express()

app.use(express.text());
app.use(express.json())

//pagina principal 
app.get("/", (req, res) => {
    res.send("hola mundo")
})

//pagina principal 

app.get("/producto", (req, res)=> {
    res.json(bd); 
})

//obtener el producto por el id
app.get ("/producto/:id", (req, res) => {
    const id= parseInt (req.params.id); 
    const nombreProducto = bd.find((nombre) => nombre.id === id);
    res.send(nombreProducto);
})


//crear un producto 
app.post("/producto", (req, res) => {
    const {id, name, quantity, price} = req.body 
    const nuevoProducto= bd.push ({id: id, name: name, quantity: quantity, price: price})
    res.send({message:" Un nuevo producto se ha agregado"})
})



//crear mi puerto  
app.listen(4000, (req,res) => console.log("servidor corriendo en el puerto 4000"))


