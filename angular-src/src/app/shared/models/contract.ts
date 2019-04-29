import { ContractStatus } from './enums';

export class Contract {
  contractId:string;
  jobId:string;
  contractStatus:ContractStatus;
  contractContent:File;
  contractCheck:boolean;
  promiserId:string;
  promiserDate:Date;
  promiseeId:string;
  promiseeDate:Date;
  constructor() {

  }

}
