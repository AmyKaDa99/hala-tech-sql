import express, { Router } from "express";

import auth from "./auth"

import player from './player'

import position from './position'

import team from './team'

import match from './match'

const isAuth = require('../middleware/user-is-auth')

console.log(isAuth)

const app = Router();

app.use('/auth', auth);

app.use(isAuth)

app.use('/players', player);

app.use('/positions', position);

app.use('/teams', team);

app.use('/matches', match);


app.use((req, res, next) => {
    res
      .status(404)
      .json("you must not get this routes, trying to see different");
  });

export default app;
