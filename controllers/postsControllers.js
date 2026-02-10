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
  res.send("logica show");
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
