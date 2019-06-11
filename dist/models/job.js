"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * FILE DOC
 */
var mongoose_1 = require("mongoose");
var enums_1 = require("../interfaces/enums");
/**
 * CLASS DOC
 */
exports.JobSchema = new mongoose_1.Schema({
    jobName: {
        type: String
    },
    createdBy: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdFor: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: String
    },
    jobStartTime: {
        type: String
    },
    jobEndTime: {
        type: String
    },
    jobStatus: {
        type: enums_1.JobStatus
    },
    jobType: {
        type: enums_1.JobType
    },
    jobNotes: {
        type: String
    }
});
exports.JobSchema.statics.defaultObject = function () {
    return {
        jobName: "",
        createdAt: "",
        createdBy: "",
        jobEndTime: "",
        jobStartTime: "",
        jobNotes: "",
        jobType: enums_1.JobType.UNKNOWN,
        jobStatus: enums_1.JobStatus.UNKNOWN,
        createdFor: undefined
    };
};
exports.JobSchema.methods.createJob = function (cb) {
    return this.save(cb);
};
exports.JobModel = mongoose_1.model("Job", exports.JobSchema);
