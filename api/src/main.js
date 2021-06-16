const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validate, ValidationError, Joi } = require('express-validation');
const sqlite = require('sqlite3');

// Allow Cors from everywhere because it will be an local Application
app.use(cors())
app.options('*', cors())

const dbsource = "db.sqlite"

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())

let db = new sqlite.Database(dbsource, (err) => {
    if (err) {
        console.error("Couldn't connect to the Database.")
    } else {
        console.log('Connected to the Database')
        db.run("CREATE TABLE IF NOT EXISTS weekplan (weekday text NOT NULL, food text);")
        

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
})

const setValidation = {
    body: 
    Joi.object(
        {
            weekday: Joi.string().required(),
            food: Joi.string().required()
        }
    )
};



app.get('/get', function(req, res) {
    var query = "SELECT * FROM weekplan;";
    var food = {};
    

    db.all(query, [], (err, rows) => {
        if (err) {
            throw err;
        }


        rows.forEach(row => {
            switch (row.weekday) {
                case "monday":
                    food["monday"] = row.food;
                    break;
                case "tuesday":
                    food["tuesday"] = row.food;
                    break;
                case "wednesday":
                    food["wednesday"] = row.food;
                    break;
                case "thursday":
                    food["thursday"] = row.food;
                    break;
                case "friday":
                    food["friday"] = row.food;
                    break;
                case "saturday":
                    food["saturday"] = row.food;
                    break;
                case "sunday":
                    food["sunday"] = row.food;
                    break;
                default:
                    break;
            }

            
        }) 
        res.json(food)
    })
})

/*
    Status Codes
    200 Success
    500 Validation Error
    510 Database Error
    520 Validation Weekday Data Error
*/

app.post('/set', validate(setValidation, {}, {}), function (req,res) {
    


    var weekday = req.body.weekday.toString().toLowerCase();
    var food = req.body.food;
    var stmt = db.prepare("UPDATE weekplan SET food = ? WHERE weekday = ?")
    switch(weekday.toLowerCase()) {
        case "monday":
            break;
        case "tuesday":
            break;
        case "wednesday":
            break;
        case "thursday":
            break;
        case "friday":
            break;
        case "saturday":
            break;
        case "sunday":
            break;
        default:
            res.json({
                'statusCode': 520,
                'message': weekday + " is not a valid weekday."
            })
    }

    stmt.run(food, weekday)

    res.json({ 
                'statusCode': 200,
                'content': {
                    weekday: weekday,
                    food: food
                }
            })
})

app.get('/clear', function(req, res) {
    var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    
    var stmt = db.prepare("UPDATE weekplan SET food = ? WHERE weekday = ?")
    weekdays.forEach(weekday => {
        stmt.run(null, weekday)
    })

    res.json({
        'statusCode': 200
    })

})

app.use(function(err, request, response, next) {
    if (err instanceof ValidationError) {
      return response.status(err.statusCode).json(err);
    }
    
    return response.status(err.statusCode).json(err) 
})


app.listen(3000)