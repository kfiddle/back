const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  insts: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Inst' }],
  phone: String,
  type: { type: String, enum: ['sub', 'contract'] },
  rank: Number,
  username: { type: String, required: true },
  password: { type: String, required: true },
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
});

module.exports = mongoose.model('Player', playerSchema);
