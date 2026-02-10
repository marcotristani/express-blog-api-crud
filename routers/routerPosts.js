const express = require("express");

//attivo il router
const router = express.Router();

//importo l'oggetto con tutte le funzioni da eseguire nelle varie rotte
const controllerPosts = require("../controllers/postsControllers");

//creo le varie rotte

//index
router.get("/", controllerPosts.index);

//show
router.get("/:id", controllerPosts.show);

//store
router.post("/", controllerPosts.store);

//update
router.put("/:id", controllerPosts.update);

//modify
router.patch("/:id", controllerPosts.modify);

//destroy
router.delete("/:id", controllerPosts.destroy);

module.exports = router;
