const { db } = require('../utils/admin');
const { validateSignUpData, validateLoginData } = require('../utils/validators');

const firebase = require('firebase');
const config = require('../utils/config');


firebase.initializeApp(config);

exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle
  };
  const { valid, errors } = validateSignUpData(newUser);

  if (!valid) {
    return res.status(400).json(errors);
  }

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
}


exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  const {valid,errors} = validateLoginData(user);
  if (!valid) {
    return res.status(400).json(errors);
  }
  firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({ token });
    })
    .catch(err => {
      console.error(err);
      if (err.code === 'auth/wrong-password') {
        return res.status(403).json({ general: `Wrong credentials, please try again` });
      }
      return res.status(500).json({ error: err.code });
    })

}