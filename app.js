let express = require('express'); //подключаем модуль express
let route = require('./routes/login.js'); //подключаем файл с роутом
var cors = require('cors')
let app = express();//создаем приложение express
app.use(cors())
app.use('/', route);

app.listen(80); //Настраиваем express приложение слушать запросы на 80 порту

app.use(express.static('public')); /* настраиваем статический сервер, для отдачи контента из папки
public */
