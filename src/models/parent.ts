import { Document, Schema, Model, model} from "mongoose";
import { FamilySchema } from "./family";

const ParentSchema:Schema = new Schema(
    {
        bio: {
            type: String
        },
        family: {
            type: [FamilySchema]
        },
        houseRules: {
            type: [String]
        }
    }
);