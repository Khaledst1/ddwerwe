let handler = m => m
handler.all = async function (m) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^ولا|ولا$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`_*أامـر يـ عـيـونـي 🤭💮✨*_`, `ايـش بـدك 👀♥️✨`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

if (/^haj|jl$/i.test(m.text) ) { //sin prefijo 
    let teks = `
${pickRandom([`_*امممم 😳*_`, `*_انا اكتر 🤭🌸_*`, `*_كسووووف 😳_*`])}
`.trim()
conn.reply(m.chat, teks, m, { mentions: { mentionedJid: [m.sender] }})

}

//if (/^مين المطور|بتاع مين البوت ده|المطور|مين صاحب البوت ده$/i.test(m.text) ) { //sin prefijo 
    conn.reply(m.chat, `╭┅〘 ⚠️ الـمـطـور ⚠️ 〙*
➽🐍 AL SOLTAN
➽⚜️ wa.me/+201277272498
➽💌 Owner Of bot
_*هذا رقم مطوري اذ كنت تريد ان عليك ان تدخل و تكتب رساله بدون ازعاج*_

*╰═┅ৡৢ͜͡✦═╡ *AL SOLTAN* ╞═┅ৡৢ͜͡✦═╯*`, m)

}

/* if (/^hola|halo|hello|hi$/i.test(m.text) ) { //sin prefijo 
     conn.reply(m.chat, `Hola :D`, fkontak, m)

 }*/
 
if (/^مساعده|كيف استخدم البوت|بوت عطلان|ازاي استخدم البوت|ازاي استخدم الاوامر$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::✧ BOT AL SOLTAN 𝑾𝑯𝑨𝑻𝑺𝑨𝑷𝑷::☆
┆——————«•»——————
┆ - اهلا بك في مركز المساعدة
┆ - عليك أن تستخدم الاوامر مع رمز
┆ - مثل : ( . ) او ( # )
┆ - ثم تكتب الأمر مثل *.اوامر*
┆ - يجب أن تتأكد من استخدام الرموز
┆ - و اذا لم يظهر لك رسائل البوت
┆ - استخدم *.مهام* او *.صلح*
┆ - و لاظهار الأمر استخدم*".مهام*
┆ 
┆ 「 BOT AL SOLTAN 」
╰━━━⊰ 𓃠 ${vs} ⊱━━━━დ*`, m) //wm, null, [['Menu', '#menu']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

