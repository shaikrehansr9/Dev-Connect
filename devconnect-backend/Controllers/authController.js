const User = require('../models/User');
exports.register=async(req,res)=>{
    const {username , email ,password}=req.body;
    try{
        const user=await User.create({username,email,password});
        res.status(201).json({message:"Registered",user});
    }catch(err){
        res.status(400).json({error:"user already exists or invalid data"});
    }

};

exports.login=async(req,res) => {   
    const {email,password}=req.query;
    console.log(email,password);
    try{
        const user=await User.findOne({email});
        console.log(user);
        if(!user){
            return res.status(404).json({error:"user not found"});

        }
        const ismatch=await compare(password);

        if(!ismatch) return res.status(400).json({error:"Enter correct password or mail"});
    }catch(err){
        res.json({error:"server error"});
    }

};
