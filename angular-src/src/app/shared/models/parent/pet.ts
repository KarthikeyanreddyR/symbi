export class Pet {
  name:string;
  species:string;
  diet:string[];
  extraNotes:string[];
  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.name = '';
    this.species = '';
    this.diet = [];
    this.extraNotes = [];
  }
}
