const baseController = {};
const model = require('../model')

baseController.welcome = async function(req,res) {
    const databases = await model.main();
    res.send(databases);
    // res.send("Hi Anna");
}
module.exports = baseController;