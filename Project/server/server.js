import express from "express";
import { join } from "path";
import { json, urlencoded } from "body-parser";

import index from "./routes/index.js";
import users from "./routes/users.js";

var app = express();

var port = 3000;

app.listen(port, function(){
    console.log("Server is running on port", port);
});

//views

app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body parser MW

app.use(json());
app.use(urlencoded({extended:true}));

//Routes

app.use("/", index);
app.use("/api", users);