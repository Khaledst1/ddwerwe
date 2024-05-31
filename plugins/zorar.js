let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *﹝❒═════﹝🍷﹞═════❒﹞*\n> *🍷اهلا يا عزيزي قائمه اوامر بوت باتشيرا🍷*\n> *▫️اسم البوت: بوت باتشيرا*\n> *▫️اسم المطور: ابوهايف:♡*\n> *▫️لا تنسي الانضمام الي قناة التحديثات*\n> *▫️https://whatsapp.com/channel/0029VafG0N8I1rclRCFLaL0g*\n> *﹝❒═════﹝🍷﹞═════❒﹞*'
 },
 body: {
 text: '> *افتح القائمة بواسطه الزر🔘*'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '📝 القائمة 📝',
  sections: [
  {
  title: '✨قائمة الأوامر✨',
  highlight_label: 'بوت باتشيرا',
  rows: [
  {
  header: 'صانع البوت👤',
  title: 'الـمطور👾',
  description: '',
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
  header: 'اوامر البوت🔖',
  title: 'طـلـب الاوامـر📑',
  description: '',
  id: '.مهام'
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
  }, {})

  }

  handler.help = ['info']
  handler.tags = ['main']
  handler.command = ['أوامر','اوامر','الاوامر','ألاوامر','menu','Menu']

  export default handler
