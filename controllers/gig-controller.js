const Gig = require('../models/gig');

const controller = {};

controller.getAllGigs = async (req, res, next) => {
  try {
    let gigs = await Gig.find();
    res.json(gigs.map((gig) => gig.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('could not retrieve all gigs from database', 404));
  }
};

controller.createGig = async (req, res) => {
  try {
    const { title, type, program, services } = req.body;

    const newGig = new Gig({
      title,
      type,
      program,
      services,
    });

    const savedGig = await newGig.save();
    res.status(201).json(savedGig);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred saving new Gig' });
  }
};

controller.getGigById = async (req, res, next) => {
  try {
    const { gid } = req.params;
    const storedGig = await Gig.findById(gid);
    res.status(201).json(storedGig)

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred retrieving this Gig' });
  }
};

controller.updateGig = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred updating this Gig' });
  }
};

controller.deleteGigById = async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'An error occurred deleting this Gig' });
  }
};

module.exports = controller;
