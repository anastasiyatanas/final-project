var mongoose  = require ("mongoose")
var Schema = mongoose.Schema
var charactorSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})
var Charactor = mongoose.model("Charactor", charactorSchema)
module.exports = Charactor