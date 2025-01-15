const crypto = require("node:crypto");

function generateOtp() {
  const otp = crypto.randomInt(1000, 10000);
  return otp;
}

module.exports = generateOtp;
