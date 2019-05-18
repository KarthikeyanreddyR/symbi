import { Schema, Model, model } from "mongoose";
import { ContractStatus } from "../interfaces/enums";

export const ContractSchema: Schema = new Schema({
    jobId: {
        type: Schema.Types.ObjectId,
        ref: 'Job'
    },
    promiserId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    promiseeId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    promiserDate: {
        type: Date
    },
    promiseeDate: {
        type: Date
    },
    contractStatus: {
        type: ContractStatus
    },
    contractContect: [
        {
            data: Buffer,
            contentType: String
        }
    ],
    contractCheck: {
        type: Boolean
    }
});