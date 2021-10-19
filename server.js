const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express(); 
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const cors = require("cors");
mongoose.connect(process.env.MONGO_URI).then(()=> console.log('MongoDB Connection Success 👍'))
.catch((err) =>{
    console.log(err);
});

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));