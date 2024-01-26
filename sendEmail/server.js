const express = require("express")

const log = console.log
const app = express()
const path = require("path")

const PORT = 8080

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"))
})

app.listen(PORT, () => {
  log(`Server listening on port ${PORT}`)
})
