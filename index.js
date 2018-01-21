// General
const Discord = require('discord.js');
const client = new Discord.Client();
const bot_token = 'NDA0MjI1MjcwMzU1MTk3OTUy.DUTcaA.CiyIrQGfugxiuyOSxy1ZzbNpGi0';
const youtube_key = 'AIzaSyBVbd6crFeK6qeryLldrM1Ip-kQml72rVU';
// Commands
const MusicBot = require('discord.js-musicbot-addon');
const music = new MusicBot(client, {
    disableLoop: true,

    youtubeKey: youtube_key
});

// Login bot
client.login('NDA0MjI1MjcwMzU1MTk3OTUy.DUTcaA.CiyIrQGfugxiuyOSxy1ZzbNpGi0');

// Function call when someone send a message
client.on('message', function (message) {
    console.log(message.content);

    //let commandUsed =
    //Music.parse(message);
})


