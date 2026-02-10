const express = require("express");

//attivo il router
const router = express.Router();

//importo la lista dei posts
const posts = require("./../data/postsList");

//creo le varie rotte

//index
router.get("/", functionIndex);

//show
router.get("/:id", functionShow);

//store
router.post("/", functionStore);

//update
router.put("/:id", functionUpdate);

//modify
router.modify("/:id", functionModify);

//destroy
router.delete("/:id", functionDestroy);

module.exports = router;
