const express = require('express');
const dotenv = require('dotenv');
const peopleRouter = require('./people/people.router');
const planetsRouter = require('./planets/planets.router');
const cors = require('cors');

dotenv.config();
const PORT = process.env.PORT || 3034;
module.exports = class ContactServer {
  constructor() {
    this.server = null;
  }

  start() {
    this.initServer();
    this.initMiddlewares();
    this.initRoutes();
    this.startListening();
  }

  initServer() {
    this.server = express();
  }
  initMiddlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }
  initRoutes() {
    this.server.use('/people', peopleRouter);
    this.server.use('/planets', planetsRouter);
  }
  startListening() {
    this.server.listen(PORT, () =>
      console.log(`Server is listening on PORT ${PORT}`)
    );
  }
};
