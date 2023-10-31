const Message = require('../models/message');
const Player = require('../models/player');

const controller = {};

controller.makeGigOffer = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to offer this gig to player', 404));
  }
};

controller.getAllMessages = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to retrieve all messages', 404));
  }
};

controller.acceptGig = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to accept this gig', 404));
  }
};

controller.declineGig = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to decline this gig', 404));
  }
};

controller.cancelGig = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to cancel gig', 404));
  }
};

controller.getMessagesByPlayer = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError("unable to retrieve this player's messages", 404));
  }
};

controller.getMessagesByChair = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to retrieve messages of this chair', 404));
  }
};

controller.getMessageById = async (req, res, next) => {
  try {
    let message = await Message.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to retrieve message', 404));
  }

}

controller.getAllOffersMade = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to retrieve messages of gigs offered', 404));
  }
};

controller.getAllGigCancellations = async (req, res, next) => {
  try {
    let player = await Player.find();
    // res.json(chairs.map((chair) => chair.toObject({ getters: true })));
  } catch (err) {
    console.log(err);
    return next(new HttpError('unable to retrieve messages of gigs cancelled', 404));
  }
};



module.exports = controller;
