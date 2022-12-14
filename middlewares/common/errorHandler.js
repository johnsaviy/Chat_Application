const createError = require("http-errors")
// const {model} = require('mongoose')

// 404 not foound handler

function notFoundHandler(req, res, next){
    next(createError(404, "Your requested content was not found"))
}

// default error handler
function errorHandler(err, req, res, next){
    res.locals.error = process.env.NODE_ENV === "development" ? err :
    {message: err.message}
    res.status(err.status || 500)

    if(res.locals.html){
        // html response
        res.render("error", {
            title: 'this is html error page',
        })
    }else{
        // json response
        res.json(res.locals.error)
    }

    // res.locals.title = "This is a error page"
    // res.render('error') 
}

module.exports = {notFoundHandler, errorHandler}