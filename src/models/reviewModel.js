const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
<<<<<<< HEAD

=======
>>>>>>> 363bb46 (authorization)

const reviewSchema = new mongoose.Schema({


bookId:{
    type:ObjectId,
    required:true,
    ref:"Book",
    trim:true
},
reviewedBy:{
    type:String,
    required:true,
    default:"Guest",
    trim:true
},
reviewedAt:{
    type:Date,
    required:true,
    trim:true
},
rating:{
    type:Number,
    required:true,
    trim:true
    //min 1 max 5
},
review:{
    type:String,
    default:""
},
isDeleted:{
    type:Boolean,
    default:false
}
},{timestamps:true})

module.exports = mongoose.model("Review",reviewSchema)
