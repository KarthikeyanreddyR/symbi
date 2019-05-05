/**
 * Filename: family.ts
 * Created: 5.3.2019
 * Description: Mongoose schema for Family model. Family is the middleman
 *              for the Parent class and its collections. Parent may have a 
 *              family that is made up of Child and Pet class collections. 
 *              in terms of the schema itself it just holds these two 
 *              collections. 
 */
import { Document, Schema, Model, model} from "mongoose";
import { ChildSchema } from "./child";
import { PetSchema } from "./pet";

export const FamilySchema: Schema = new Schema({
    children: {
        type: [ChildSchema]
    },
    pets: {
        type: [PetSchema]
    }
});