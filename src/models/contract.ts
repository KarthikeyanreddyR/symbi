import { Schema, Model, model, Document } from "mongoose";
import { ContractStatus } from "../interfaces/enums";
import { IContract } from "../interfaces/IContract";

interface IContractSchema extends IContract, Document {

}

const ContractSchema: Schema = new Schema({
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

export const ContractModel: Model<IContractSchema> = model<IContractSchema>("Job", ContractSchema);