import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    if (device !== 'desktop' && device !== 'web') {      
        const joanimiimg = await prepareWAMessageMedia({ image: { url: 'https://telegra.ph/file/7f8ec545db73c533a28f9.jpg' } }, { upload: conn.waUploadToServer });

        const interactiveMessage = {
            body: { text: 'اختبار'.trim() },
            footer: { text: '©JoAnimi لاختبار'.trim() },  
            header: {
                title: `مرحبا @${mentionId.split('@')[0]}`,
                subtitle: 'بوت ويليام',
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'اختيار_واحد',
                        buttonParamsJson: JSON.stringify({
                            title: 'اضغط هنا',
                            sections: [
                                {
                                    title: 'قائمة',
                                    highlight_label: 'تشغيل',
                                    rows: [
                                        {
                                            header: 'اختبار',
                                            title: 'اضغط هنا',
                                            description: 'اضغط هنا',
                                            id: 'اختبار'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'تشغيل',
                                    rows: [
                                        {
                                            header: 'اختبار',
                                            title: 'اضغط هنا',
                                            description: 'اضغط هنا',
                                            id: 'تجربة'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'تشغيل',
                                    rows: [
                                        {
                                            header: 'اختبار',
                                            title: 'اضغط هنا',
                                            description: 'اضغط هنا',
                                            id: 'تجربة_أخرى'
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    {
                        name: 'رد_سريع',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'رد سريع',
                            id: 'رسالة'
                        })
                    },
                    {
                        name: 'رابط_للزيارة',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'رابط',
                            url: 'https://www.google.com',
                            merchant_url: ''
                        })
                    },
                    {
                        name: 'اتصال',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'اتصال',
                            id: 'رسالة'
                        })
                    },
                    {
                        name: 'نسخ',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'نسخ',
                            id: '123456789',
                            copy_code: 'رسالة'
                        })
                    },
                    {
                        name: 'تذكير',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'تذكير',
                            id: 'رسالة'
                        })
                    },
                    {
                        name: 'إلغاء_التذكير',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'إلغاء التذكير',
                            id: 'رسالة'
                        })
                    },
                    {
                        name: 'رسالة_عنوان',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'رسالة عنوان',
                            id: 'رسالة'
                        })
                    },
                    {
                        name: 'إرسال_موقع',
                        buttonParamsJson: JSON.stringify({})
                    }
                ],
                messageParamsJson: {}
            }
        };

        const msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });

        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};

handler.help = ['صورة_زر'];
handler.tags = ['اختبار'];
handler.command = /^(صورة_زر)$/i;

export default handler;
