module.exports = {
    name: 'hibot',
    description: 'Responde "hi Neo!!!"',
    execute(message, args) {
        message.channel.send('hi Neo!!!');
    }
}