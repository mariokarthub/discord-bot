const http = require('http');
const express = require('express');
const app = express();
require('dotenv').config();

function checkHttps(req, res, next){
  // protocol check, if http, redirect to https  
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.all('*', checkHttps);

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

// BOT
const Discord = require('discord.js');
//const richEmbed = require('discord.js');
const client = new Discord.Client();
//const guild = new Discord.Guild();
const config = require("./config.json");

let prefix = process.env.PREFIX;

client.on('ready', () => {
  console.log('MKHub-bot');
});

client.login(process.env.TOKEN);