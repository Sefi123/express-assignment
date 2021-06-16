var mongoose= require('mongoose');

var detailSchema = mongoose.Schema({
    name: String,
    Gender: String,
    Email: String,
    CourseCode: String,
    Phone: String,
    address: String
});
 const detail=mongoose.model("detail",detailSchema);
 module.exports= detail;
