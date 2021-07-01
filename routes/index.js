const Router = require('@koa/router');
const router = new Router();

const { UserController, DeviceController } = require('../controllers');

router.post('/users', UserController.create);
router.get('/users', UserController.find);
router.get('/users/:id', UserController.findOne);
router.delete('/users/:id', UserController.destroy)
router.put('/users/:id', UserController.update);
router.get('/users/:id/devices', UserController.findUserDevices)

router.post('/devices', DeviceController.create);
router.get('/devices', DeviceController.find);


module.exports = router;
