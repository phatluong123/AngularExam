
const mongoose = require('mongoose'),
    Pets = mongoose.model('ExamPets')
module.exports = {

    CreatePet: function(req, res) {
        console.log(req.body)
        Pets.find({name:req.body.name})
            .then(result => {
                console.log(result)
                if (result.length>0){
                    res.json({duplicatedError:'This name already used, please choose a different name'})
                }
                else{
                    Pets.create(req.body)
                        .then(result => res.json(result))
                        .catch(err => res.json(err))
                }
            })
            .catch(err => res.json(err))

    },
    GetALL : function (req, res) {
        Pets.find({}).sort({type : 1})
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
    GetOnePet : function (req, res) {
        Pets.findOne({_id : req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
    LikePet : function (req, res) {
        Pets.updateOne({_id : req.params.id},{likes:req.body.like})
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
    DeleteOnePet : function (req, res) {
        Pets.deleteOne({_id : req.params.id})
            .then(result => res.json(result))
            .catch(err => res.json(err))
    },
    EditPet: function (req, res) {
        console.log(req.body)
        Pets.find({name:req.body.name})
            .then(result => {
                if (result){
                    res.json({duplicatedError:'This name already used, please choose a different name'})
                }
                else{
                    Pets.updateOne({_id : req.params.id},{
                        name : req.body.pet.name,
                        type : req.body.pet.type,
                        description : req.body.pet.description,
                        likes : req.body.pet.likes,
                        skills : req.body.pet.skills
                    }, { runValidators: true })
                        .then(result => res.json(result))
                        .catch(err => res.json(err))
                }
            })
            .catch(err => res.json(err))

    }

};
