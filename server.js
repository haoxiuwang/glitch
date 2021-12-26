var http = require("http");
var ss = require("serve-static")("build");

var app = function(req, res) {
  ss(req, res, function() {
    if (req.url.indexOf("/api")===0) res.end(req.url);
    else res.end("not existed");
  });
};

http.createServer(app).listen(3000);
