const express = require("express");
const app = express();
const { Server } = require("socket.io");

let PORT = process.env.PORT || 8080;

let server = app.listen(PORT, () => {
  console.log("listening");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

const io = new Server(server);

app.set("views", "./views");
app.set("view engine", "ejs");

io.on("connection", (socket) => {
  console.log("socket conectado");
});

app.get("/",(req,res)=>{
        res.render("index")
})







