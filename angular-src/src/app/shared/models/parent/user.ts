import { Address } from './address';

export class User {
  firstName:string;
  lastName:string;
  gender:string;
  profileImage:Blob;
  email:string;
  password:string;
  address:Address;
  phoneNumber:Number;
  bio:string;

  constructor() {

  }
}
