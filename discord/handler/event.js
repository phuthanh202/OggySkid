const fs = require('node:fs')
const { Client } = require('discord.js')

/**
 * Event handler
 * @param {Client} client 
 */

module.exports = (client) => {
    const eventFiles = fs.readdirSync('./discord/events/').filter(file => file.endsWith('.js'));
    
    console.log(`[${client.type.toUpperCase()}] LOADING EVENTS`);

    for (const file of eventFiles) {
        const event = require(`../events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.run(...args));
        } else {
            client.on(event.name, (...args) => event.run(...args));
        }
    }

    console.log(`[${client.type.toUpperCase()}] LOADED EVENTS`)
}