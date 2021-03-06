// const express = require('express');

// const React = require('react');

// const renderToString =  require('react-dom/server').renderToString;

// const Home = require('./client/components/Home').default;

import 'babel-polyfill';

import express from 'express';

import renderer from './helpers/renderer';

import {matchRoutes} from 'react-router-config';
import Routes from './client/Routes';

import createStore from './helpers/createStore';



const app = express();

app.use(express.static('public'));

app.get("*", (req,res) => {

    const store = createStore();

const promise = matchRoutes(Routes,req.path).map(({route}) => {
   return route.loadData? route.loadData(store): null
 }) 
 
 Promise.all(promise).then(() => {
    res.send(renderer(req,store));

 })
})


app.listen(5000, () => {
    console.log("Listening on port 5000")
})