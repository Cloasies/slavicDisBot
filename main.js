const Discord = require('discord.js')
const client = new Discord.Client()
const Serbian = require('./src/translationLogic')
const Token = require('./config.json')

// Serbian.translate('hello').then(res => console.log(res))
client.on('ready', () => {
    console.log(`Logged in, user: ${client.user.username} `)
    client.user.setActivity("Prefix: >"); 

} )

client.on('message', msg => {
    const messageContent = msg.content
    const command = messageContent.split(' ')[0].toLowerCase()
    if (command === "<repeat") {
    msg.reply(msg)
    }
})

client.on('message', msg => {
    const messageContent = msg.content
    const messageArray = messageContent.split(' ')
    const [ command, ...serbianText ] = messageArray; 

    if (command.toLowerCase() === ">fromserbian") {
        const serbianSentence = serbianText.join(' ')

    Serbian.translate(serbianSentence,'sr', 'en').then(translatedTxt => {
        msg.reply(`Translation: ${translatedTxt.en}`)
        console.log(serbianText)
        console.log(translatedTxt)
    })
    }
})

client.on('message', msg => {
    const messageContent = msg.content
    const messageArray = messageContent.split(' ')
    const [ command, ...serbianText ] = messageArray; 

    if (command.toLowerCase() === ">toserbian") {
        const serbianSentence = serbianText.join(' ')

    Serbian.translate(serbianSentence, 'en', 'sr').then(translatedTxt => {
        msg.reply(`Translation: ${translatedTxt.sr}`)
        console.log(serbianText)
        console.log(translatedTxt)
    })
    }
})

client.on('message', msg => {
    if (msg.content.split(' ')[0].toLowerCase() === ">help") {

        msg.reply("debil. this is serbian bot, no fancy help or anything >:[ you can use >fromserbian and put serbian that's it bye >:[")
    }
})

client.login(Token.config.token)