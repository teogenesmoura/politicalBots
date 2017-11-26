let Bot = require('../models/bot');

function createBot(req,res) {
	let bot = new Bot();
	if(!req.body.name) {
		res.send('Invalid Bot name');
	} else {
		bot.save(function(err) {
			bot.name = req.body.name;
			bot.party = req.body.party;
			bot.url = req.body.url;
			bot.repo = req.body.repo;
			bot.developer = req.body.developer;
			bot.additionalDetails = req.body.additionalDetails;
			bot.save(function(err) {
				if(err) { res.send(err); }
				res.send('Bot created sucessfully');
			});
		});
	}
}

function getBotByName(req,res) {
	let botName = req.params.name;
	_getBotByName(botName)
	.then(function(bot) {
		res.send('bot ' + botName + 'was found on the database:' + bot);
	})
	.catch(function(err){
		res.send('bot' + botName + 'was not found on the database');
	})
}

function _getBotByName(botName) {
	return new Promise(function(resolve, reject) {
		Bot.findOne({'name': botName}, function(err, bot) {
			if(err) { reject(err); }
			else {
				resolve(bot);
			}
		});
	});
}

module.exports = { createBot, getBotByName };