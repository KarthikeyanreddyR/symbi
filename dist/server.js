"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var mongodb_1 = require("./mongodb");
// Initialize mongodb
mongodb_1.MongoDBConfig.init();
var PORT = process.env.PORT || 3000;
// create web server
new app_1.App().app.listen(PORT, function () {
    console.log("listening on port " + PORT);
});
