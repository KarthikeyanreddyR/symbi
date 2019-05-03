import mongoose from 'mongoose';
import config from './config/database';

export class MongoDBConfig {
    public static init(): void {
        // connection to MongoDB
        mongoose.connect(config.database, { useNewUrlParser: true, useCreateIndex: true });
        // on connection
        mongoose.connection.on('connected', () => {
            console.log('connnected to DB ' + config.database);
        });

        mongoose.connection.on('error', (err: any) => {
            console.log('error while connecting DB ', err);
        });
    }
}