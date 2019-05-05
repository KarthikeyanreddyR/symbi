import {Schema, Model, model } from "mongoose";
import { ContractStatus } from "../interfaces/enums";

export const ContractSchema: Schema = new Schema({
    jobID: {
        type: Number
    },
    contractID: {
        type: Number
    },
    promiserID: {
        type: Number
    },
    promiseeID: {
        type: Number
    },
    promiserDate: {
        type: String
    },
    promiseeDate: {
        type: String
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