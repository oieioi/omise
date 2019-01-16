const functions = require('firebase-functions')
const admin = require('firebase-admin')
const express = require('express')
const cors = require('cors')

const app = express();
app.use(cors({origin: true}));
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

// https://github.com/firebase/firebase-functions/issues/27#issuecomment-292768599
exports.shops = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`
  }
  return app(req, res)
});
