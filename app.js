const express = require("express");
const app = express();
const port = 3000;

//importo il router
const routerPosts = require("./routers/routerPosts");

//rendo accessibili i file statici della cartella public
app.use(express.static("public"));

//Rotta home del mio blog
app.get("/", (req, res) => res.send("<h1>Home del mio blog</h1>"));

//collegamento alle rotte del router
app.use("/posts", routerPosts);

//Ascolto e verifico che funzioni il mio server su questa porta
app.listen(port, () => console.log(`In ascolto sulla porta ${port}`));
