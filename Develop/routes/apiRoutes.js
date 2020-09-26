const fs = require("fs");
const router = require("express").Router()

router.get("/getNotes", function (req, res) {
  let data = fs.readFileSync("develop/db/db", "utf-8");
  data = JSON.parse(data)
  res.send(data)
})

router.post("/getNotes", function (req, res) {
  req
})
module.exports = router