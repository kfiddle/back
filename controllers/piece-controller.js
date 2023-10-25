const Piece = require('../models/piece');
const Gig = require('../models/gig');
const HttpError = require('../utils/http-error');

const createPiece = async (req, res, next) => {
  const { title, composerLast } = req.body;

  if (!title || !composerLast) return new HttpError('not enough valid input to save new piece', 500);

  const pieceToCreate = {};
  for (let key in req.body) {
    pieceToCreate[key] = req.body[key];
  }

  try {
    const createdPiece = new Piece(pieceToCreate);
    await createdPiece.save();
    res.status(201).json({ piece: createdPiece.toObject({ getters: true }) });
  } catch (err) {
    return next(new HttpError('could not create piece', 500));
  }
};

const getAllPieces = async (req, res, next) => {
  try {
    let pieces = await Piece.find();
    res.json(pieces.map((piece) => piece.toObject({ getters: true })));
  } catch (err) {
    return next(new HttpError('could not retrieve all pieces in the library', 404));
  }
};

const createPieces = async (req, res, next) => {
  const { pieces } = req.body;

  try {
    for (let piece of pieces) {
      const pieceToCreate = {};
      for (let key in piece) {
        pieceToCreate[key] = piece[key];
      }
      const createdPiece = new Piece(pieceToCreate);
      await createdPiece.save();
    }
  } catch (err) {
    console.log(err);
  }
};

const findPiecesByGigId = async (req, res, next) => {
  try {
    const { gid } = req.params;
    const gig = await Gig.findById(gid);

    if (!gig) {
      return res.status(404).json({ error: 'Gig not found' });
    }

    const pieceIds = gig.program;
    const pieces = await Piece.find({ _id: { $in: pieceIds } });
    return res.status(201).json(pieces.map((piece) => piece.toObject({ getters: true })));
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'An error occurred finding the program of this gig' });
  }
}

module.exports = { createPiece, getAllPieces, createPieces, findPiecesByGigId };
