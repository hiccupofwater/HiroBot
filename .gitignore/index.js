const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){ 
    bot.user.setGame("Fornite.exe");
    console.log("le bot a bien ete connecte");
});

bot.login("NDM3NDEwMDA2NzIwMTg0MzMx.Db1prw.bbPaZxhFmA-he9W5olgkF_iM-E0");
