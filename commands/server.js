module.exports = {
    name: 'server',
    description: 'Devuelve info del server',
    execute(message, args) {
        console.log(message.guild);
        message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
    }
}