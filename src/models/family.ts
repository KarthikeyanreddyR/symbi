import { Document, Schema, Model, model} from "mongoose";

const FamilySchema: Schema = new Schema({
    children: {
        type: [Children]
    },
    pets: {
        type: [Pets]
    }
})