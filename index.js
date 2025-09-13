const mongoose = require('mongoose');
const express= require('express');
const dotenv=  require ('dotenv');
dotenv.config();
const app=express();
app.use(express.json())

const MONGO_URI = "mongodb://localhost:27017/inventoryDB"
const PORT = 3000;

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

.then(()=>{
console.log("Connected to MongoDB");
})

.catch(()=>{
  console.log(`Error connecting to MonogoDB ${err}`);
});

app.listen(PORT, () =>{
  console.log(`Server is listening at ${PORT} `);
})