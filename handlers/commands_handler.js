const fs = require('fs');
const chalk = require('chalk');

/**
 * 
 * @param {Eris} client 
 */

module.exports = async(client) =>{
    fs.readdirSync('./commands').forEach(command => {
        const cmd = require(`../commands/${command}`);
    
        client.commands.push(cmd.name);
        if(cmd.aliases) {
            cmd.aliases.forEach(alias => {
                client.commandsAliases[alias] = cmd.name;
            });
        }
        console.log(chalk.hex('#fc8530').bold("[Commands] ") + chalk.whiteBright.bold("Loading command : ") + chalk.hex('#fc8530').bold(command));
    });
}