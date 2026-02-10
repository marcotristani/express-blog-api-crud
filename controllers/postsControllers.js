//importo lista post che mi servirà nelle funzioni
const posts = require("./../data/postsList");

//funzione da eseguire nella rotta index
function index(req, res) {
  //costruisco l'oggetto da restituire come json
  const objectJson = {
    number_posts: posts.length,
    posts: posts,
  };

  res.json(objectJson);
}

//funzione da eseguire nella rotta show
function show(req, res) {
  //recuper il parametro id che mi viene dato nella richiesta dell'endpoint
  const id = parseInt(req.params.id);

  //vado a recuperare il post con id fornitoci come parametro
  const post = posts.find((post) => post.id === id);

  //verifico se questo post esiste nella lista
  if (!post) {
    //se non esiste vado a forzare o stato con codice 404 not found
    res.status(404);
    //finico la funzione restiturendo questo messaggio di errore
    return res.send({
      error: "Not Found",
      message: "post non trovato nella lista",
    });
  }

  //Se invece questo post essite restituisco l'oggetto del post ricercato
  res.json(post);
}

//funzione da eseguire nella rotta store
function store(req, res) {
  res.send("logica store");
}

//funzione da eseguire nella rotta update
function update(req, res) {
  res.send("logica update");
}

//funzione da eseguire nella rotta modify
function modify(req, res) {
  res.send("logica modify");
}

//funzione da eseguire nella rotta destroy
function destroy(req, res) {
  res.send("logica destroy");
}

module.exports = { index, show, store, update, modify, destroy };
