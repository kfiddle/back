const express = require('express');

const router = express.Router();

const piecesController = require('../controllers/pieces');

router.get('/:pid', piecesController.getPieceById, (req, res, next) => {
  res.status(201).json(res.locals.piece);
});

router.get('/', piecesController.getPieces, (req, res, next) => {
  res.status(201).json(res.locals.pieces);
});

router.post('/', piecesController.addPieces, (req, res, next) => {
  res.status(201).json(res.locals.pieces);
});


module.exports = router;
