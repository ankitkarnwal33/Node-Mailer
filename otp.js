const crypto = require("node:crypto");

function generateOtp() {
  const otp = crypto.randomInt(1000, 10000); //Generate four digits random number. Add 0 to get more digits as your needs
  return otp;
}

module.exports = generateOtp;
