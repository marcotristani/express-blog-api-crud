const express = require("express");
const app = express();
const port = 3000;

//Rotta home del mio blog
app.get("/", (req, res) => res.send("<h1>Home del mio blog</h1>"));

//Ascolto e verifico che funzioni il mio server su questa porta
app.listen(port, () => console.log(`In ascolto sulla porta ${port}`));
