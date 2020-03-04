const Discord = require("discord.js");

require("dotenv").config();

const client = new Discord.Client();

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", message => {
  if (/^на дабл/i.test(message.content)) {
    message.channel.send(
      `${message.member.displayName}, **${Math.floor(Math.random() * 100) +
        1}**`
    );
  }
});

client.login(process.env.TOKEN);
