const mongoose = require('mongoose');

const pieceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  composerLast: { type: String, required: true },
  composerFirst: String,
  prefix: String,
  libNumber: String,
  suffix: String,
  arranger: String,
  otherName: String,
  publisher: String,
  duration: String,
  windsBrass: String,
  vocalistSoloist: String,
  percBreakdown: String,
  notes: String,
  status: String,
  sign: String,
  updated: Date,
});

module.exports = mongoose.model('Piece', pieceSchema);
