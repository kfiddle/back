const express = require("express");
const pieceController = require("../controllers/piece-controller");

const router = express.Router();

router.get('/', pieceController.getAllPieces)

router.post('/array', pieceController.createPieces);

router.post('/', pieceController.createPiece);

// router.get("/:pid", pieceController.getPieceById);

module.exports = router;