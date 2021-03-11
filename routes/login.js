let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер
let bodyParser = require('body-parser');
let fs = require("fs");
let firebase = require('firebase')

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCKVB03QWas2svtY9NCUh74FaTQ4o15gmQ",
    authDomain: "itmo-579bd.firebaseapp.com",
    projectId: "itmo-579bd",
    storageBucket: "itmo-579bd.appspot.com",
    messagingSenderId: "805119616360",
    appId: "1:805119616360:web:59d0d59857c3512c1ee2dd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let database = firebase.database()

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())

router.post('/data', (req, res, next) => {
    database.ref("code").set(req.body.code, function(error) {
        if (error) {
            // The write failed...
            console.log("Failed with error: " + error)
        } else {
            // The write was successful...
            console.log("success")
        }
    })
    res.send('true');
    // console.log(req.body.code)
    // fs.writeFile("./data/data.json", req.body.code, (err) => {
    //     console.log("Successfully Written to File.");
    // });
    // res.send('true');
});
router.get('/data', (req, res, next) => {
    database.ref('code').once('value')
        .then(function(snapshot) {
            console.log( snapshot.val() )
            res.send({data: snapshot.val()}); //Отправляем данные
        })
    // fs.readFile("./data/data.json", "utf-8", (err, data) => {
    //     res.send({data: data}); //Отправляем данные
    // });

});
module.exports = router;
