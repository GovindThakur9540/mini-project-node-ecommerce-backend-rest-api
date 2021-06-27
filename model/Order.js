const mongoose = require('mongoose'), Schema = mongoose.Schema


const OrderSchema = new Schema({
    _id: 
    {
        type: Schema.Types.ObjectId,
        required:true
    },
    product: 
    { 
        type: Schema.Types.ObjectId, 
        ref: 'Product', 
        required: true 
    },
    quantity: 
    { 
        type: Number, 
        default: 1 
    }
})

module.exports = mongoose.model("orders", OrderSchema)
