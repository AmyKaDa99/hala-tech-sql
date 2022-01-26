import express from "express";

import middlewares from "./utils/basics";

import databaseConnection from './utils/database';

import routes from './routes/routes'

import env from "dotenv";

env.config();

const app = express();

app.use(middlewares);

app.use(routes);

databaseConnection.then(res => {

 app.listen(process.env.PORT || 3000)
 
 console.log("hi i connected")
})
