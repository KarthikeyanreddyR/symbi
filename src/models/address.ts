import { Schema } from "mongoose";

export const AddressSchema: Schema = new Schema({
    addressLine1: {
        type: String
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String
    },
    state: {
        type: String
    },
    zip: {
        type: Number
    },
    country: {
        type: String
    },
    geoLocation: {
        type: [String]
    }
});