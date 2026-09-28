const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    from:{
        type:String,
        requires : true
    },
    to:{
        type:String,
        requires : true
    },
    msg:{
        type:String,
        maxLength : 50
    },
    created_at:{
        type:Date,

    }
});

const Chat = mongoose.model("Chat", chatSchema);

module.exports = Chat;