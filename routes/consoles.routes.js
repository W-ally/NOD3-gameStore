const express = require('express');

// Controller
const {
	createConsole,
	getAllConsoles,
	updateConsole,
	deleteConsole,
	
} = require('../controllers/consoles.controller');

// Middlewares
const { protectSession } = require('../middlewares/auth.middlewares');
const { consoleExists } = require('../middlewares/consoles.middleware');
const { createConsoleValidators} = require('../middlewares/validators.middlewares')

const consoleRouter = express.Router();

consoleRouter.get('/', getAllConsoles);

consoleRouter.use(protectSession);

consoleRouter.post('/', createConsoleValidators, createConsole);

consoleRouter.patch('/:id', consoleExists, updateConsole);

consoleRouter.delete('/:id', consoleExists, deleteConsole);


module.exports = { consoleRouter };
