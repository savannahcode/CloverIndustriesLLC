// how to add the form sending an email of message contents: https://www.youtube.com/watch?v=JpcLd5UrDOQ
const nodeMailer = require("nodemailer")
const mailGun = require("nodemailer-mailgun-transport")

const auth = {
  auth: {
    api_key: "key-6e1d9b4f3e6e4e0d5c6d6f8c0d0e8c0a",
    domain: "sandboxc3a5c6a0a1d14a7c8c6f4c0c4d0e8c0a.mailgun.org",
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
