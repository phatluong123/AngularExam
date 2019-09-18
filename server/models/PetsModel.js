
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BeltExam', {useNewUrlParser: true});
const PetSchema = new mongoose.Schema({
    name : {type : String,  required : true, minlength : [3, 'Min length for name is 3']},
    type : {type : String,  required : true, minlength : [3, 'Min length for name is 3']},
    description : {type : String,  required :true, minlength : [3, 'Min length for name is 3']},
    skills :[{type :String}],
    likes : {type :Number, default:0}
}, {timestamps: true })
mongoose.model('ExamPets', PetSchema);
