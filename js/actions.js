/*jslint es6 node*/

const CHANGE_YEAR = "CHANGE_YEAR";

module.exports.changeYear = (year) => (
    {
        year,
        type: CHANGE_YEAR
    }
);

module.exports.CHANGE_YEAR = CHANGE_YEAR;
