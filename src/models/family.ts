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