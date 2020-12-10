const app = require('express');
const burger = require('../models/burger.js');


// Create the `router` for the app, and export the `router` at the end of your file.
class Router {
    constructor(){
        // The routes property will store all routes and their callback functions in an array.
        this.routes = [];
     }
    
     get(uri, callback){
        // ensure that the parameters are not empty
        if(!uri || !callback) throw new Error('uri or callback must be given');

        // ensure that the parameters have the correct types
        if(typeof uri !== "string") throw new TypeError('typeof uri must be a string');
        if(typeof callback !== "function") throw new TypeError('typeof callback must be a function');

        // throw an error if the route uri already exists to avoid confilicting routes
        this.routes.forEach(route=>{
            if(route.uri === uri) throw new Error(`the uri ${route.uri} already exists`);
        })

        // Step 5 - add route to the array of routes
        const route = {
            uri, // in javascript, this is the same as uri: uri, callback: callback, avoids repition
            callback
        }
        this.routes.push(route);
    }

    init(){
        this.routes.some(route=>{

            let regEx = new RegExp(`^${route.uri}$`); // i'll explain this conversion to regular expression below
            let path = window.location.pathname;

            if(path.match(regEx)){
                // our route logic is true, return the corresponding callback

                let req = { path } // i'll also explain this code below
                return route.callback.call(this, req);
            }
        })
    }
}


    // app.listen(3000, function(){
    //     console.log('Listening on port 8000...')


module.exports = Router;
