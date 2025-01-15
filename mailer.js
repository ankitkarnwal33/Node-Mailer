const mailer = require("nodemailer");
const ejs = require("ejs");
const path = require("path");
const generateOtp = require("./otp");

async function sendMail(email, name, subject) {
  try {
    const transporter = mailer.createTransport({
      service: "gmail",
      auth: {
        user: "sender_email_address@gmail.com",
        pass: "jzuk iozn xqmd rmwx", // Generate app password from google account's App Passwords feature.
      },
    });

    const htmlpath = path.join(__dirname, "views/index.ejs");
    const emailData = {
      name: name,
      otp: generateOtp(),
    };
    ejs.renderFile(htmlpath, emailData, (err, renderdHtml) => {
      if (err) {
        console.log(err);
        return;
      }

      const mailOptions = {
        from: "viperankityt@gmail.com",
        to: email,
        subject,
        html: renderdHtml,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err)
          return {
            status: "failed",
          };
        else
          return {
            status: "success",
          };
      });
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = sendMail;
