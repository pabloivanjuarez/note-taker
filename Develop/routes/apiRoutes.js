const fs = require("fs");
const router = require("express").Router()
const {
  v4: uuidv4
} = require("uuid")

router.get("/getNotes", function (req, res) {
  let data = fs.readFileSync("develop/db/db.json", "utf-8");
  data = JSON.parse(data)
  console.log(data);
  res.json(data)
});

router.post("/getNotes", function (req, res) {
  req.body
  const postData = {
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  }
  let data = fs.readFileSync("develop/db/db.json", "utf-8");
  data = JSON.parse(data)
  data.push(postData)
  fs.writeFileSync("develop/db/db.json", JSON.stringify(data))
});

router.delete("/getNotes", function (req, res) {
  notesData = notesData.filter(note => {
    if (note.id == req.params.id) {
      return false;
    }
    return true;
  })
})

module.exports = router