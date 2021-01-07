module.exports = function errorsHandler (err,req,res,next){
    console.log(err);
    let statusCode = 500
    let message = "Internal Server Error!"

    switch (err.name) {
        case 'SequelizeValidationError':
            statusCode = 400
            message = err.errors[0].message
            break;
        case 'SequelizeDatabaseError':
            if(err.parent.code === '23502'){
                statusCode = 400
                message = err.errors[0].message
            }            
            break;
        case "SequelizeUniqueConstraintError":
            statusCode = 400
            message = `${err.errors[0].value} sudah ada`
            break;
        case 'SequelizeForeignKeyConstraintError': 
            statusCode = 400
            message = `ForeignKey error!` 
            break;
        case 'NotFound':
            statusCode = 404
            message = err.message
            break;
        case 'Forbidden':
            statusCode = 403
            message = err.message
            break
        case 'Unauthorized':
            statusCode = 401
            message = err.message
            break
        case 'JsonWebTokenError':
            statusCode = 401
            message = err.message
            break
    }
    // console.log(res)
    return res.status(statusCode).json({message})
}
