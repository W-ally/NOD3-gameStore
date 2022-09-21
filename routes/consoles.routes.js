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

const gamesRouter = express.Router();

gamesRouter.get('/', getAllConsoles);

gamesRouter.use(protectSession);

gamesRouter.post('/', createConsole);

gamesRouter.patch('/:id', consoleExists, updateConsole);

gamesRouter.delete('/:id', consoleExists, deleteConsole);


module.exports = { gamesRouter };
