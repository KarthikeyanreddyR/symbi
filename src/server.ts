import { App } from './app';
import { MongoDBConfig } from './mongodb'

// Initialize mongodb
MongoDBConfig.init();

const PORT = process.env.PORT || 3000;

// create web server
new App().app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});
