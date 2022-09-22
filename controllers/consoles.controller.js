const { Console } = require('../models/console.model');
const { Game } = require('../models/game.model');

const { catchAsync } = require('../utils/catchAsync.util');

const createConsole =  catchAsync( async (req, res, next) => {
  const { name,company } = req.body;

  const console = await Console.create({name,company});

    res.status(201).json({
        status: 'success',
        data: {console},
  })
});
const getAllConsoles = catchAsync(async (req, res, next) => {
	const consoles = await Console.findAll({
		where: { status: 'active' },
		include: { model: Game, through: { attributes: [] } },
	});

	res.status(200).json({
		status: 'success',
		data: { consoles },
	});
});

const updateConsole =  catchAsync( async (req, res, next) => {
  const { console } = req;
  const {name} = req;

  await console.update({ name})

  res.status(200).json({
    status:'success',
    data:{console}
    });
  
  });
 
const deleteConsole =  catchAsync( async (req, res, next) => {

  const {console}= req;

  await Console.update({ status: 'deleted' });

	res.status(200).json({
		status: 'success',
	});
});

module.exports={ 
    createConsole,
    getAllConsoles,
    updateConsole,
    deleteConsole,

};