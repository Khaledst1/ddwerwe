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
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '🍷اخـتر القـسـم🍷',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: 'بوت باتشيرا',
  rows: [
  {
  header: 'يعطيك قسم اوامر الجروب🗣️',
  title: 'قـسـم الجـروبـات👥✬⃝',
  description: '',
  id: '.قسم-الجروبات'
  },
  {
  header: 'يعطيك قسم اوامر التنزيلات📤',
  title: 'قـسـم الـتنـزيلات📥✬⃝',
  description: '',
  id: '.قسم-التنزيلات'
  },
  {
   header: 'يعطيك قسم اوامر الترفيه🛸',
  title: 'قـسـم الـتـرفيـه🎮✬⃝',
  description: '',
  id: '.قسم-الترفيه'
  },
  {
    header: 'يعطيك قسم اوامر التحويل🛠️',
  title: 'قـسـم الـتحـويل🛠️✬⃝',
  description: '',
  id: '.قسم-التحويل'
  },
  {
  header: 'يعطيك قسم اوامر الدين والأسلام👳🏻‍♂️',
  title: 'قـسـم الـديـني✨✬⃝',
  description: '',
  id: '.قسم-ديني'
  },
  {
  header: 'يعطيك قسم اوامر المطور⚙️',
  title: ' قـسـم الـمـطور🙎🏻✬⃝',
  description: '',
  id: '.قسم-المطور'
  },
   {
    header: 'يعطيك قسم اوامر الألقاب🖊️',
  title: ' قـسـم الألقاب📕✬⃝',
  description: '',
  id: '.القاب-الاعضاء'
  },
   {
  header: 'يعطيك قـسم كل الاوامر🍷⃝',
  title: 'كل-الاوامر🍷⃝',
  description: '',
  id: '.كل-الاوامر'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }, 
  {
                                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "قنـاة الـواتـساب📣",
                  url: "https://whatsapp.com/channel/0029VafG0N8I1rclRCFLaL0g",
                  merchant_url: "https://whatsapp.com/channel/0029VafG0N8I1rclRCFLaL0g"
                })
              },
              // Adding new button here
              {
                name: "cta_url",
                buttonParamsJson: JSON.stringify({
                  display_text: "مشاهده البوت🎦",
                  url: "https://youtu.be/-XdmFcY3zQI?si=bzJfbQGwjUk-4rZO",
                  merchant_url: "https://youtu.be/-XdmFcY3zQI?si=bzJfbQGwjUk-4rZO"
                })
              },
              // Adding new single_select option here
              {
                name: 'single_select',
                buttonParamsJson: JSON.stringify({
                  title: '🔎معلومات البوت🔎',
                  sections: [
                    {
                      title: '📜معلومات عن البوت📜',
                      highlight_label: 'ابوهايف:♡',
                      rows: [
                        {
                          header: 'صانع البوت👤',
                          title: 'الـمطور👾',
                          description: 'ابوهايف:♡',
                          id: '.المطور'
                         },
                        {
                         header: 'خصوصيه استخدام البوت❔❕',
                          title: 'الاسـتخدام📜',
                          description: '',
                          id: '.الاستخدام'
                        },
                       {
                          header: 'ابلاغ او ارسال رساله للمطور💭',
                          title: 'طـلـب ابـلاغ📨',
                          description: '',
                          id: '.بلاغ'
                        },
                        {
                          header: '🍷لتقييم البوت🍷',
                          title: '♡تقييم البوت♡',
                          description: '',
                          id: '.تقيم'
                        }
                      ]
                    }
                  ]
                }),
                messageParamsJson: ''
              }
            ]
          }
        }
      }
    }
  }, {});
}

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['أوامر', 'اوامر', 'الاوامر', 'امر', 'menu', 'Menu'];

export default handler;
