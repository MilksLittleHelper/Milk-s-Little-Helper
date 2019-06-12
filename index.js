const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTg2OTExNjUzMTk5NzQwOTMz.XPu6kw.a82Td3ncYlwy2sQlczfXwLKk2Sg';

const PREFIX = '!';


bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message=>{
Discord.MessageMentions.USERS_PATTERN.lastIndex = 0 // reset regex
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'creator':
            message.reply('Ya boi Vert was the creator :)')
            break;
        case 'problem':
            if (Discord.MessageMentions.USERS_PATTERN.test(args[1])){
                message.channel.send('That sounds like a you problem, ' + args[1]);
            }else{
                message.channel.send('Invalid Args')
            }
        break;
    }
})

bot.on('message', (message) => {
    if(message.content.includes('sorry')) {
        message.reply('"No forgiveness!" -Milk');
    }
})

bot.login(token);
