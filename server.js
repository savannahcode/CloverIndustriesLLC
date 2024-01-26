// tutorial: https://www.youtube.com/watch?v=JpcLd5UrDOQ
// PART 1
const express = require("express")

const log = console.log
const app = express()
const path = require("path")

const PORT = 8080

// PART 2
// Data parsing
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Serve static files from the "src" directory (allows us to access the index.html & output.css file)
app.use(express.static(path.join(__dirname, "src")))

app.post("/email", (req, res) => {
  // send email here
  console.log("Data: ", req.body)
  res.json({ message: "Message received!" })
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "src", "index.html", "output.css"))
})

app.listen(PORT, () => {
  log(`Server listening on port ${PORT}`)
})
