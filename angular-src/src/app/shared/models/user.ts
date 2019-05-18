import { Address } from './address';
import { UserType } from './enums';
import { Parent } from './parent/parent';
import { Caregiver } from './caregiver/caregiver';

export class User {
  firstName: string;
  lastName: string;
  gender: string;
  profileImage: Blob | undefined;
  email: string;
  password: string;
  address: Address;
  phoneNumber: number;
  bio: string;
  profiles: Profile[];

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    this.firstName = '';
    this.lastName = '';
    this.gender = '',
    this.profileImage = undefined;
    this.email = '';
    this.password = '';
    this.address = new Address();
    this.phoneNumber = 0;
    this.bio = '';
    let parentProfile = new Profile(UserType.PARENT);
    let caregiverProfile = new Profile(UserType.CAREGIVER);
    this.profiles = [parentProfile, caregiverProfile];
  }
}

export class Profile {
  userType: UserType;
  profileData: Parent | Caregiver;
  constructor(userType: UserType) {
    this.userType = userType;
    switch (userType) {
      case UserType.PARENT:
        this.profileData = this.initializeParent();
        break;
      case UserType.CAREGIVER:
        this.profileData = this.initializeCaregiver();
        break;
    }
  }

  private initializeParent(): Parent {
    return new Parent();
  }

  private initializeCaregiver(): Caregiver {
    return new Caregiver();
  }
}
