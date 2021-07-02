module.exports = {
    name: 'ban',
    description: 'Ban del server al usuario indicado',
    execute(message, args) {
        let member = message.mentions.members.first();
        if(!member) return message.reply("Please mention a valid member of this server");
        if(!member.kickable) return message.reply("I cannot kick this member!");

        // member.setVoiceChannel(null);
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
        banReason = "None"
        }
        
        member.ban({reason: banReason})
    }
}