const mongoose = require('mongoose');



//UserModules Schema
const UserModulesSchema = mongoose.Schema({
    username: {
        type: String
    },
    modules: {
        type: [{ id: Number, name: String }]

    }
});

const UserModules = module.exports = mongoose.model('UserModules', UserModulesSchema);

module.exports.addItem = function (newUser, callback) {
    var newItem = new UserModules({ username: newUser.username, modules: [] })
    newItem.save(callback);
}

module.exports.addModuleToUser = function (newUserModule, callback) {
    console.log(newUserModule);
    UserModules.update(
        { username: newUserModule.username },
        { $push: { modules: newUserModule.newModule } },
        callback
    );
}

module.exports.getUserModules = function (username, callback) {
    let query = { username: username };
    UserModules.findOne(query, callback);
}

