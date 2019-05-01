
# Building a MEAN Stack application 
## References and supporting documentation
* Reference: https://medium.com/@onejohi/mean-stack-quick-guide-f50351ba56eb
* Getting Started Angular: https://medium.com/@onejohi/getting-started-with-angular-5-5099104eb2f
* Angular 6 Cheat Sheet: https://medium.com/@onejohi/angular-6-cheat-sheet-b36e04bf008a
* REST using Express https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9
* Mongo Shell Basics https://medium.com/@atingenkay/the-mongo-shell-basics-e29503f0f785
* Tutorial: How to use MongoDB https://medium.com/@martinlasek/tutorial-how-to-use-mongodb-e45b0f45fe64
* Why is Express service not working
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

    * https://expressjs.com/en/starter/static-files.html
    * https://appdividend.com/2018/11/24/how-to-serve-static-files-in-express/


## Terms from tutorial
* REPL - Node JS provies a REPL environment, Read Eval print loop
* MEAN - MongDb, Express, Angular, Node
* BJSON - BSON is a computer data interchange format used mainly as a data storage and network transfer format in the MongoDB database. It is a binary form for representing simple data structures, associative arrays, and various data types of specific interest to MongoDB https://en.wikipedia.org/wiki/BSON .
* BSON - is a computer data interchange format used mainly as a data storage and network transfer format in the MongoDB database. It is a binary form for representing simple data structures, associative arrays, and various data types of specific interest to MongoDB.
* CORS - Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.[1] A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.[2] Certain "cross-domain" requests, notably Ajax requests, are forbidden by default by the same-origin security policy.

CORS defines a way in which a browser and server can interact to determine whether or not it is safe to allow the cross-origin request.[3] It allows for more freedom and functionality than purely same-origin requests, but is more secure than simply allowing all cross-origin requests. The specification for CORS was originally published as a W3C Recommendation[4] but that document is obsolete.[5] The current actively-maintained specification that defines CORS is WHATWG's Fetch Living Standard.[6]
[CORS Reference wikipedia](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
[NPM CORS usage](https://www.npmjs.com/package/cors)
## Commands to create and run application
* Create a git repository Reference: https://github.com/CODevOp/express-rest-API
* Install Angular CLI
    ``` Powershell
    npm install -g @angular/cli
    ```
* Create Angular Application
    ``` Powershell
    ng new mean-learnApp-tutorial # this will create a application folder and a src folder. Run from github folder.
    ```
* Install Express
    ``` Powershell
    npm install -g express-generator    
    ```
* Add Express to the Angular Project
    ``` Powershell
    # this will add express to package.json file and installs express packages in node_modules
    npm install express --save 
    ```
* Add app.js file 
    The app.js file is not automatically created
    ``` Javascript
    let express = require('express')
    let path = require('path')
    let app = express()
    //configure app to serve static files from public folder
    // app.use(express.static(path.join(__dirname, 'public')))
    app.use(express.static('public'))
    app.listen(3000 || process.env.PORT, () => {
    console.log("Server listening on port 3000")
    })
    ```

* To run express service
    ``` Powershell
    node app.js
    ```

    1. create a folder "public" in root
    2. navigate to  http://127.0.0.1:3000/index.html
## Commands continued.... 
* MongoDB
    ``` Powershell
    # install mongoose to interact with a mongoDB from NodeJS
    npm install mongoose body-parser --save
    # install CORS to secure Cross origin requests https://www.npmjs.com/package/cors
    npm install cors
    ```
* Note on MongoDb

    I am not running the mongoDb locally. Instead I am using what I learned in [express-locallibrary-tutorial](https://github.com/CODevOp/express-locallibrary-tutorial).
    In the [MDN Express Tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs) a mongoDb was used from the [Atlas Cloud](https://www.mongodb.com/cloud/atlas). MongoDB has set up their cloud to use free tier pricing from Azure, AWS and Google and pass this on to the community, allowing developers to learn document databases and MongoDB. To protect my connection strings I store them in local variables. 

* Set local variables to protect passwords
    [Reference about Environment:](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-6)
    ``` Powershell
    # to read or query local variables
    Set-Location Env:
    Get-ChildItem

    # or   
    Get-ChildItem Env:
    $ENV:dev_db_url = "mongodb+srv://<user>:<password>@<cluster>.azure.mongodb.net/<database>?retryWrites=true"
    ```


### Next steps
* MongoDb
    * Add form to add students
* Review other articles/reference from tutorial
* Migrate github folder to different location
