import { ContractStatus } from "./enums";

export interface IContract {
    jobId: string,
    promiserId: string,
    promiseeId: string,
    promiserDate: string,
    promiseeDate: string,
    contractStatus: ContractStatus,
    contractContent: Buffer,
    contractCheck: boolean
}