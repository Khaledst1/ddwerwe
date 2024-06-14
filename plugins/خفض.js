////مقدمة من قناة https://whatsapp.com/channel/0029Vag9bvrLSmbRE2I5Oj2h
import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, participants }) => {
    let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
    let user = m.mentionedJid && m.mentionedJid[0]

    if (user) {
        await conn.groupParticipantsUpdate(m.chat, [user], 'demote')
        
        // رابط الصورة المراد إرسالها
        let imageUrl = 'https://telegra.ph/file/6c26af671b9d22d85be2b.jpg'
        
        // منشن للشخص الذي قام باستعمال الأمر والشخص الذي تم خفضه من الإشراف
        let replyText = `@${m.sender.split('@')[0]} تم خفض @${user.split('@')[0]} من الإشراف✅`
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, // إضافة الصورة هنا
            caption: replyText, // النص المرافق للصورة
            mentions: [m.sender, user]
        })
    } else {
        m.reply('يرجى الإشارة إلى الشخص الذي تريد خفضه من الإشراف.')
    }
}

handler.help = ['خفض @tag']
handler.tags = ['المجموعات']
handler.command = /^(خفض)$/i

handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
