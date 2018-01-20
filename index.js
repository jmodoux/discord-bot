const Discord = require('discord.js');
const bot = new Discord.Client();
const bot_token = 'NDA0MjI1MjcwMzU1MTk3OTUy.DUTcaA.CiyIrQGfugxiuyOSxy1ZzbNpGi0';

bot.login('NDA0MjI1MjcwMzU1MTk3OTUy.DUTcaA.CiyIrQGfugxiuyOSxy1ZzbNpGi0');

bot.on('message', function (message) {
    console.log(message.content);
    switch (message.content){

        case '!ping':
            message.channel.send('pong');
            break;
        default :
            break;
     }


})


