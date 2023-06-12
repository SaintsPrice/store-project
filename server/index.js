require('dotenv').config();

const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors')
const express = require('express');
const fileUpload = require('express-fileupload');
const router = require('./routes/index');
const path = require('path');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
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