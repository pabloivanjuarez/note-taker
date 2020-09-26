// Depnendencies
const express = require("express")
const path = require("path")
const fs = require("fs")
const htmlRoutes = require("./Develop/routes/htmlRoutes")
const apiRoutes = require("./Develop/routes/apiRoutes")
// using express and opening a port to run server
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("Develop/public"));
// require("./routes/htmlRoutes")(app)
app.use("/", htmlRoutes)

app.use("/api", apiRoutes)

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))