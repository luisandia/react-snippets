const functions = require('firebase-functions');
const express = require('express');
const { getAllScreams, postOneScream, getScream, commentOnScream, likeScream, unlikeScream, deleteScream } = require('./handlers/screams');
const { signup, login, uploadImage, addUserDetails, getAuthenticatedUser, getUserDetails, markNotificationsRead } = require('./handlers/users');
const { db } = require('./utils/admin');
const FBAuth = require('./utils/fbAuth');
const app = express();

// scream routes
app.get('/screams', getAllScreams);
app.post('/screams', FBAuth, postOneScream);
app.get('/scream/:screamId', getScream);
app.delete('/scream/:screamId', FBAuth, deleteScream);
app.post('/scream/:screamId/comment', FBAuth, commentOnScream)
app.get('/scream/:screamId/like', FBAuth, likeScream);
app.get('/scream/:screamId/unlike', FBAuth, unlikeScream);


// users routes
app.post('/signup', signup);
app.post('/login', login);

app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);
app.get('/user/:handle', getUserDetails);
app.post('/notifications', FBAuth, markNotificationsRead);

exports.api = functions.https.onRequest(app);

exports.createNotificationOnLike =
  functions
    .firestore
    .document('likes/{id}')
    .onCreate((snapshot) => {
      console.log(snapshot.data())
      db.doc(`/screams/${snapshot.data().screamId}`).get().then(doc => {
        if (doc.exists) {
          return db.doc(`/notifications/${snapshot.id}`).set({
            createdAt: new Date().toISOString(),
            recipient: doc.data().userHandle,
            sender: snapshot.data().userHandle,
            type: 'like',
            read: false,
            screamId: doc.id
          })
        }
      }).then(() => {
        return;
      }).catch(err => {
        console.error(err);
        return;
      })
    });

exports.deleteNotificationOnUnLike = functions.firestore.document('likes/{id}')
  .onDelete((snapshot) => {
    db.doc(`/notifications/${snapshot.id}`)
      .delete()
      .then(() => {
        return;
      })
      .catch(err => {
        console.error(err);
        return;
      })
  })

exports.createNotificationOnComment = functions.firestore.document('comments/{id}')
  .onCreate((snapshot) => {
    console.log(snapshot.data())
    db.doc(`/screams/${snapshot.data().screamId}`).get().then(doc => {
      if (doc.exists) {
        return db.doc(`/notifications/${snapshot.id}`).set({
          createdAt: new Date().toISOString(),
          recipient: doc.data().userHandle,
          sender: snapshot.data().userHandle,
          type: 'comment',
          read: false,
          screamId: doc.id
        })
      }
    }).then(() => {
      return;
    }).catch(err => {
      console.error(err);
      return;
    })
  });