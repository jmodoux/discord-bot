const Discord = require('discord.js');

module.exports = ContainKeyWord;

function ContainKeyWord(msg) {
    this.msg = msg;
    this.react();
}

ContainKeyWord.prototype.react = function() {
    // Detect if last msg was not send by a bot

    if (!this.msg.author.bot) {
        const message = this.msg.content.trim();

        console.log(message);
        // Check if the message contains emoji of money $$$
        if (message.match(new RegExp('💵|💶|💰'))) {
            this.moneyReact();
            return;
        }
    }

};

ContainKeyWord.prototype.moneyReact = function() {
    const embed = new Discord.RichEmbed();

    embed.setDescription('WOA!!! thas ALOT of muneys...');
    embed.setImage('http://s2.thingpic.com/images/se/M6ibKNHjNAXoTQ21VWRQNR7E.gif');

    this.msg.channel.send({embed});
};


/**
 * Deletes the command message if invoker is on.
 *
 * @param {Message} msg - the message of the command.
 */
ContainKeyWord.prototype.dInvoker = function() {
    if (!this.msg || this.msg.length >= 0) return;
    this.msg.delete();
};

