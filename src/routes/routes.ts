import express from "express";

import auth from "./auth"

import player from './player'

import position from './position'

import team from './team'

import match from './match'

const isAuth = require('../middleware/user-is-auth')

console.log(isAuth)

const app = express();

app.use('/auth', auth);

app.use(isAuth)

app.use('/players', player);

app.use('/positions', position);

app.use('/teams', team);

app.use('/matches', match);


app.use((req, res, next) => {
    res
      .status(404)
      .send("<h1> you must not get this routes, trying to see different </h1>");
  });

export default app;
