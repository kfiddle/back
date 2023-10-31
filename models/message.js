const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  chair: { type: mongoose.Types.ObjectId, required: true, ref: 'Chair' },
  player: { type: mongoose.Types.ObjectId, required: true, ref: 'Player' },
  statement: { type: String, enum: ['offer', 'confirm', 'no', 'cancelGig', 'cancelOffer'] },
  date: { type: Date, required: true },
});

module.exports = mongoose.model('Message', messageSchema);
