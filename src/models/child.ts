/**
 * Filename: child.ts
 * Created: 5.3.2019
 * Description: Mongoose Schema for the Child model. Child holds the 
 *              information for children that belong to a Parent's
 *              Family. Other than basic bio information, a Child
 *              has a special needs section so that a Parent may
 *              highlight needs that a caretaker needs to take note
 *              of when taking care of a Child. Children also have a
 *              sleepTime, for when they are supposed to go to bed, and
 *              a diet section for anything that they should be eating.
 */
import { Document, Schema, Model, model} from "mongoose";

export const ChildSchema: Schema = new Schema ({
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
