let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let botSchema = new Schema({
	name: String,
	party: String,
	url: String,
	repo: String,
	developer: String,
	additionalDetails: String,
	timestamp: String,
});

botSchema.pre('save', next => {
	let timestamp = new Date().getTime() / 1000;
	if(!this.timestamp) {
		this.timestamp = timestamp;
	}
	next();
});

module.exports = mongoose.model('Bot', botSchema);