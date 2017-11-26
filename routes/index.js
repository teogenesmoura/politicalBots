const express = require('express');
const router 	= express.Router();
const bot = require('../controllers/botController');

router.route('/createBot')
	  .post(bot.createBot);

router.route('/getBot/:name')
	  .get(bot.getBotByName);

module.exports = router;

