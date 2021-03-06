const Event = require('../structures/Event.js');
const config = require('../../config.json');

module.exports = class extends Event {

	constructor(...args) {
		super(...args, {
			once: true
		});
	}

	run() {
		console.log([
			`Logged in as ${this.client.user.tag}`,
			`Loaded ${this.client.commands.size} commands.`,
			`Loaded ${this.client.events.size} events.`
		].join('\n'));

		// this.client.user.setActivity('mantenimientos.', { type: 'WATCHING' });

		const activities = [
			`mantenimientos.`,
			`${config.botVersion}`
		];

		let i = 0;
		setInterval(() => this.client.user.setActivity(`${activities[i++ % activities.length]}`, { type: 'WATCHING' }), 10000);
	}

};
