const { Console } = require('../models/console.model');

const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');


const consoleExists = catchAsync(async (req, res, next)=>{
    const { id } = req.params;

   const console = await Console.findOne({where: {id, status:'active'}});
   
   if (!console) {
       return next( new AppError('Console does not exists',404))
       
   }
   req.console = console;
    next();
});

module.exports = {consoleExists}