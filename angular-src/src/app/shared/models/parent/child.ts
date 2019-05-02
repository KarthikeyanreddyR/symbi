export class Child {
  name:string;
  gender:string;
  birthDate:Date;
  specialNeeds:string[];
  sleepTime:Date;
  diet:string[];
  extraNotes:string[];
  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.name = '';
    this.gender = '';
    this.birthDate = undefined;
    this.specialNeeds = [];
    this.sleepTime = undefined;
    this.diet = [];
    this.extraNotes = [];
  }
}
