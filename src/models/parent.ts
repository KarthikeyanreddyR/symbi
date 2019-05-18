/**
 * Filename: parent.ts
 * Created: 5.3.2019
 * Description: Parent schema. Parent has one family that it holds. 
 *              From there it can manage Pet and Child classes. Parent also
 *              contains a string collection for adding optional house rules,
 *              in case they need to be indicated to the caregiver.
 */
import { Document, Schema, Model, model} from "mongoose";

const ChildSchema: Schema = new Schema ({
    name: {
        type: String
    },
    gender: {
        type: String
    },
    birthDate: {
        type: String
    },
    spNeeds: {
        type: [String]
    },
    sleepTime: {
        type: String
    },
    diet: {
        type: [String]
    }
});

const PetSchema: Schema = new Schema ({
    name: {
        type: String
    },
    species: {
        type: String
    },
    diet: {
        type: [String]
    },
    extraNotes: {
        type: [String]
    }
});

const FamilySchema: Schema = new Schema({
    children: {
        type: [ChildSchema]
    },
    pets: {
        type: [PetSchema]
    }
});

export const ParentSchema:Schema = new Schema(
    {
        family: {
            type: FamilySchema
        },
        houseRules: {
            type: [String]
        }
    }
);