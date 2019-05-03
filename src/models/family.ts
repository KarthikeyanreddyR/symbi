import { Document, Schema, Model, model} from "mongoose";

const FamilySchema: Schema = new Schema({
    children: {
        type: Schema.Types.ObjectId, ref: ['Children']
    },
    pets: {
        type: Schema.Types.ObjectId, ref: ['Pets']
    }
});