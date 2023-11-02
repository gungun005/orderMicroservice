const express=require('express');
const router=express.Router();
const flipController=require('../controller/flipController');

router.route('/getAllOrder')
.get(flipController.getAllFlipOrder)

router.route('/getOrder')
.get(flipController.getFlipOrder)
.post(flipController.postFlipOrder)

router.route('/getOrderById')
.get(flipController.getFlipOrderById)
.post(flipController.postFlipOrderById)

router.route('/cancelOrder')
.delete(flipController.cancelFlipOrder)

module.exports=router;
