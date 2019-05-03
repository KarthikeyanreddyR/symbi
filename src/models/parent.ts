import { Document, Schema, Model, model} from "mongoose";

const ParentSchema:Schema = new Schema(
    {
        bio: {
            type: String
        },
        family: {
            type: Schema.Types.ObjectId, ref: 'Family'
        },
        houseRules: {
            type: [String]
        }
    }
);