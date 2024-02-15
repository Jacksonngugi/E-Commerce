const path = require("path");
const express = require("express");
const app = express();

app.set("view engine","ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.get("/",(req,res) =>{
    res.render("index.ejs");
})

app.use("/blog",(req,res) => {
    res.render("blog.ejs");
})

app.use("/cart",(req,res) => {
    res.render("cart.ejs");
})

app.use("/contact",(req,res) => {
    res.render("contact.ejs");
})

app.use("/products",(req,res) =>{
    res.render("products.ejs");
})

app.use("/single-product",(req,res) => {
    res.render("single-product.ejs");
})

app.use("/about",(req,res) => {
    res.render("about.ejs");
})

app.listen(3000,()=> {
    console.log("Listening on port 3000");
})