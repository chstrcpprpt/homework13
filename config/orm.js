const connection = require("./connection");

const orm = {
  // selectAll()
  selectAll: (tableName, cb) => {
    const queryString = 
    `SELECT * FROM ${tableName};`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  // insertOne()
  insertOne: (tableName, columnName1, value1, columnName2, value2, cb) => {
    const queryString =
    `INSERT INTO ${tableName}
    SET
    {
      ${columnName1}: ${value1},
      ${columnName2}: ${value2}
    };`;
    connection.query(queryString, (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  // updateOne()
  updateOne: (tableName, columnName, value, cb) => {
    const queryString =
    `UPDATE ${tableName}
    SET
    {
      ${columnName}: ${value}
    };`;
    connection.query(queryString, (err, date) => {
      if (err) throw err;
      cb(data);
    });
  } 

};

module.exports = orm;
