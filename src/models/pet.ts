import { Document, Schema, Model, model} from "mongoose";

const PetSchema: Schema = new Schema ({
    name: {
        type: String
    },
    species: {
        type: String
    },
    diet: {
        type: [String]
    },
    extraNotes: {
        type: [String]
    }
})