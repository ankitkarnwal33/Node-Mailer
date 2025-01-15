const express = require("express");
const sendMail = require("./mailer");
const app = express();
const port = 3000;

app.use(express.static("views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.render("index.html");
});

app.post("/sendmail", async (req, res) => {
  const { email, name } = req.body;
  try {
    if (email && name) {
      await sendMail(email, name, "Email verification");
      return res.redirect("/");
    }
  } catch (error) {
    res.redirect("/");
  }
});

app.listen(port, () => {});
