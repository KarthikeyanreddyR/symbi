# Symbii
# Final Deliverable Presentation

## A. Feedback We Incorporated
#### Our Color Scheme
1. The colors on the front-page clash, both together are too much. Try to tone it down.
2. Color schedule and layout doesn't work for this type of app.
3. I'm not 100% sold on the color scheme of the app, I would consider more neutral colors.
    * **So, we changed our color scheme to more neutral colors:**
    * [Symbii Homepage](http://symbii-dev.azurewebsites.net)
    * `http://symbii-dev.azurewebsites.net/`
#### Rating and Verifying Nannies
##### Verifying Nannies
1. How to verify the credentials of the nanny?
2. Concerns on vetting childcare providers?
3. Need to consider how to verify a qualified nanny?
4. How will the nannies be screened?
5. Need to take precautions when dealing with finding childcare providers?
6. Schedule an initial meeting between parents and nannies?
7. Can you add a trust system or certification before they get added to the list?
8. Will there be a background check / verification for nannies?
9. It will be great if the system has a way of verifying the qualifications?
10. How will you vet the caregiver?
    * *This is beyond the scope of the assignment*
        * *We do not have an FBI or State sponsored childcare background check.*
        * *Our v1 intention is for parents to use this tool to schedule existing nannies.*
##### Rating the Nannies
1. Is there a way to rate the nannies?
2. Allow Child to Give feedback about the nanny without Parent's consent:
    * *Children are minors, we only allow the parent to write reviews*
3. Good idea. However, I'm concerned about the nannies?
4. Have a system of accountability to rate nannies?
5. Will you guys have a rating system?
    * **Yes. Reviews**
    * [Symbii Reviews](http://symbii-dev.azurewebsites.net/#/review/)
    * `http://symbii-dev.azurewebsites.net/#/review`
    * *Requires valid login to view private reviews*

---

## B. Trello Board
>[Childcare Manager](https://trello.com/b/tzzIrQ7d/childcare-manager)
`https://trello.com/b/tzzIrQ7d/childcare-manager`

---
## C. Azure App URL
>[Symbii](http://symbii-dev.azurewebsites.net)
`http://symbii-dev.azurewebsites.net`

---

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
    Execute below command
        load("java-script-file.js")
     
## Run server-side tests with Mocha, Chai
    Open terminal in root folder which has package.json file.
    Execute `npm run tests` to run all the tests present under src/tests folder.

### Symbii