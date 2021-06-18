const sqlite = require('sqlite3');

const dbsource = "/database/db.sqlite"

let db = new sqlite.Database(dbsource, (err) => {
    if (err) {
        console.error(dbsource)
        throw err;
    } else {
        console.log('Connected to the Database')
        db.run("CREATE TABLE IF NOT EXISTS weekplan (weekday text NOT NULL, food text, ingredients text);")
	
        console.log("Checking for entries...")
	    setTimeout(function() {
            createEntries();
            console.log("Done")
        }, 5000);
        
    }
})

function createEntries() {
    var query = "SELECT * FROM weekplan;";

    // to store weekdays
    var array = [];

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }

        rows.forEach(row => {
            switch (row.weekday) {
                case "monday":
                    array.push("monday")
                    break;
                case "tuesday":
                    array.push("tuesday")
                    break;
                case "wednesday":
                    array.push("wednesday")
                    break;
                case "thursday":
                    array.push("thursday")
                    break;
                case "friday":
                    array.push("friday")
                    break;
                case "saturday":
                    array.push("saturday")
                    break;
                case "sunday":
                    array.push("sunday")
                    break;
            }
        })

        var stmt = db.prepare("INSERT INTO weekplan (weekday) VALUES (?)")
        if (!array.includes("monday")) {
            console.log("An entry for Monday is not existing. Creating..")
            stmt.run("monday")
        }
        if (!array.includes("tuesday")) {
            console.log("An entry for tuesday is not existing. Creating..")
            stmt.run("tuesday")
        }
        if (!array.includes("wednesday")) {
            console.log("An entry for wednesday is not existing. Creating..")
            stmt.run("wednesday")
        }
        if (!array.includes("thursday")) {
            console.log("An entry for thursday is not existing. Creating..")
            stmt.run("thursday")
        }
        if (!array.includes("friday")) {
            console.log("An entry for friday is not existing. Creating..")
            stmt.run("friday")
        }
        if (!array.includes("saturday")) {
            console.log("An entry for saturday is not existing. Creating..")
            stmt.run("saturday")
        }
        if (!array.includes("sunday")) {
            console.log("An entry for sunday is not existing. Creating..")
            stmt.run("sunday")
        }
        
    })
}

exports.db = db;
