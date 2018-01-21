// General
const Discord = require('discord.js');
const client = new Discord.Client();

const bot_token = 'NDA0NTYyNjAxNzk2ODI5MTg2.DUXp0g.BMQP7ejlCE69Jy9SPjA85igaNRc';
const youtube_key = 'AIzaSyBVbd6crFeK6qeryLldrM1Ip-kQml72rVU';

// Commands
const MusicBot = require('discord.js-musicbot-addon');
const Command = require('./commands/command')

const music = new MusicBot(client, {
    disableLoop: true,

    youtubeKey: youtube_key
});
const command = new Command(client);


// Login bot
client.login(bot_token);

