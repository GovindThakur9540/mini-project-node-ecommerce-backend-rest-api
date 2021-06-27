const mongoose = require('mongoose'), Schema = mongoose.Schema; 


const UserSchema = new Schema({
    _id: 
    {
        type: Schema.Types.ObjectId,
        required:true
    },
    email: 
    {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    password: 
    { 
        type: String, 
        required: true 
    }
})

const User = mongoose.model("users", UserSchema)

module.exports = User