const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const firebase = require('firebase')


const app = express();
admin.initializeApp();
var firebaseConfig = {
  apiKey: "AIzaSyALDQKTPSrPie1uXOHavM1E-PS-ZTJ9PRA",
  authDomain: "socialape-96265.firebaseapp.com",
  databaseURL: "https://socialape-96265.firebaseio.com",
  projectId: "socialape-96265",
  storageBucket: "socialape-96265.appspot.com",
  messagingSenderId: "859862100074",
  appId: "1:859862100074:web:658e9b00b0484176458213"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = admin.firestore();

app.get('/screams', (req, res) => {
  db.collection('screams').orderBy('createdAt', 'desc').get().then(data => {
    let screams = []
    data.forEach(doc => {
      screams.push({
        screamId: doc.id,
        body: doc.data().body,
        userHandle: doc.data().userHandle,
        createdAt: doc.data().createdAt
      });
    });
    return res.json(screams);
  }).catch(err => console.error(err));
})

app.post('/screams', (req, res) => {

  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString()
  };

  db.collection('screams').add(newScream).then(doc => {
    res.json({ message: `document ${doc.id} created successfully` });
  }).catch(err => {
    res.status(500).json({ error: 'something went wrong' });
  });

});

// signup route

app.post('/signup', (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };

  let userId, token_;
  db.doc(`/users/${newUser.handle}`).get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({ handle: `this handle is already taken` });
      } else {
        return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
      }
    })
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then(token => {
      token_ = token;
      const userCredentials = {
        handle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId
      };
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
      // return res.status(201).json({ token });
    })
    .then(() => {
      return res.status(201).json({ token_ })
    })
    .catch(err => {
      console.erro(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: `Email is already in use` })
      } else {
        return res.status(500).json({ error: err.code });
      }
    });

  // firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
  //   .then(data => {
  //     return res.status(201).json({ message: `ùse ${data.user.uid} signed up successfully` })
  //   })
  //   .catch(err => {
  //     console.erro(err);
  //     return res.status(500).json({ error: err.code });
  //   });


});
exports.api = functions.https.onRequest(app);