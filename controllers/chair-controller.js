const Chair = require('../models/chair');
const Gig = require('../models/gig');

const controller = {};

controller.getAllChairs = async (req, res, next) => {
  try {
    let chairs = await Chair.find();
    res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('could not retrieve all chairs from database', 404));
  }
};

controller.createChair = async (req, res) => {
  try {
    const { gig, player, pieceNum, parts } = req.body;

    const newChair = new Chair({
      gig,
      player,
      pieceNum,
      parts,
    });

    const savedchair = await newChair.save();
    res.status(201).json(savedchair);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred saving new Chair' });
  }
};


controller.createChairs = async (req, res, next) => {
  const chairsData = req.body; // Assuming the request body is an array of pieces
  console.log(chairsData)
  if (!Array.isArray(chairsData) || chairsData.length === 0) {
    res.status(500).json({ error: 'Insufficient input to save chairs' });
  }

  try {
    const createdChairs = await Chair.insertMany(chairsData);
    res.status(201).json({ chairs: createdChairs });
  } catch (err) {
    res.status(500).json({ error: 'An error occurred saving chairs' });
  }
};

controller.getChairById = async (req, res, next) => {
  try {
    const { gid } = req.params;
    const storedchair = await Chair.findById(gid);
    res.status(201).json(storedchair);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred retrieving this Chair' });
  }
};

controller.getChairsByGigPieceNum = async (req, res, next) => {
  try {
    const { gigId, pieceNum } = req.query;
    const gig = await Gig.findById(gigId);

    if (!gig) {
      return res.status(404).json({ error: 'Gig not found' });
    }

    const chairs = await Chair.find({ gig: gig.id, pieceNum });
    res.status(201).json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred retrieving this roster' });
  }
};

controller.updatechair = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred updating this Chair' });
  }
};

controller.deletechairById = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred deleting this Chair' });
  }
};

module.exports = controller;
