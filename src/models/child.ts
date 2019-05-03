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
