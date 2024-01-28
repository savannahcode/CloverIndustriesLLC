// how to add the form sending an email of message contents: https://www.youtube.com/watch?v=JpcLd5UrDOQ
const nodeMailer = require("nodemailer")
const mailGun = require("nodemailer-mailgun-transport")

const auth = {
  auth: {
    api_key: "#",
    domain: "#",
  },
}

const transporter = nodeMailer.createTransport(mailGun(auth))

const mailOptions = {
  from: "savannahb.hilton@gmail.com",
  to: "sav.b.everett@gmail.com",
  subject: "Testing",
  message: "Let's connect",
}

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error: ", err)
  } else {
    console.log("Message sent!")
  }
})
