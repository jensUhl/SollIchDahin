const mongoose = require('mongoose');

const ModuleSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Module = module.exports = mongoose.model('Module', ModuleSchema);

module.exports.getModuleById = function (id, callback) {
  Module.findById(id, callback);
}

module.exports.getModuleByName = function (name,
  callback) {
  const query = { name: name }
  Module.findOne(query, callback);
}

module.exports.addModule = function (newModule, callback) {
  newModule.save(callback);
}

module.exports.getAllModules = function (query, callback) {
  Module.find({}, callback);
}