import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const port = 3000;

const server = createServer(app);
const io = new Server(server, {
  // removing cors error
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

io.on("connection", (socket) => {
  console.log("User Connected");
  console.log("id", socket.id);
});

server.listen(port, () => {
  console.log(`server is runing in ${port}`);
});

// app.listen(port, () => {
//   console.log(`server is runing in ${port}`);
// });

app.get("/", (req, res) => {
  res.send("hello");
});
