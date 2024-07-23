import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    try {
        const device = await getDevice(m.key.id);
        const mentionId = m.key.participant || m.key.remoteJid;

        if (device !== 'desktop' && device !== 'web') { // Changed || to &&
            m.react('🗃️');

            // Prepare video message
            var joanimiVideo = await prepareWAMessageMedia({ video: { url: 'https://telegra.ph/file/f91e49e29a58a7a98e365.jpg' } }, { upload: conn.waUploadToServer });

            // Get current date and time
            const currentDate = new Date().toLocaleDateString('en-US');
            const currentTime = new Date().toLocaleTimeString('en-US');

            // Construct interactive message
            const interactiveMessage = {
                body: { text: '' }, // Adjust as needed
                footer: { text: `*𝑀𝑉𝑅𝛩-𝐵𝛩𝑇-𝑀𝐷*` },
                header: {
                    title: `*┏╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┓*\n\n*◞❐نورت يا حب بوت مارو✨🫦*\n\n*◞❐ تفضل القائمة يا  :* @${mentionId.split('@')[0]}\n\n*◞❐اسم البوت : بوت مـارو*\n\n*◞❐موقع التنصيب : heroku*\n\n*◞❐البوت يعمل في الخاص والجروبات*\n\n*◞❐يمنع شتم البوت*\n\n*┗╼╃✦⊰⟦𝙼𝚅𝚁𝙾-𝙱𝙾𝚃⟧⊱✦╄╾┛*`,
                    subtitle: `Date: ${currentDate}\nTime: ${currentTime}`, // Display current date and time
                    hasMediaAttachment: true,
                    videoMessage: joanimiVideo.videoMessage,
                },
                nativeFlowMessage: {
                    buttons: [
                        {
                            name: 'single_select',
                            buttonParamsJson: JSON.stringify({
                                title: '【..≼قـائـمـة الاوامـر≽..】',
                                sections: [
                                    {
                                        title: 'List',
                                        highlight_label: '',
                                        rows: [
                                            {
                                                header: '【..≼قــســم الجروبات≽..】',
                                                title: '𝙼𝚅𝚁𝙾-𝙱𝙾𝚃',
                                                description: '【..≼قــســم الجروبات≽..】',
                                                id: '.قسم-الجروبات'
                            })
                        },
                        {
                            name: '【التنزيلات】',
                            buttonParamsJson: JSON.stringify({
                                display_text: '【..≼لـسـا بـفـكـر≽..】',
                                id: `【.قسم-التنزيلات】`
                            })
                        },
                        {
                            name: 'cta_url',
                            buttonParamsJson: JSON.stringify({
                                display_text: '【..≼لـيـنـكـاتـي≽..】',
                                url: 'https://atom.bio/m_vro1',
                                merchant_url: ''
                            })
                        }
                    ],
                    messageParamsJson: ''
                }
            };

            // Generate WhatsApp message
            let msg = generateWAMessageFromContent(m.chat, {
                viewOnceMessage: {
                    message: {
                        interactiveMessage,
                    },
                },
            }, { userJid: conn.user.jid, quoted: m });

            // Add mentionedJid to contextInfo
            msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };

            // Relay the message
            conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });
        } else {
            conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);
        }
    } catch (error) {
        console.error('Error in handler:', error);
    }
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(اوامر|الاوامر|أوامر|الأوامر|menu|menú|memu|memú|help)$/i;
export default handler;
