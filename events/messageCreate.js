const config = require('../config.js');
const prefix = require('../config.js').client.prefix;

module.exports = async(client) =>{
    client.on('messageCreate', async(message) =>{
        if(message.author.bot) return;
        if(message.channel.type === 1) return;
        if(!message.content.startsWith(config.client.prefix)) return;

        const args = message.content.slice(config.client.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        let cmd;

        if(client.commands.includes(command)){
            cmd = require(`../commands/${command}`)
        }
        else {
            for (const alias in client.commandsAliases) {
                if (alias === command) {
                    cmd = require(`../commands/${client.commandsAliases[alias]}`)
                } 
                else {
                    return;
                }
            }
        }

        try {
            if (cmd) {
                const perms = message.channel.permissionsOf(message.author.id)
                if (cmd.args && args.length != cmd.args) {
                    let argsMsg = `⚠ | จำเป็นต้องระบุสิ่งที่ต้องใช้ในคำสั่งนี้ **${String(cmd.args)} อย่าง**`;
                    if(cmd.usage){
                        argsMsg += `\nเช่น: \`${cmd.usage}\``;
                        return message.channel.createMessage(argsMsg);
                    }
                    else{
                        return message.channel.createMessage(argsMsg);
                    }
                }
                if (cmd.permission && !perms.has(cmd.permission)){
                    return message.channel.createMessage('⚠ | คุณไม่มีสิทธิ อนุญาติให้ใช้คำสั่งนี้');
                }
                if (client.membersMap.get(message.author.id) === cmd.name){
                    return message.channel.createMessage('⚠ | โปรดรอซักพักก่อนใช้คำสั่งอีกครั้ง');
                }
                if (cmd.cooldown && !perms.has('administrator')) {
                    client.membersMap.set(message.author.id, cmd.name);
                    setTimeout(() => {
                        client.membersMap.delete(message.author.id);
                    }, cmd.cooldown * 1000);
                }
    
                cmd.run(client, message, args, prefix);
            }
        } catch (e) {
            message.channel.createMessage('⚠ | เกิดบางอย่างผิดพลาดเกิดขึ้น ทำให่ไม่สามารถใช้งานคำสั่งนี้ได้ในตอนนี้');
        }
    });
}