const router = require('express').Router();

const auth = require('../../middlewares/web/authMiddleware');
const authRoutes = require('./authRoutes');
const razorpayRoutes = require('./razorpayRoutes');
const mediaRoutes = require('./mediaRoutes');

router.use('/auth', authRoutes);
router.use('/razorpay', auth, razorpayRoutes);
router.use('/media', mediaRoutes);


module.exports = router;