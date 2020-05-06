//standard js file that pulls in our orm file to read the data
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, value, cb) {
    orm.create("burgers", "burger_name", cols, value, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb, id) {
    orm.update("burgers", objColVals, condition, id, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;