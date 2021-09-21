// Security, performance, edge cases
const express = require('express');
const path = require('path');
const app = express();
// console.log(__dirname);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "public/hello.txt"), 'test.txt');
    // res.sendFile is used to send static file 
    // path.join is used to join path 
    // res.sendFile(path.join(__dirname, "public/test.json"));
    // res.download(path.join(__dirname, "public/hello.txt"), 'test.txt');
    // res.render("index", { title: "Express + Jade" });
    res
    .status(201)
    .cookie("token", "test", {
      expires: new Date(Date.now() + 8 * 3600000), // expires in 8 hrs
    })
    .cookie("hello", "hello")
    .redirect(301, "/admin");
});
app.listen(5000);