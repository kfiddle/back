const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const listCreator = require('./controllers/create-players-list');
const instController = require('./controllers/inst-controller');

const instsRoutes = require('./routes/inst-routes');
const piecesRoutes = require('./routes/piece-routes');
const playersRoutes = require('./routes/player-routes');
const gigsRoutes = require('./routes/gig-routes');
const chairsRoutes = require('./routes/chair-routes');
const messagesRoutes = require('./routes/message-routes');
const danielsRoutes = require('./routes/daniels-routes')

// listCreator.createAllFromList();
// instController.deleteNullPlayerIds();

app.use(bodyParser.json());
app.use(cors());

app.use("/insts/", instsRoutes);
app.use('/pieces/', piecesRoutes);
app.use('/players/', playersRoutes);
app.use('/gigs/', gigsRoutes);
app.use('/chairs/', chairsRoutes);
app.use('/messages/', messagesRoutes);
app.use('/daniels_query/', danielsRoutes)



app.use('*', (req, res, next) => {
  return next({
    log: 'No route configured for this endpoint',
    status: 404,
    message: { err: 'Page not found' },
  });
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "something really went wrong" });
});

const port = process.env.PORT || 3000;

mongoose
  .connect(
    process.env.mongoUrl,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(3000);
    console.log("connected");
  })
  .catch((err) => console.log(err));
