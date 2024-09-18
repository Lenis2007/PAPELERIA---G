import express from "express";
import bodyParser from 'body-parser';

import user from './Routes/user';
import product from './Routes/product';
import category from './Routes/category';

import dotenv from "dotenv";
dotenv.config();

const app = express().use(bodyParser.json());

app.use('/user', user);
app.use('/product', product);
app.use('/category', category);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor ejecutándose en el puerto: ", PORT);
  }).on("error", (error: any) => {
    throw new Error(error.message);
  });
  