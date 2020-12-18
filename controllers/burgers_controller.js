
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

router.post("/", function (req, res) {
    let b = new Burger();
    b.create(req.body, (result) => {
        res.status(200).end();
    });
});

router.put("/:id", function (req, res) {
    let b = new Burger();
    b.update(
        {
            id: req.params.id,
            devoured: 1
        },
        (data) => {
            // if (data.changedRows === 0) {
            //     // If no rows were changed, then the ID must not exist, so 404
            //     return res.status(404).end();
            // }
            res.status(200).end();
        }
    );
});

router.delete("/:id", function (req, res) {
    let b = new Burger();
    b.delete(
        {
            id: req.params.id,
        },
        (data) => {
            // if (data.changedRows === 0) {
            //     // If no rows were changed, then the ID must not exist, so 404
            //     return res.status(404).end();
            // }
            res.status(204).end();
        }
    );
});
// Export routes for server.js to use.
module.exports = router;
