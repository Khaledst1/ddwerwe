//Copyright ©JOANIMI/KILLUA
//https://whatsapp.com/channel/0029Vab5oDNElagpHtJjmT0B
//بدل رقمي برقمك
let handler = async (m, { conn, text, usedPrefix, command }) => {
let teks = `*❒═[لقد حصل بوت كيلوا على تقييم]═❒*\n\n*❒ الــتـقـــيـم : [ ⭐ ]*\n*❒ بـواسـطـة : [ +${m.sender.split`@`[0]} ]*\n\n*❒══[اتمنى ان يكون قد اعجبك]═══❒*`
conn.reply('967775302218@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
conn.reply('@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, { contextInfo: { mentionedJid: [m.sender] }})
m.reply('*تــم التـقـيــم + ليه كده زعلتني منك 💔😭*\n> اكتب .بلاغ للخطاء🥲')
}
handler.command = /^(قيم١)$/i
export default handler
