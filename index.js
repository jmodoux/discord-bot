// General
const Discord = require('discord.js');
const bot = new Discord.Client();

const bot_token = 'NDA0NTYyNjAxNzk2ODI5MTg2.DUXp0g.BMQP7ejlCE69Jy9SPjA85igaNRc';
const youtube_key = 'AIzaSyBVbd6crFeK6qeryLldrM1Ip-kQml72rVU';

// Classes
const MusicBot = require('./music-bot/Music-bot');
const Command = require('./commands/Command');
const command = new Command();
const ContainKeyWord = require('./commands/ContainKeyWord');
const containKeyWord = new ContainKeyWord();

// Create objects
const music = new MusicBot(bot, {
    disableLoop: true,
    youtubeKey: youtube_key
});

bot.on("message", msg=>{
    command.run(msg);
    containKeyWord.react(msg);
});

// Login bot
bot.login(bot_token);

