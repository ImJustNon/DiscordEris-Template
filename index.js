const Eris = require('eris');
const fs = require('fs');
const chalk = require('chalk');
const config = require('./config.js')
const client = new Eris(config.client.token, {
    intents: [
        "guilds",
        "guildMembers",
        "guildBans",
        "guildEmojisAndStickers",
        "guildEmojis",
        "guildIntegrations",
        "guildWebhooks",
        "guildInvites",
        "guildVoiceStates",
        "guildPresences",
        "guildMessages",
        "guildMessageReactions",
        "guildMessageTyping",
        "directMessages",
        "directMessageReactions",
        "directMessageTyping",
    ],
});
module.exports = client;


client.commands = [];
client.commandsAliases = {};
client.membersMap = new Map();


const handlers = ["commands_handler", "events_handler", "error_handler"];
handlers.forEach((handler) =>{
    console.log(chalk.hex('#309afc').bold("[Handlers] ") + chalk.whiteBright.bold('Loading handler : ') + chalk.hex('#309afc').bold(`${handler}.js`));
    require(`./handlers/${handler}.js`)(client);
});

client.connect();