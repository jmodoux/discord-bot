const Discord = require('discord.js');

module.exports = function(client, options) {
    // Get all options.
    class Command {
        constructor(client) {
            //Nothing?
        }
    }

    var command = new Command(client);

    // Function call when someone send a message
    client.on('message', msg =>{
        const message = msg.content.trim();

        // Check if the message is a command.
        if (message.toLowerCase().startsWith('!')) {
            // Get the command, suffix and bot.
            const command = message.substring(1).split(/[ \n]/)[0].toLowerCase().trim();
            const suffix = message.substring(1 + command.length).trim();

            switch (command) {
                case "dontatme":
                    return dontAtMe(msg, suffix, client);
                    break;
                case "dontatme":
                    return dontAtMe(msg, suffix, client);
                    break;
                default :
                    break;
            }
        }

    });


    function dontAtMe(message, suffix, client) {
        const DontAtMe = client.emojis.find("name", "DontAtMe");
        const monkaS = client.emojis.find("name", "monkaS");
        const point_right = ":point_right:";

        let mention = suffix;
        let content = '';

        if(suffix.split(' ').length > 1) {
            mention = suffix.split(' ')[0];
            content = suffix.substr(mention.length);
        }

        const embed = new Discord.RichEmbed();
        embed.setAuthor(`${message.author.username}`, message.author.avatarURL, message.author.url);
        embed.setDescription(DontAtMe + ' ' +mention + '\n'
            + monkaS + point_right + ' ' + content);


        dInvoker(message);
        message.channel.send({embed});
    }



    /**
     * Deletes the command message if invoker is on.
     *
     * @param {Message} msg - the message of the command.
     */
    function dInvoker(msg) {
        if (!msg || msg.length >= 0) return;
        msg.delete();

    }

}