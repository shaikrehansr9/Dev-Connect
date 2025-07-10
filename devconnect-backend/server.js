const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const bodyParser = require('body-parser')
const postRoutes=require('./Routes/PostRoutes');
const authRoutes=require('./Routes/authRoutes');
const app=express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api/posts",postRoutes);
app.use("/api/auth",authRoutes);
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL,{
}).then(()=> {
    app.listen(PORT,()=>{
        console.log(`listening at port http://localhost:${PORT}`);
    })
}).catch(console.error());
