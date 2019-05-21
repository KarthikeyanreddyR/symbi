# Symbi
# Welcome to Simple Child Care Planner

SaaS Team project. MEAN stack; Bootstrap

## Install [Node.js](https://nodejs.org/en/)
    verify successful node installation, open terminal and run for versions of node and npm
        node -v
        npm -v 

## Install [MongoDB](https://www.mongodb.com/download-center/community) 
## Install [As Service](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/)


## Install Angular CLI globally
    Open terminal and run below command
        npm install -g @angular/cli

## Install TypeScript globally
    Open terminal and run below command
        npm install -g typescript

## To initialize project
    navigate to root folder and run below command
        npm install - installs server dependencies locally
    navigate into angular-src folder and run below command
        npm install - installs client dependencies locally

## To start Node server, open new termial; navigate to root folder; run below command

    npm start -  starts node server

    Node will be listening on port 3000 by default

## To compile TypeScript files - production mode
    npm run-script build - comiples all .ts file under src folder and dumps them in dist folder.

## To start client, open new terminal; navigate into angular-src folder; run below command

    ng serve --o - compiles ts files and loads client in browser

    Angular will be served on port 4200 by default

## Load MongoDB scripts.
    Install MongoDB in local system.
    Add MongoDB `bin` folder to PATH in Environmental variables.
    To verify, open terminal anywhere and execute 'mongo' command. It should open mongo shell.
    Open terminal in your scripts folder and fire up mongo shell.
    Execute below cammand
        load("java-script-file.js")
     
## Run server-side tests with Mocha, Chai
    Open terminal in root folder which has package.json file
    Execute `npm run tests` to run all the tests present under src/tests folder.

