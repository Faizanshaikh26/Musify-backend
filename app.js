const express = require('express');
const app = express();
require('./db/connection');
const userControllers = require('./Controllers/User');
const cors=require("cors")

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send("Hey there");
});

app.post('/signUp', userControllers.signUp);
app.post('/login',userControllers.login)

app.listen(7000, () => console.log("Server is running on port 7000"));
