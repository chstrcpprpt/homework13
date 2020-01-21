// require orm
const orm = require("../config/orm");

const burger = {

  all: (cb) => {
    orm.selectAll("burgers", data => {
      cb(data);
    });
  },

  create: (burgerName, cb) => {
    orm.insertOne("burgers", "burger_name", burgerName, "devoured", "false", data => {
      cb(data);
    });
  },

  update: (id, cb) => {
    orm.updateOne("burgers", "devoured", "true", id, data => {
      cb(data);
    });
  }

};

module.exports = burger;