let express = require('express'); //подключаем модуль express
let router = express.Router(); //создаем новый роутер
let bodyParser = require('body-parser');
let fs = require("fs");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json())

router.post('/data', (req, res, next) => {
    console.log(req.body.code)
    fs.writeFile("./data/data.json", req.body.code, (err) => {
        console.log("Successfully Written to File.");
    });
    res.send('true');
});
router.get('/data', (req, res, next) => {
    fs.readFile("./data/data.json", "utf-8", (err, data) => {
        res.send({data: data}); //Отправляем данные
    });

});
module.exports = router;
