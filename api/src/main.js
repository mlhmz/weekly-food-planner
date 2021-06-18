const cors = require('cors');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { validate, ValidationError, Joi } = require('express-validation');
const database = require("./database.js");
const methods = require('./methods.js');

// Allow Cors from everywhere because it will be an local Application
app.use(cors())
app.options('*', cors())

let db = database.db;

app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json())



const setValidation = {
    body: 
    Joi.object(
        {
            weekday: Joi.string().required(),
            food: Joi.string().required(),
            ingredients: Joi.array()
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
            var ingredients = null;

            switch (row.weekday) {
                case "monday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["monday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
                    break;
                case "tuesday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["tuesday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
                    break;
                case "wednesday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["wednesday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
                    break;
                case "thursday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["thursday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
                    break;
                case "friday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["friday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
                    break;
                case "saturday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["saturday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
                    break;
                case "sunday":
                    if (row.ingredients != undefined) {
                        ingredients = row.ingredients.split(",")
                    }
                    food["sunday"] = 
                    {   food: row.food,
                        ingredients: ingredients
                    };
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
    var ingredients = req.body.ingredients;
    var stmt = db.prepare("UPDATE weekplan SET food = ?, ingredients = ? WHERE weekday = ?")
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

    stmt.run(food, methods.arrayToString(ingredients), weekday)

    res.json({ 
                'statusCode': 200,
                'content': {
                    weekday: weekday,
                    food: food,
                    ingredients: ingredients
                }
            })
})

app.get('/clear', function(req, res) {
    var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    
    var stmt = db.prepare("UPDATE weekplan SET food = ?, ingredients = ? WHERE weekday = ?")
    weekdays.forEach(weekday => {
        stmt.run(null, null, weekday)
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