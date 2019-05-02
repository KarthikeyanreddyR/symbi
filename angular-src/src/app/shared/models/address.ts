export class Address {
  addressLine1:string;
  addressLine2:string;
  city:string;
  state:string;
  zip:number;
  country:string;
  geoLocation:string[];
  constructor() {
    this.initialize();
  }

  private initialize() : void {
    this.addressLine1 = '';
    this.addressLine2 = '';
    this.city = '',
    this.state = undefined;
    this.zip = 0;
    this.country = '';
    this.geoLocation = [];
  }
}
