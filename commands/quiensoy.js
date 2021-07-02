module.exports = {
    name: 'quiensoy',
    description: 'Devuelve info del usuario',
    execute(message, args) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
        // console.log(message.member.voice.channel);
    }
}