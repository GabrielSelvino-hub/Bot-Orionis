const Discord = require('discord.js');


exports.run = (bot, message, args) => {

    let demon = message.author.tag


    if(demon==="Demo"){
        message.delete()
        message.channel.send("Gabriel Selvino o desenvolvedor do bot Orionis")
    }
}

exports.help = {
    name: 'o.demo'
}  