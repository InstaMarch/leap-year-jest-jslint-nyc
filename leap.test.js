const {store} = require("./leap");
const {changeYear} = require("./actions");

test("a year that is not a leap year", function(){
	store.dispatch(changeYear(2015));
	expect(store.getState().isLeap).toBe(false);
});
