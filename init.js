const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
.then(()=>{
    console.log("connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatapp');

}

let allChat=[
    {
    from:"shyam",
    to:"ram",
    msg:"send me class notes",
    created_at:new Date() 
    },
    {
    from:"ram",
    to:"sita",
    msg:"where are you going",
    created_at:new Date()
    },

    {
    from:"don",
    to:"guru",
    msg:"where are the diamond",
    created_at:new Date()
    },
    {
    from:"krishna",
    to:"radha",
    msg:"where is rukmani",
    created_at:new Date()
    },
    {
    from:"sujit",
    to:"ridham",
    msg:"who is your boy",
    created_at:new Date()
    },
    {
    from:"ravi",
    to:"shyam",
    msg:"i can talk to you later",
    created_at:new Date()
    }
]

Chat.insertMany(allChat);
    