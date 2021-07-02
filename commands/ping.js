module.exports = {
    name: 'ping',
    description: 'Responde pong!"',
    execute(message, args) {
        message.channel.send('pong!');
    }
}