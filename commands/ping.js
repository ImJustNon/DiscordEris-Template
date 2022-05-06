const { RichEmbed } = require('eris');

module.exports = {
    name: 'ping',
    description: 'Just a test command',
    aliases: ["p"],
    permission: 'administrator',
    usage: "",
    args: 0,
    cooldown: 5,

    /**
     * 
     * @param {Eris} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args, prefix) =>{
        message.channel.createMessage(`pong`)
    }
}