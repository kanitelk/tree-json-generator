const randomInteger = require("./integer");
const data = require("../data/fruits");

function random() {
  return data[randomInteger(0, data.length - 1)];
}

module.exports = random;
