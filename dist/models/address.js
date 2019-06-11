"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.AddressSchema = new mongoose_1.Schema({
    addressLine1: {
        type: String
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    country: {
        type: String
    },
    geoLocation: {
        type: [String]
    }
});
