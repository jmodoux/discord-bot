const Discord = require('discord.js');
const stream = require('youtube-audio-stream');

module.exports = Command;

function Command() {
    this.msg = null;
}

Command.prototype.run = function(msg)
{
    this.msg = msg;
    const message = this.msg.content.trim();

    // Check if the message is a command.
    if (message.toLowerCase().startsWith('!')) {
        // Get the command, suffix and bot.
        const command = message.substring(1).split(/[ \n]/)[0].toLowerCase().trim();
        const suffix = message.substring(1 + command.length).trim();

        switch (command) {
            case "dontatme":
                this.dontAtMe(suffix);
                break;
            case "givemoney":
                this.giveMoneyForTemmie(suffix);
                break;
            default :
                break;
        }
    }
};



Command.prototype.dontAtMe = function(suffix)
{
    const client = this.msg.client;

    const DontAtMe = client.emojis.find("name", "DontAtMe");
    const monkaS = client.emojis.find("name", "monkaS");
    const point_right = ":point_right:";

    let mention = suffix;
    let content = '';

    if (suffix.split(' ').length > 1) {
        mention = suffix.split(' ')[0];
        content = suffix.substr(mention.length);
    }

    const embed = new Discord.RichEmbed();
    embed.setAuthor(`${this.msg.author.username}`, this.msg.author.avatarURL, this.msg.author.url);
    embed.setDescription(DontAtMe + ' ' + mention + '\n'
        + monkaS + point_right + ' ' + content);


    this.dInvoker();
    this.msg.channel.send({embed});
};

Command.prototype.giveMoneyForTemmie = function(suffix)
{
    const client = this.msg.client;


    let amountOfMoney = suffix;

    if (suffix.split(' ').length > 1) {
        amountOfMoney = suffix.split(' ')[0];
    }

    const embed = new Discord.RichEmbed();
    if(amountOfMoney < 1000) {
        embed.setImage('https://media3.giphy.com/media/L9FNHIhvtpFks/giphy.gif');
        embed.setDescription('yayA!!! thanks '+`${this.msg.author.username}`+' for the muns.. But thas NOT enough for Colleg..');

    }else{

        embed.setDescription('OKs! tem go to colleg and make u prouds!!!');
        embed.setImage('https://i.imgur.com/d1ZDiqX.gif');

        this.playYoutube('https://www.youtube.com/watch?v=_BD140nCDps');

        this.dInvoker();
    }

    this.dInvoker();
    this.msg.channel.send({embed});
};

/**
 * Deletes the command message if invoker is on.
 *
 * @param {Message} msg - the message of the command.
 */
Command.prototype.dInvoker = function() {
    if (!this.msg || this.msg.length >= 0) return;
    this.msg.delete();
};

Command.prototype.playYoutube = function(videoURL){
    new Promise((resolve, reject) => {
        // Join the voice channel if not already in one.
        const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == this.msg.guild.id);
        if (voiceConnection === null) {
            // Check if the user is in a voice channel.
            if (this.msg.member.voiceChannel && this.msg.member.voiceChannel.joinable) {
                this.msg.member.voiceChannel.join().then(connection => {
                    resolve(connection);
                }).catch((error) => {
                    console.log(error);
                });
            } else if(!this.msg.member.voiceChannel.joinable) {
                //this.msg.channel.send(note('fail', 'I do not have permission to join your voice channel!'))
                reject();
            } else {
                // Otherwise, clear the queue and do nothing.
                //queue.splice(0, queue.length);
                reject();
            }
        } else {
            resolve(voiceConnection);
        }
    }).then()(connection => {

        // console.log(video.webpage_url);
        //removed currently.

        // Play the video.
        try {
            let dispatcher = connection.playStream(stream(videoURL), {seek: 0, volume: (80/100)});

            dispatcher.on('end', () => {
                //DELETE THIS MESSAGE
            });
        } catch(error) {
            console.log(error);
        }
    }).catch((error) => {
        console.log(error);
    });
}
