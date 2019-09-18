
var pets = require('../controllers/PetsControllers');

module.exports = function(app){
    app.post('/createPet', function (req, res) {
        pets.CreatePet(req, res);
    })
    app.get('/getAll', function (req, res) {
        pets.GetALL(req, res)
    })
    app.get('/getOne/:id', function (req, res) {
        pets.GetOnePet(req, res)
    })
    app.put('/likeOne/:id', function (req, res) {
        pets.LikePet(req, res)
    })
    app.delete('/deleteOne/:id', function (req, res) {
        pets.DeleteOnePet(req, res)
    })
    app.put('/EditOne/:id', function (req, res) {
        pets.EditPet(req, res)
    })


}
