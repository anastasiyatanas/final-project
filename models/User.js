var mongoose  = require ("mongoose")
var Schema = mongoose.Schema
var userSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    email:{
        type: String,
        required: true
    }
})
var User = mongoose.model("User", userSchema)
module.exports = User