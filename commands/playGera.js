module.exports = {
    name: 'playGera',
    description: 'Bienvenida Gera',
    async execute (client) {

        // if (message.member.voice.channel) {
        // const connection = await message.member.voice.channel.join();
        // gral neo
        const channel = await client.channels.cache.get('734771877091999828');

        // lolsito
        // const channel = await client.channels.cache.get('394303546570440708');

        if (!channel) return console.error("The channel does not exist!");
        const connection = await channel.join();
        // }
        // console.log('connection: ' , connection);
        // Create a dispatcher
        // const dispatcher = connection.play('./audio/new-ticket.mp3');
        const dispatcher = connection.play('./audio/Bienvenida.mp3');
        // console.log('dispatcher: ',dispatcher);
        dispatcher.on('start', () => {
            console.log('Bienvenida.mp3 is now playing!');
        });

        dispatcher.on('finish', () => {
            console.log('Bienvenida.mp3 has finished playing!');
        });

        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
        return dispatcher;
    }
}