const mongoose = require('mongoose');

const chairSchema = new mongoose.Schema({
  player: { type: mongoose.Types.ObjectId, ref: 'Player' },
  gig: { type: mongoose.Types.ObjectId, ref: 'Gig', required: true },
  pieceNum: Number,
  parts: [
    {
      inst: { type: mongoose.Types.ObjectId, ref: 'Inst' },
      rank: Number,
    },
  ],
});

module.exports = mongoose.model('Chair', chairSchema);
