const Discord = require('discord.js');

module.exports = function(client, options) {
    // Get all options.
    class ContainKeyWord {
        constructor(client) {
            //Nothing?
        }
    }

    var containKeyWord = new ContainKeyWord(client);

    // Function call when someone send a message
    client.on('message', msg =>{
        // Detect if last msg was not send by a bot
        if(!msg.author.bot) {
            const message = msg.content.trim();

            // Check if the message contains emoji of money $$$
            if (message.match(new RegExp(':dollar:||:euro:||:moneybag:'))) {
                moneyReact(msg);
                return;
            }
        }
    });


    function moneyReact(message) {
        const embed = new Discord.RichEmbed();

        embed.setDescription('WOA!!! thas ALOT of muneys...');
        embed.setImage('http://s2.thingpic.com/images/se/M6ibKNHjNAXoTQ21VWRQNR7E.gif');

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