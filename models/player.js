const mongoose = require('mongoose');

// new Player('1','Leanne', 'Wistrom').setType(type.CONTRACT).setRank(1).addInst(insts.flute).setEmail('lw@Email'),
// new Player('8','David', 'Boutin-Bourque')
// .setType(type.CONTRACT)
// .setRank(3)
// .addInst(insts.clarinet)
// .addInst(insts.bassClarinet)
// .setEmail('dbb@Email'),


const playerSchema = new mongoose.Schema({
  first: { type: String, required: true },
  last: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  type: { type: String, enum: ['sub', 'contract'] },
  rank: Number,
  addressLine1: String,
  addressLine2: String,
  city: String,
  state: String,
  zip: String,
});

module.exports = mongoose.model('Player', playerSchema);
