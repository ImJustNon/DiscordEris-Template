const chalk = require('chalk');
const config = require('../config.js');

/**
 * 
 * @param {Eris} client 
 */
module.exports = async(client) =>{
    client.on("ready", () =>{
        console.log(chalk.green.bold(`[Client] `) + chalk.green.bold("------------ [MainClient] ------------"));
        console.log(chalk.green.bold(`[Client] `) + chalk.white.bold(`Logged in as `) + chalk.blue.bold(`${client.user.username}#${client.user.discriminator}`));
        console.log(chalk.green.bold(`[Client] `) + chalk.white.bold(`Ready On ${client.guilds.size} Servers, ${client.users.size} Users`));
        console.log(chalk.green.bold(`[Client] `) + chalk.green.bold("------------ [MainClient] ------------"));

        setInterval(() => {
            change_status(client, random_type_num());
        }, 10 * 1000);
    });
}

let last_num;
function random_type_num(){
    let num;
    for(let i = 0; i < Infinity; i++){
        num = Math.floor(Math.random() * 6); // 0-5
        if(num === 4) continue;
        if(last_num === num) continue;
        last_num = num;
        break;
    }
    return num;
}


function change_status(client, type){
    client.editStatus('online', { //Sets the bot's status, either "online", "idle", "dnd", or "invisible"
        name: `${config.client.prefix}help | ${client.guilds.size} เซิฟเวอร์`, 
        type: type,  //The type of the activity. 0 is playing, 1 is streaming (Twitch only), 2 is listening, 3 is watching, 5 is competing in
        url: "https://www.twitch.tv/im_just_non",
    });
}