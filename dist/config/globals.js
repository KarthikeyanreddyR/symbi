"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var env_1 = __importDefault(require("../env"));
module.exports = {
    database: process.env.CUSTOMCONNSTR_MONGO_CONN_STR || 'mongodb://rokkamkarthi:admin@cluster0-shard-00-00-plmv5.azure.mongodb.net:27017,cluster0-shard-00-01-plmv5.azure.mongodb.net:27017,cluster0-shard-00-02-plmv5.azure.mongodb.net:27017/symbi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    googleOAuth: {
        clientID: process.env.APPSETTING_GOOGLE_CLIENT_ID || env_1.default.google.clientID,
        clientSecret: process.env.APPSETTING_GOOGLE_SECRET || env_1.default.google.clientSecret
    }
};
