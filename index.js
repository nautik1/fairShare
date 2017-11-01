var Scrapegoat = require("scrapegoat");
var moment = require("moment");

/** params file format:
* {
*   "auth": {
*     "user": "xxx",
*     "pass": "xxx"
*   },
*   "uri": "xxx",
*   "timeout": 20000
* }
*/
var params = require("./params.json");

const scrapegoat = new Scrapegoat(params);

const dateTimeFormat = "YYYYMMDD[T]HHmmss[Z]";

var iCalDateStart = moment("2017-09-01", "YYYY-MM-DD").format(dateTimeFormat);
var iCalDateEnd = moment("2017-10-01", "YYYY-MM-DD").format(dateTimeFormat);

scrapegoat.getEventsByTime(iCalDateStart, iCalDateEnd).then((data) => {
  console.log("done");
  console.log(data);
});
