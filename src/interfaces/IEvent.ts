import { Document } from "mongoose";

export interface IEvent extends Document {
    title: string;
    date: Date;
    startTime: Date;
    endTime: Date;
}