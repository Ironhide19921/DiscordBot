module.exports = {
    name: 'play',
    description: 'Play file',
    async execute (message, args) {

        // if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        // }
        // console.log('connection: ' , connection);
        // Create a dispatcher
        // const dispatcher = connection.play('./audio/new-ticket.mp3');
        const dispatcher = connection.play('./audio/Paramore - 02 - Ignorance.mp3');
        // console.log('dispatcher: ',dispatcher);
        dispatcher.on('start', () => {
            console.log('audio.mp3 is now playing!');
        });

        dispatcher.on('finish', () => {
            console.log('audio.mp3 has finished playing!');
        });

        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
        return dispatcher;
    }
}