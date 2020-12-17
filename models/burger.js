
var orm = require("../config/orm.js");

class Burger {

    getDevoured(data) {
        return data.filter(b => b.devoured === 1);
    }

    getUndevoured(data) {
        return data.filter(b => b.devoured === 0);
    }
    getColums(ob) {
        var arr = [];
        for (var key in ob) {
            if (key != "id") {
                if (Object.hasOwnProperty.call(ob, key)) {
                    arr.push(key);
                }
            }
        }
        return arr;
    };

    getValues(ob) {
        var arr = [];
        for (var key in ob) {
            var value = ob[key];
            // check to skip hidden properties
            if (key != "id") {
                if (Object.hasOwnProperty.call(ob, key)) {
                    arr.push(value);
                }
            }
        }
        return arr;
    }
    selectAll(done) {
        // sql.query("SELECT * FROM customers", (err, res) => {
        orm.all("burgers", (data) => {
            console.log("burgers: ", data);
            var burgers = data.map(r => {
                return {
                    id: r.id,
                    burger_name: r.burger_name,
                    devoured: r.devoured,
                }
            })
            done(null, burgers);
        });
    };

    // The variables cols and vals are arrays.

    create(burger, done) {
        var cols = this.getColums(burger);
        var vals = this.getValues(burger);
        orm.create("burgers", cols, vals, (data) => {
            done(null, burger);
        });
    }

    update(burger, done) {
        let condition = "id = " + burger.id;
        orm.update("burgers", burger, condition, (data) => {
            done(null, burger);
        });
    }

    delete(burger, done) {
        let condition = "id = " + burger.id;
        orm.delete("burgers", condition, (data) => {
            done(null, burger);
        });
    }

}
// Export the database functions for the controller (catsController.js).
module.exports = Burger;

