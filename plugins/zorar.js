let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '*✨اهلا يا صديق اليك قائمه اوامر بوت السلطان✨*'
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
  title: 'المطور',
  description: '',
  id: '.المطور'
  },
  {
  header: 'خصوصيه استخدام البوت❔❕',
  title: 'الاستخدام',
  description: '',
  id: '.الاستخدام'
  },
  {
  header: 'ابلاغ او ارسال رساله للمطور🗨️',
  title: 'طلب ابلاغ',
  description: '',
  id: '.بلاغ'
  },
  {
  header: 'اوامر البوت',
  title: 'طلب الاوامر',
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
