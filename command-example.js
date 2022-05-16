const { RichEmbed } = require('eris');

module.exports = {
    //config
    name: '', //COMMADNS_NAME
    description: '', //COMMADNS_DESCRIPTION
    aliases: [""], //["COMMADNS_ALIASES_1", "COMMADNS_ALIASES_2", "COMMADNS_ALIASES_3"]
    permission: 'administrator', //PERMISSION
    usage: "", //HOW_TO_USE_THIS_COMMAND
    args: 0, //HOW MANY ARGS HAVE TO PROVIDE
    cooldown: 5, //COMMAND COOLDOWN

    /**
     * 
     * @param {Eris} client 
     * @param {Message} message 
     * @param {String[]} args 
     * @param {String} prefix
     */
    run: async(client, message, args, prefix) =>{
        //code
    }
}
