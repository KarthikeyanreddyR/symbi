import localConfig from '../env'

export = {
    database: process.env.CUSTOMCONNSTR_MONGO_CONN_STR || 'mongodb://rokkamkarthi:admin@cluster0-shard-00-00-plmv5.azure.mongodb.net:27017,cluster0-shard-00-01-plmv5.azure.mongodb.net:27017,cluster0-shard-00-02-plmv5.azure.mongodb.net:27017/symbi?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
    googleOAuth: {
        clientID: process.env.APPSETTING_GOOGLE_CLIENT_ID || localConfig.google.clientID,
        clientSecret: process.env.APPSETTING_GOOGLE_SECRET || localConfig.google.clientSecret
    }
}