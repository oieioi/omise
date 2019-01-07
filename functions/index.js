const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const app = express();
admin.initializeApp()

// index
app.get('/', (req, res) => {
  return admin
    .database()
    .ref('/shops')
    .once('value')
    .then(snapshot => {
      return res.status(200).send(snapshot)
    })
})

// create
app.post('/', (req, res) => {
  const raw = { name: req.body.name, address: req.body.address }
  return admin
    .database()
    .ref('/shops')
    .push(raw)
    .then(snapshot => {
      return res.status(200).send(snapshot.ref.toJSON())
    })
})

exports.shops = functions.https.onRequest(app);
