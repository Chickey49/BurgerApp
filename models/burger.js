
var orm = require("../config/orm.js");

class Burger {
    constructor(id, burger_name, devoured) {
        this.id = id;
        this.name = burger_name;
        this.devoured = devoured;
    }


    async selectAll() {
        return new Promise(data => {
           await orm.selectAll("burgers", function (res) {
                cb(res);
            });
        })
    }
    // The variables cols and vals are arrays.
    async create(burger) {
        var cols = getColums(burger);
        var vals = getValues(burger);
        return new Promise(data => {
            await orm.create("burgers", cols, vals, function (res) {
                cb(res);
            });
        })
    }
    async update(burger) {
        let condition = "id = " + burger.id;
        return new Promise(data => {
            await orm.update("burgers", burger, condition, function (res) {
                cb(res);
            });
        })
    }
    getColums(ob) {
        var arr = [];
        return new Promise(data => {
            for (var key in ob) {
                if (key != "id") {
                    if (Object.hasOwnProperty.call(ob, key)) {
                        arr.push(key);
                    }
                }
            }
            return arr;
        })
    }
    getValues() {
        var arr = [];

        return new Promise(data => {
            for (var key in ob) {
                var value = ob[key];
                // check to skip hidden properties
                if (Object.hasOwnProperty.call(ob, key)) {
                    arr.push(value);
                }
            }
            return arr;
        })
    }
}
// Export the database functions for the controller (catsController.js).
module.exports = Burger;

