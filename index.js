var Scrapegoat = require("scrapegoat");
var moment = require("moment");
var params = require("./params.json");

const scrapegoat = new Scrapegoat(params);

const dateTimeFormat = "YYYYMMDD[T]HHmmss[Z]";

var isoStart = moment("2017-09-01", "YYYY-MM-DD").format(dateTimeFormat);//toISOString().replace(/[-.:]/g, "");
var isoEnd = moment("2017-10-01", "YYYY-MM-DD").format(dateTimeFormat);//toISOString().replace(/[-.:]/g, "");

console.log(isoStart);

scrapegoat.getEventsByTime(isoStart, isoEnd).then((data) => {
  console.log("done");
  console.log(data);
});
