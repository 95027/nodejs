const router = require('express').Router();

const auth = require('../../middlewares/web/authMiddleware');
const authRoutes = require('./authRoutes');
const razorpayRoutes = require('./razorpayRoutes');

router.use('/auth', authRoutes);
router.use('/razorpay', auth, razorpayRoutes);


module.exports = router;