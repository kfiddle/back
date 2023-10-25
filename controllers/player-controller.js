const Player = require('../models/player');
const Inst = require('../models/inst');
const HttpError = require('../utils/http-error');

const createPlayer = async (req, res, next) => {
  const { first, last, email, insts, phone, type, addressLine1, addressLine2, city, state, zip } = req.body;
  if (!first || !last) return new HttpError('insufficient input to store player', 404);

  try {
    const createdPlayer = new Player({ first, last, email, insts, phone, type, addressLine1, addressLine2, city, state, zip });
    await createdPlayer.save();
    res.status(201).json({ player: createdPlayer.toObject({ getters: true }) });

    for (let instId of insts) {
      let foundInst = await Inst.findById(instId);
      foundInst.players.push(createdPlayer.id);
      await foundInst.save();
    }
  } catch (err) {
    return next(new HttpError('could not create player', 500));
  }
};

const getPlayerById = async (req, res, next) => {
  const playerId = req.params.pid;

  let player;

  try {
    player = await Player.findById(playerId);
  } catch (err) {
    return next(new HttpError('could not find player', 404));
  }

  res.status(201).json({ player: player.toObject({ getters: true }) });
};


const findPlayersByInstId = async (req, res) => {
  try {
    const instId = req.params.iid;
    const players = await Player.find({ insts: instId });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};


const getPlayersById = async (req, res, next) => {
  try {
    const { ids } = req.body;
    console.log(ids);
    if (!ids) return new HttpError('insufficient input to retrieve players', 404);

    let playersToReturn = [];

    for (let id of ids) {
      try {
        let player = await Player.findById(id);
        playersToReturn.push(player);
      } catch (err) {
        console.log(err);
      }
    }
    res.status(201).json(playersToReturn);
  } catch (err) {
    console.log(err);
  }
};

const getAllPlayers = async (req, res, next) => {
  let players;
  try {
    players = await Player.find();
    res.json({
      players: players.map((player) => player.toObject({ getters: true })),
    });
  } catch (err) {
    return next(new HttpError('could not get all players', 404));
  }
};

const addInstsForPlayer = async (req, res, next) => {
  const playerId = req.params.pid;
  const { instsList } = req.body;

  let player;
  let insts = [];

  try {
    player = await Player.findById(playerId);
  } catch (error) {
    return next(new HttpError('could not find player', 404));
  }

  for (let instId of instsList) {
    try {
      const inst = await Inst.findById(instId);
      insts.push(inst);
    } catch (error) {
      return next(new HttpError('could not locate instrument of id  ' + instId, 404));
    }
  }

  for (let inst of insts) {
    try {
      if (!inst.players.includes(player)) inst.players.push(player);
      await inst.save();
    } catch (error) {
      return next(new HttpError('could not complete inst adding  ' + inst.name, 404));
    }
  }

  res.status(201).json({ message: 'successfully added player to instrument(s)' });
};

const getPlayersBySort = async (req, res, next) => {
  let sort = req.params.sort;
  let players;
  try {
    players = await Player.find();
    console.log(players);
    res.json({
      players: players.map((inst) => inst.toObject({ getters: true })),
    });
  } catch (err) {
    return next(new HttpError('could not get all players', 404));
  }
};

module.exports = {
  createPlayer,
  getPlayerById,
  getAllPlayers,
  addInstsForPlayer,
  getPlayersBySort,
  getPlayersById,
  findPlayersByInstId
};
