import localConfig from '../env'

export = {
    database: process.env.CUSTOMCONNSTR_MONGO_CONN_STR || localConfig.database.host,
    googleOAuth: {
        clientID: process.env.APPSETTING_GOOGLE_CLIENT_ID || localConfig.google.clientID,
        clientSecret: process.env.APPSETTING_GOOGLE_SECRET || localConfig.google.clientSecret
    }
}