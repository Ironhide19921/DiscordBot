module.exports = {
    name: 'args-info',
    description: 'Dev-Info de tus argumentos',
    execute(message, args) {
        if(!args.length){
            return message.channel.send(`No me pasaste argumentos, ${message.author}!`);
        }
        const command = args.shift().toLowerCase();
        message.channel.send(`Nombre comando: ${command}\nArgumentos: ${args}`);
    }
}