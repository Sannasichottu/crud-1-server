const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')
//Middleware
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});

app.use(express.json())

app.use(cors())
// app.get("/", (req, res) => {
//   res.send("Helo Coder");
// });

//mongoose - connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB Connect Successfully and Server is running " + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

  app.use('/api/tasks', taskRoutes)