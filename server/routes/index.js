const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter');
const deviceController = require('../controllers/deviceController');
const ratingController = require('../controllers/ratingController');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.post('/device-info', deviceController.createDeviceInfo)
router.get('/device-info', deviceController.getDeviceInfo)
router.post('/rating', ratingController.create)
router.get('/rating', ratingController.getDeviceRating)

module.exports = router;