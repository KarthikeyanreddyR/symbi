import {Schema, Model, model } from "mongoose";

export const EventSchema: Schema = new Schema({
    title: {
        type: String
    },
    date: {
        type: String
    },
    startTime: {
        
    }
});