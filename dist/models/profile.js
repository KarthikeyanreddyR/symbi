"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
exports.ProfileSchema = new mongoose_1.Schema({
    userType: {
        type: Number
    },
    profileData: {
        type: mongoose_1.Schema.Types.Mixed
    }
});
