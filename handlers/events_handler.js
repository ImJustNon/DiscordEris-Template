const fs = require('fs');
const chalk = require('chalk');

/**
 * 
 * @param {Eris} client
 */
module.exports = async(client) =>{
    fs.readdirSync('./events').forEach(async file => {
        const event = require(`../events/${file}`);
        event(client);
        console.log(chalk.yellow.bold(`[Event] `) + chalk.whiteBright.bold(`Loading event : `) + chalk.yellowBright.bold(`${file}`));
    })
}