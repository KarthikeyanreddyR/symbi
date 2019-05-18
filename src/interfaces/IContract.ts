import { ContractStatus } from "./enums";

export interface IContract {
    jobId : string,
    promiserId: string,
    promiseeId : string,
    promiserDate : Date | undefined,
    promiseeDate : Date | undefined,
    contractStatus : ContractStatus,
    contractContent : Buffer,
    contractCheck : boolean
}