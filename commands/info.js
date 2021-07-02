const fs = require('fs');

module.exports = {
    name: 'info',
    description: 'Info de comandos',
    execute(message, args) {
            const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
            console.log('si');

            for (const file of commandFiles) {
                console.log(file);
                const command = require(`./commands/${file}`);
                client.commands.set(command.name, command);
            }
            console.log('si2');
            console.log(client.commands);
        }
    }