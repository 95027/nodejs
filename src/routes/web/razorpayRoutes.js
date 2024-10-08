const { createOrder, verifyPayment, refund } = require('../../controllers/web/razorpayController');

const router = require('express').Router();

router.post('/order', createOrder);
router.post('/verify-payment', verifyPayment);
router.post('/refund', refund);

module.exports = router;