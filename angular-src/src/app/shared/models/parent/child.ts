export class Child {
  name:string;
  gender:string;
  birthDate:Date | undefined;
  specialNeeds:string[];
  sleepTime:Date | undefined;
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
