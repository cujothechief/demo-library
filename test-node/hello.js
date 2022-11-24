const express = require("express");
const port = 3000;

const app = express();
app.get("/", function (req, res) {
   res.send("hello world again");
})

app.listen(port, function(){
   console.log(`example app listening on port ${port}`);
})