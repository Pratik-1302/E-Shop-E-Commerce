const Razorpay = require("razorpay");

const apiKey = "rzp_test_wx9IlbKBgfTf82";
const apiSecret = "y3gMfSAFy8u2rlGib6phHqA5";

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports = razorpay;
