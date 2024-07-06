import { generateWAMessageFromContent } from '@whiskeysockets/baileys'
import uploadFile from '../lib/uploadFile.js'

let handler = async (m, { conn, text, participants }) => {
    // Extract user IDs and decode them
    let users = participants.map(u => conn.decodeJid(u.id))

    // Handle quoted message if present
    let q = m.quoted ? m.quoted : m
    let c = m.quoted ? await m.getQuotedObj() : m
    let messageType = m.quoted ? q.mtype : 'extendedTextMessage'
    let messageContent = m.quoted ? c.message[q.mtype] ?? {} : { text: c }

    // Determine the sender
    let who = m.quoted ? m.quoted.sender : m.mentionedJid[0] || m.fromMe ? conn.user.jid : m.sender

    // Validate user in the database
    if (!(who in global.db.data.users)) throw `✳️ لم يتم العثور على المستخدم في قاعدة البيانات`

    // Retrieve the user's name
    let { name } = global.db.data.users[who]

    // Create a fake contact message
    global.Zoro = {
        key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            remoteJid: 'status@broadcast'
        },
        message: {
            contactMessage: {
                displayName: `${name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${m.sender.split('@')[0]}\nEND:VCARD`
            }
        }
    }

    // Ensure text is not empty
    let finalText = text || q.text

    // Handle media messages
    if (messageType === 'imageMessage' || messageType === 'videoMessage') {
        let media = await q.download()
        let link = await uploadFile(media)
        await conn.sendMessage(
            m.chat,
            {
                [messageType === 'imageMessage' ? 'image' : 'video']: { url: link },
                caption: finalText,
                contextInfo: {
                    mentionedJid: users,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VaL2bnW0rGiPZq8B5S2M@newsletter',
                        newsletterName: global.author,
                        serverMessageId: -1
                    }
                }
            },
            { quoted: global.Zoro }
        )
    } else {
        // Handle text messages
        await conn.sendMessage(
            m.chat,
            { 
                text: finalText,
                contextInfo: {
                    mentionedJid: users,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '0029VaL2bnW0rGiPZq8B5S2M@newsletter',
                        newsletterName: global.author,
                        serverMessageId: -1
                    }
                }
            },
            { quoted: global.Zoro }
        )
    }
}

handler.help = ['مخفي']
handler.tags = ['group']
handler.command = /^(مخفي|وهمي)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler
