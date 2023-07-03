const Router = require('express');
const router = new Router();
const userRouter = require('./userRouter');
const deviceRouter = require('./deviceRouter')
const brandRouter = require('./brandRouter')
const typeRouter = require('./typeRouter');
const deviceController = require('../controllers/deviceController');

router.use('/user', userRouter);
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);
router.post('/device-info', deviceController.createDeviceInfo)
router.get('/device-info', deviceController.getDeviceInfo)

module.exports = router;