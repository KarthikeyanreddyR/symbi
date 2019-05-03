import { Document, Schema, Model, model} from "mongoose";
import { FamilySchema } from "./family";

export const ParentSchema:Schema = new Schema(
    {
        family: {
            type: [FamilySchema]
        },
        houseRules: {
            type: [String]
        }
    }
);