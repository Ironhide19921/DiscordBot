const ytdl = require('ytdl-core');
module.exports = {
    name: 'youtube',
    description: 'Play youtube',
    async execute (message, args) {

        const connection = await message.member.voice.channel.join();
        // console.log('connection',connection);
        // console.log('si');
        // message.voiceChannel.join().then(connection => {
        console.log(args);
        // const stream = ytdl('https://www.youtube.com/watch?v=75Mw8r5gW8E', 
        const stream = ytdl(args[0], 
        // { filter: 'audioonly' }
        );
        const dispatcher = connection.play(stream);
        console.log('youtube is now playing!');
        
        dispatcher.on('finish', () => {
            // voiceChannel.leave()
            console.log('youtube has finished playing!');
        });
        // }
        

        // Always remember to handle errors appropriately!
        dispatcher.on('error', console.error);
        
        return dispatcher;
    }
}