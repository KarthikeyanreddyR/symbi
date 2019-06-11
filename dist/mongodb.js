"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var globals_1 = __importDefault(require("./config/globals"));
/**
 * Class to manage Mongo DB connection using mongoose
 */
var MongoDBConfig = /** @class */ (function () {
    function MongoDBConfig() {
    }
    MongoDBConfig.init = function () {
        // connection to MongoDB
        mongoose_1.default.connect(globals_1.default.database, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
        // on connection - connected
        mongoose_1.default.connection.on('connected', function () {
            console.log('connnected to DB ' + globals_1.default.database);
        });
        // on connection - error
        mongoose_1.default.connection.on('error', function (err) {
            console.log('error while connecting DB ', err);
        });
    };
    return MongoDBConfig;
}());
exports.MongoDBConfig = MongoDBConfig;
