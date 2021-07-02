module.exports = {
    name: 'avatar',
    description: 'Responde con tu avatar',
    execute(message, args) {
        // if(!message.mentions.users.size) {
            // return message.reply('No me pasaste un usuario a patear!');
        return message.channel.send(`Your avatar: <${message.author.displayAvatarURL({ format: 'png', dynamic: true })}>`);
        // }
    }
}