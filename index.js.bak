const express = require('express')
const app = express()
const bodyParser = require('body-parser')
var firebase = require('firebase')

var config = {
  apiKey: "AIzaSyCJ6rpSLLcMQbzbjG1LSRIh3-0wIF8xI8E",
  authDomain: "native-e0513.firebaseapp.com",
  databaseURL: "https://native-e0513.firebaseio.com",
  projectId: "native-e0513",
  storageBucket: "native-e0513.appspot.com",
  messagingSenderId: "174976726847"
};
firebase.initializeApp(config);
var database = firebase.database()

let province = []
app.use(bodyParser.json())
app.get('/', async(req,res)=> {
  await database.ref('peopleIncome').once('value').then(snapshot => {
    province = snapshot.val()
  })
  res.send(province)
})
app.listen(3000, () => console.log("Example app listening on port 3000!"))
