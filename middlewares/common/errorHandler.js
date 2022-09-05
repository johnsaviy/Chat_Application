const createError = require("http-errors")

// 404 not foound handler

function notFoundHandler(req, res, next){
    next(createError(404, "Your requested content was not found"))
}

// default error handler
function errorHandler(err, req, res, next){
    res.render('error', {
        title: "Error Page",

    })
}

module.exports = {notFoundHandler, errorHandler}