const functions = require('firebase-functions');
const express = require('express');
const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');
const FBAuth = require('./utils/fbAuth');
const app = express();

// scream routes
app.get('/screams', getAllScreams);
app.post('/screams', FBAuth, postOneScream);

// users routes
app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.https.onRequest(app);