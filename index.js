var caldav = require("node-caldav-mod");
var moment = require("moment");
var params = require("./params.json");

const dateTimeFormat = "YYYYMMDDTHHmmss[Z]";

var isoStart = moment("2017-09-01", "YYYY-MM-DD").format(dateTimeFormat);//toISOString().replace(/[-.:]/g, "");
var isoEnd = moment("2017-10-01", "YYYY-MM-DD").format(dateTimeFormat);//toISOString().replace(/[-.:]/g, "");

console.log(isoStart);

caldav.getEvents(params.url, params.user, params.pass, isoStart, isoEnd, (data) => {
  console.log("done");
  console.log(data);
});
