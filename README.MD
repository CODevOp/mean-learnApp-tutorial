
# Building a MEAN Stack application 
Reference: https://medium.com/@onejohi/mean-stack-quick-guide-f50351ba56eb
Getting Started Angular: https://medium.com/@onejohi/getting-started-with-angular-5-5099104eb2f
Angular 6 Cheat Sheet: https://medium.com/@onejohi/angular-6-cheat-sheet-b36e04bf008a
REST using Express https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
Mongo Shell Basics https://medium.com/@atingenkay/the-mongo-shell-basics-e29503f0f785
Tutorial: How to use MongoDB https://medium.com/@martinlasek/tutorial-how-to-use-mongodb-e45b0f45fe64
Why is Express service not working
    ``` Javascript
        
    PS C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial> node app.js
    Server listening on port 3000
    TypeError: req.sendFile is not a function
        at app.get (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\app.js:9:7)
        at Layer.handle [as handle_request] (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\layer.js:95:5)
        at next (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\route.js:137:13)
        at Route.dispatch (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\route.js:112:3)
        at Layer.handle [as handle_request] (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\layer.js:95:5)
        at C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\index.js:281:22
        at Function.process_params (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\index.js:335:12)
        at next (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\express\lib\router\index.js:275:10)
        at SendStream.error (C:\Users\bret.DOGGY\Documents\github\mean-learnApp-tutorial\node_modules\serve-static\index.js:121:7)
        at SendStream.emit (events.js:189:13)
    ```
    https://expressjs.com/en/starter/static-files.html


# Terms from tutorial
* REPL - Node JS provies a REPL environment, Read Eval print loop
* MEAN - MongDb, Express, Angular, Node
* BJSON - BSON is a computer data interchange format used mainly as a data storage and network transfer format in the MongoDB database. It is a binary form for representing simple data structures, associative arrays, and various data types of specific interest to MongoDB https://en.wikipedia.org/wiki/BSON .


# Commands to create and run application
* Create a git repository Reference: https://github.com/CODevOp/express-rest-API
* Install Angular CLI
    ``` Powershell
    npm install -g @angular/cli
    ``` 
* Create Angular Application
    ``` Powershell
    ng new mean-learnApp-tutorial // this will create a application folder and a src folder. Run from github folder.
    ```

# Install Express
    ``` Powershell
    npm install -g express-generator
    
    ```
# Add Express to the Angular Project
    ``` Powershell
    # this will add express to package.json file and installs express packages in node_modules
    npm install express --save 
    ```
# Add app.js file 
The app.js file is not automaticall created. and setup the express server

# Next steps
* Fix TypeError: req.sendFile
* Review other articles/reference from tutorial
* MongoDb

