const mongoose = require('mongoose');


const gigSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, enum: ['pops', 'sym', 'outreach'] },
  program: [{ type: mongoose.Types.ObjectId, ref: 'Piece' }],
  services: [
    {
      type: {
        type: String,
        enum: ['rehearsal', 'concert'], 
        required: true,
      },
      date: { type: Date, required: true },
      startTime: { type: String, required: true },
      endTime: { type: String }, // Optional
      notes: String,
      location: String,
    },
  ],
});

module.exports = mongoose.model("Gig", gigSchema);




// {
//   title: 'Sym 3- Planets',
//   type: 'sym',


// }
// type: { type: String, enum: ['pops', 'sym', 'outreach'] },
// program: [{ type: mongoose.Types.ObjectId, ref: 'Piece' }],
// services: [
//   {
//     type: {
//       type: String,
//       enum: ['rehearsal', 'concert'], 
//       required: true,
//     },
//     date: { type: Date, required: true },
//     startTime: { type: String, required: true },
//     endTime: { type: String }, // Optional
//     notes: String,
//     location: String,
//   },
// ],
// });