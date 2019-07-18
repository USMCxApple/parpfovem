const Discord = require('discord.js-commando');
const bot = new Discord.Client
const TOKEN = 'NTQyODkzNzk3OTU3MzA0MzMw.D1wR5Q.yYT9ZV0PpVMfvAKRsIxx3MxYTCU'

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.reply('Hello, How are you?')
    }
});

bot.on('message', function(message){
    if(message.content == 'rip')
    {
        message.reply('Heck off you fricker')
    }
});

bot.on('message', function(message){
    if(message.content == 'die')
    {
        message.reply('No. Now, go bother somebody else.')
    }
});

bot.on('message', function(message){
    if(message.content == 'good morning')
    {
        message.reply('Good Morning, How are you? I hope you have a wonderful day! :smiley:')
    }
});

bot.on('message', function(message){
    if(message.content == 'goodnight')
    {
        message.reply('Goodnight! See you in the morning! :smiley:')
    }
});

bot.on('message', function(message){
    if(message.content == '☭')
    {
        message.reply('R.I.P SOVIET UNION :sob:')
    }
});

let statuses = ('Hello All!', 'UNDER DEVELOPMENT!');

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("FiveM Community Discord", {type: "PLAYING"});
  
  });


bot.on('ready', function(){
    console.log('ready')
});

bot.login(TOKEN);