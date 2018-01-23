const Discord = require('discord.js');
module.exports = Command;

function Command(msg) {
    this.msg = msg;
    this.run();
}

Command.prototype.run = function()
{

    const message = this.msg.content.trim();

    // Check if the message is a command.
    if (message.toLowerCase().startsWith('!')) {
        // Get the command, suffix and bot.
        const command = message.substring(1).split(/[ \n]/)[0].toLowerCase().trim();
        const suffix = message.substring(1 + command.length).trim();

        switch (command) {
            case "dontatme":
                return this.dontAtMe(suffix);
                break;
            case "dontatme":
                return this.dontAtMe(suffix);
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



/**
 * Deletes the command message if invoker is on.
 *
 * @param {Message} msg - the message of the command.
 */
Command.prototype.dInvoker = function() {
    if (!this.msg || this.msg.length >= 0) return;
    this.msg.delete();
};

