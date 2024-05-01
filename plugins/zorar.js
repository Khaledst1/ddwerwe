let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *﹝⟣┈┈┈⟢﹝🍁﹞⟣┈┈┈⟢﹞*\n> *✨اهلا يا عزيزي قائمه اوامر بوت السلطان✨*\n> *▫️اسم البوت: بوت السلطان*\n> *▫️اسم المطور: يـوسـف الـسلطان*\n> *▫️لا تنسي الانضمام الي قناة التحديثات*\n> *▫️https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*\n> *﹝⟣┈┈┈⟢﹝🍁﹞⟣┈┈┈⟢﹞*'
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
  highlight_label: 'بوت السلطان',
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
