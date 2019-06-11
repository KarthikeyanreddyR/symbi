import { Schema, Model, model, Document } from "mongoose";
import { ContractStatus } from "../interfaces/enums";
import { IContract } from "../interfaces/IContract";

export interface IContractSchema extends IContract, Document {
    createContract(cb:any):void;
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
        ref: 'User',
        required: false
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

ContractSchema.methods.createContract = function(cb: any): void {
    this.save(cb);
}

export const ContractModel: Model<IContractSchema> = model<IContractSchema>("Contract", ContractSchema);

