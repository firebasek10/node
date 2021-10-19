const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express(); 


mongoose.connect(process.env.MONGO_URI).then(()=> console.log('MongoDB Connection Success '))
.catch((err) =>{
    console.log(err);
});

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));