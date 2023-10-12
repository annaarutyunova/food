const baseController = {};

baseController.welcome = function(req,res) {
    res.send("Hi Anna");
}
module.exports = baseController;