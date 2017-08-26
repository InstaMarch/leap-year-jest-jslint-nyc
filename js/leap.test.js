/*jslint es6 node browser*/
/*global test expect*/

const {store} = require("./leap");
const {changeYear} = require("./actions");

test("a year that is not a leap year", function () {
    "use strict";
    store.dispatch(changeYear(2015));
    expect(store.getState().isLeap).toBe(false);
});

test("a year that is a leap year", function () {
    "use strict";
    store.dispatch(changeYear(2016));
    expect(store.getState().isLeap).toBe(true);
});

test("a year that is not a leap year", function(){
    store.dispatch(changeYear(2011));
    expect(store.getState().isLeap).toBe(false);
});

test("another year that is a leap year", function(){
    store.dispatch(changeYear(2012));
    expect(store.getState().isLeap).toBe(true);
});

test("every one hundred years we skip a leap year", function(){
    store.dispatch(changeYear(1900));
    expect(store.getState().isLeap).toBe(false);
});

test("every four hundred years we bring the leap year back", function(){
    store.dispatch(changeYear(2000));
    expect(store.getState().isLeap).toBe(true);
});
