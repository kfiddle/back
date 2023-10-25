const Gig = require('../models/gig');

const controller = {};

controller.getAllGigs = async (req, res, next) => {
  try {
    let gigs = await Gig.find();
    res.json(gigs.map((gig) => gig.toObject({ getters: true })));
  } catch (err) {
    console.log(err)
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

controller.getGigById = async (req, res, next) => {};

controller.updateGig = async (req, res, next) => {};

controller.deleteGigById = async (req, res, next) => {};

module.exports = controller;
