const express = require("express");
const app = express();
const importaData = require("./data.json");
let port = process.env.PORT || 3000;




app.get("/", (req, res) =>{
    res.send("Hello World")
});


app.get("/players", (req, res) =>{
    res.send(importaData);
})

app.listen(port, () =>{
    console.log(`Example app is listening on port http://localhost:${port}`);
});