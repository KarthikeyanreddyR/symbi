import { ContractStatus } from "./enums";

export interface IContract {
    jobId: string,
    promiserId: string,
    promiseeId: string | undefined,
    promiserDate: string,
    promiseeDate: string,
    contractStatus: ContractStatus,
    contractContent: Buffer | undefined,
    contractCheck: boolean
}