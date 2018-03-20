const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var firebase = require('firebase')

var config = {
 apiKey: "AIzaSyBsalqJoc_uinRvG1j36gyi9hMf5INMNEQ",
    authDomain: "sample-d1441.firebaseapp.com",
    databaseURL: "https://sample-d1441.firebaseio.com",
    projectId: "sample-d1441",
    storageBucket: "sample-d1441.appspot.com",
    messagingSenderId: "829630951021"

};
firebase.initializeApp(config);
var database = firebase.database()

let province = []
app.use(bodyParser.json())
app.get('/listhero', async(req,res)=> {
  await database.ref('peopleIncome').once('value').then(snapshot => {
    province = snapshot.val()
  })
  res.send(province)
})
app.listen(3000, () => console.log("Example app listening on port 3000!"))
