function checkTime(req, res, next) {
  //Rintraccio la data corrente da pc
  const timeNow = new Date().toLocaleString();
  //quando viene effettuata una chiamata stampo l'ora e la data
  console.log("Hai cercato questa rotto il: " + timeNow);
  //vado avanti con le richieste
  next();
}
module.exports = checkTime;
