const mongoose = require("mongoose");

const ProductSchema=mongoose.Schema({
    title:{type:String, require:true},
    brand:{type:String, require:true},
    category:{type:String, require:true},
    discounted_price:{type:Number, require:true},
    strike_price:{type:Number, require:true},
    discount:{type:String, require:true},
    rating:{type:Number, require:true},
    rating_count:{type:String, require:true},
    images: {type:String, require:true},
    size:{type:Array , require:true} ,
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "user",
        required: true,
      },  

})

const Product=mongoose.model("product",ProductSchema);

module.exports=Product;
