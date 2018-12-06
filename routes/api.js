const express = require('express');
const router = express.Router();
const firebase = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
    databaseURL: "Realtime Database Path"
});

const db = firebase.database();
var ref = db.ref("application/user-accounts");

router.post('/send_user_data',function(req,res) {
    var usersRef = ref.child("users");
    usersRef.set({
        userName: {
            name:req.body.name
        },
        userEmail: {
            email:req.body.email
        },
    })
    ref.once('value',function(snapshot) {
        res.send({data:snapshot.val()})
    })
    
});


module.exports = router;