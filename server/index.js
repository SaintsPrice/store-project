require('dotenv').config();

const sequelize = require('./db');
const cors = require('cors')
const express = require('express');
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const {PORT = 5000, CLIENT_URL} = process.env;

const app = express();

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));
app.use(cookieParser())
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router);

//Обработка ошибок
app.use(errorHandler)

app.get('/', (req, res) => {
    res.status(200).json({message: 'Сервер запущен'})
})

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Сервер успешно запущен на порту ${PORT}`))
    }
    catch(e) {
        console.log(e)
    }
};


start();