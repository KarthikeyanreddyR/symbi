db = db.getSiblingDB("symbi");
userColl = db.getCollection("users");
userColl.remove({});

userColl.insert({
    firstName: "John",
    lastName: "Marston",
    email: "notacoward@outlaw.com",
    password: "edgarrosssucks1",
    bio: "Outlaw bounty hunter seeking caregiver for baby boy",
    gender: "Male",
    phoneNumber: 1234567890,
    profiles: [{
        userType: 0,
        profileData: {
            family: {
                children: [{
                    name: 'Mary',
                    birthDate: new Date(2010, 03, 01),
                    diet: [],
                    extraNotes: [],
                    gender: '',
                    sleepTime: new Date(),
                    specialNeeds: []
                }, {
                    name: 'Daisy',
                    birthDate: new Date(2010, 03, 01),
                    diet: [],
                    extraNotes: [],
                    gender: '',
                    sleepTime: new Date(),
                    specialNeeds: []
                }],
                pets: []
            },
            houseRules: []
        }
    },
    {
        userType: 1,
        profileData: {
            experience: [],
            extraNotes: "",
            rate: 0
        }
    }
    ]
});

userColl.insert({
  firstName: "Mary",
  lastName: "Jane",
  email: "arachnoqueen@gmail.com",
  password: "spiderman11",
  bio: "Freelance actor, part-time caregiver!",
  gender: "Female",
  phoneNumber: 1234567890,
  profiles: [
    {
      userType: 0,
      profileData: {
        family: {
          children: [
            {
              name: "Daisy",
              birthDate: new Date(2010, 03, 01),
              diet: [],
              extraNotes: [],
              gender: "",
              sleepTime: new Date(),
              specialNeeds: []
            }
          ],
          pets: [
            {
              name: "Ace",
              species: "Pug",
              diet: [],
              extraNotes: []
            }
          ]
        },
        houseRules: []
      }
    },
    {
      userType: 1,
      profileData: {
        experience: [],
        extraNotes: "",
        rate: 0
      }
    }
  ]
});

