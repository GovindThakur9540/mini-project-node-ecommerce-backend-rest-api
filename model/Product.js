const mongoose = require('mongoose'), Schema = mongoose.Schema;


const ProductSchema = new Schema({
    _id: 
    {
        type: Schema.Types.ObjectId,
        required:true
    },
    name: 
    { 
        type: String, 
        required: true 
    },
    price: 
    { 
        type: Number, 
        required: true 
    },
    productImage: 
    { 
        type: String 
    }
})

module.exports = mongoose.model("products", ProductSchema)