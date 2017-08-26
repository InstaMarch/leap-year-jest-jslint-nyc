const {createStore} = require("redux");
const {checkLeapYear} = require("./reducers");

module.exports.store = createStore(checkLeapYear);
