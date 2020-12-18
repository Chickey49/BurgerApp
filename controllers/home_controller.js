
const Burger = require('../models/burger.js');
var express = require("express");

var router = express.Router();



// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    // return all burgers
    let b = new Burger();
    b.selectAll((err, data) => {
        showIndex(data, res);
        console.log("select all done");
    });
});

function showIndex(data, res) {
    let b = new Burger();
    let unEaten = b.getUndevoured(data);
    let eaten = b.getDevoured(data);
    res.render("index", {
        undevoured: unEaten,
        devoured: eaten
    });
}


// Export routes for server.js to use.
module.exports = router;
