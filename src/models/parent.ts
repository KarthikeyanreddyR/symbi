import { Document, Schema, Model, model} from "mongoose";

const ParentSchema:Schema = new Schema(
    {
        bio: {
            type: String
        },
        family: {
            type: Family
        },
        houseRules: {
            type: [String]
        }
    }
);