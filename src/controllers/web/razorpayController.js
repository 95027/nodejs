const asyncHandler = require("express-async-handler");
const razorpay = require("../../utils/razorpay");
const crypto = require("crypto");

const createOrder = asyncHandler(async (req, res) => {
  const { amount, currency } = req.body;

  const options = {
    amount: +amount * 100,
    currency: currency,
    payment_capture: 1,
  };

  const order = await razorpay.orders.create(options);

  res.status(200).json({ message: "order created successfully", order });
});

const verifyPayment = asyncHandler(async (req, res) => {
    console.log(req.body);
    
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const data = crypto.createHmac("sha256", process.env.SECRET_KEY);

  data.update(razorpay_order_id + "|" + razorpay_payment_id);

  const digest = data.digest("hex");

  if (digest == razorpay_signature) {
    return res.status(200).json({ message: "signature verified" });
  }

  return res.status(400).json({ message: "invalid signature" });
});

const refund = asyncHandler(async (req, res) => {});

module.exports = {
  createOrder,
  verifyPayment,
  refund,
};
