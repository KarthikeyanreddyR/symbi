"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var enums_1 = require("../interfaces/enums");
var ContractSchema = new mongoose_1.Schema({
    jobId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Job'
    },
    promiserId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    promiseeId: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    promiserDate: {
        type: String
    },
    promiseeDate: {
        type: String
    },
    contractStatus: {
        type: enums_1.ContractStatus
    },
    contractContent: [
        {
            data: Buffer,
            contentType: String
        }
    ],
    contractCheck: {
        type: Boolean
    }
});
exports.ContractModel = mongoose_1.model("Job", ContractSchema);
