const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "💖",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `Hello there ${pushname} MOMO MD User! 👋🏻* 

> Simple , Straight Forward But Loaded With Features 🎊, Meet MOMO MD WhatsApp Bot.


*Thanks for using MOMO MD * 

> Don't forget to fork the repo ⤵️

👨‍💻-: https://github.com/Sudaisz/Momo-md 


> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍomo ᴛᴇᴄʜ*
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/rglenw.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
