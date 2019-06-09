import mongoose from 'mongoose';
import golbalConfig from './config/globals';

/**
 * Class to manage Mongo DB connection using mongoose
 */
export class MongoDBConfig {
    public static init(): void {
        // connection to MongoDB
        mongoose.connect(golbalConfig.database, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
        
        // on connection - connected
        mongoose.connection.on('connected', () => {
            console.log('connnected to DB ' + golbalConfig.database);
        });
        
        // on connection - error
        mongoose.connection.on('error', (err: any) => {
            console.log('error while connecting DB ', err);
        });
    }
}