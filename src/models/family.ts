import { Document, Schema, Model, model} from "mongoose";

const FamilySchema: Schema = new Schema({
    children: {
        type: Schema.Types.ObjectId, ref: ['Child']
    },
    pets: {
        type: Schema.Types.ObjectId, ref: ['Pet']
    }
});