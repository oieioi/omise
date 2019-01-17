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
      const shops = Object.entries(snapshot.val()).map(item => {
        const id = item[0];
        const value = item[1];
        return Object.assign({id: id},value);
      })
      return res.status(200).send(shops)
    })
})

// show
app.get('/:id', (req, res) => {
  return admin
    .database()
    .ref(`/shops/${req.params.id}`)
    .once('value')
    .then(snapshot => {
      const shop = snapshot.val();
      shop.id = req.params.id;
      if (shop)
        return res.status(200).send(shop)
      else
        return res.status(404).send({})
    })
})

// update
app.put('/:id', (req, res) => {
  // TODO: クソ雑
  return admin
    .database()
    .ref(`/shops/${req.params.id}`)
    .set(req.body)
    .then(() => res.status(200).send())
})

// destroy
app.delete('/:id', (req, res) => {
  return admin
    .database()
    .ref(`/shops/${req.params.id}`)
    .remove()
    .then(() => res.status(200).send())
})

// create
app.post('/', (req, res) => {
  const raw = { name: req.body.name || '', address: req.body.address || '' }
  return admin
    .database()
    .ref('/shops')
    .push(raw)
    .then(snapshot => {
      // TODO: 適当
      return res.status(201).send({id: snapshot.ref.path.pieces_[1]})
    })
    .catch( e => {
      console.error(e)
      res.status(500).send('ng')
    })
})

// https://github.com/firebase/firebase-functions/issues/27#issuecomment-292768599
exports.shops = functions.https.onRequest((req, res) => {
  if (!req.path) {
    req.url = `/${req.url}`
  }
  return app(req, res)
});
