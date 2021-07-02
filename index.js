require('dotenv').config();
const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const ytdl = require('ytdl-core');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}


const prefix = '!';

client.once('ready', () => {
	console.log('Ready!');
    
    
const canales = client.channels.cache;
// canales.forEach(element => {
//     console.log(element);
//         });

// const channel = client.channels.cache.get('734771877091999828');
// const channel = client.channels.cache.get('394303546570440708');

//  console.log(channel);
// console.log('canales:' , client.channels.cache);

// console.log(channel);
// console.log(channel.guild.cache.size());
// ANDA
// console.log(channel.guild.voiceStates.cache.size);

});

client.login(process.env.TOKEN);


let dispatcher = null;

client.on('voiceStateUpdate', async(oldState, newState) => {
    console.log(newState.id);
    console.log('IDCANAL: ', newState.channelID);

    // if(newState.id !=null) {
        
    // }

    if (newState.channelID === null) console.log('user left channel', oldState.channelID);
    else if (oldState.channelID === null) {
        console.log('user joined channel', newState.channelID) ;
        client.commands.get('playGera').execute(client);
    }
    else console.log('user moved channels', oldState.channelID, newState.channelID);
});

client.on('message', message => {

    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'info') {
        return message.reply(client.commands.map(c=>{
            return '!'+c.name + ':' + c.description + '\n'
        }))
        // return message.reply(`Comandos posibles \n ${client.commands.map(c => {return '!'+c.name.toString()+ ' : '+ c.description.toString()+'\n'})}` )
    }

    if(command === 'play') {
        dispatcher = client.commands.get(command).execute(message, args);
        return;
    }

    if(command === 'youtube') {
        dispatcher = client.commands.get(command).execute(message, args);
        
    }

    if(command === 'stop') {
        console.log('dispatcher: ',dispatcher);
        dispatcher.pause();
        return;
    }

    if(command === 'resume') {
        console.log('dispatcher: ',dispatcher);
        dispatcher.resume();
        return;
    }


    if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Hubo un error con este comando!');
	}

    // Valido que sea un comando válido
    // if (!comandos.some(e => e.comando === command)) {
    //    return message.reply(`Comando no soportado \n ${comandos.map(c => {return '!'+c.comando.toString()+ ' : '+ c.info.toString()+'\n'})}` )
    //   }

    // console.log(args, 'args');
    // console.log(command, 'command');


});