let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}//غير ڤينوم و حط اسم بوتك
let pesan = args.join` `
let oi = `*🍷⇒الرساله:* ${pesan}`
let teks = `*منشن『🍷』جماعي* \n\n ${oi}\n\n*¦🍷القروب :⇣*\n`
for (let mem of participants) {
teks += `*🍷* @${mem.id.split('@')[0]}\n`}
teks += `*𝑃𝑇ـ𝑃𝐴𝑇𝐶𝐻𝐸𝑅𝐴ـ𝐵𝛩𝑇*\n\n*﹝❒═════﹝🍷﹞═════❒﹞*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
