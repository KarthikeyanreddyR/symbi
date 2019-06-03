import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { UserService } from 'src/app/services/user.service';
import { Address } from 'src/app/shared/models/address';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private activeTab = 0; //Currently active tab
  //TODO
  //TEST OBJECT, DELETE ONCE APP IS FUNCTIONAL
  private user: Object = {
    firstName: "Bob",
    lastName: "Bobbers",
    gender: "Male",
    profileImage: undefined,
    email: "TheBob@bobsworld.gov",
    password: "1millionbobs",
    address: {
      addressLine1: "1911 Bob st",
      addressLine2: undefined,
      city:"Bobs Ville",
      state: "BO",
      zip: 92034,
      country: "BOB",
      geoLocation: undefined
    },
    phoneNumber: 123456789,
    bio: "The will of Bob is to be a caregiver",
    profiles: [
      {
        family: {
          children: "Bob cannot conceive children",
          pets: "Fido"
        },
        houseRules: [
            "Do not disobey Bob"
        ]
      },
      {
        birthDate: "01/01/5000BC",
        rate: 50,
        certificates: undefined,
        experience: [
          {
            jobPlace: "Bob Inc",
            jobDesignation: "CEO",
            jobDescription: "Absolute monarch of Bob Inc",
            startDate: "0/0/0",
            endDate: "N/A"
          },
          {
            jobPlace: "Bob Home",
            jobDesignation: "Normal Human",
            jobDescription: "Bob is a human doing human things now",
            startDate: "01/01/2012",
            endDate: "N/A"
          }
        ]
      }
    ]
  };
  constructor() {
  }

  ngOnInit() {
  }
}
