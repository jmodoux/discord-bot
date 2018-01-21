const MusicBot = require('discord.js-musicbot-addon');
const Command = require('command');

module.exports = class Music extends Command{
    static parse(message) {
        return message.content.startsWith('!music');
    }

    static action(){
        let args = message.content.split(' ');
        args.shift();
        message.reply('Some good music!');
    }

}

