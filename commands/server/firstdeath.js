const kd = require('../../models/kd')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'firstdeath',
    aliases: ['fd'],
    description: 'Dùng để kiêm tra lần chết đầu tiên trong server anarchyvn.net',
    usage: '<Tên ingame, Vd: VaitoSoi>',
    run: async(client, message, args) => {
        const user = args[0]
        kd.findOne({ username: user }, async(err, data) => {
            if (err) throw err;
            if (data) {
                if (!data.firstdeath) return message.channel.send('Không tìm thấy dữ liệu')
                message.channel.send({embeds: [new MessageEmbed()
                    .setDescription(data.firstdeath)
                    .setColor('RANDOM')]}
                )
            } else {
                message.channel.send('Không tìm thấy dữ liệu')
            }
        })
    }
}