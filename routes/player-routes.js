const express = require("express");
const playerController = require("../controllers/player-controller");

const router = express.Router();

router.get('/inst_id/:iid', playerController.findPlayersByInstId)
router.get("/", playerController.getAllPlayers);
router.get("/:pid", playerController.getPlayerById);

router.post('/players_by_id', playerController.getPlayersById)
router.patch("/add-insts/:pid", playerController.addInstsForPlayer);
router.post("/", playerController.createPlayer);

module.exports = router;
