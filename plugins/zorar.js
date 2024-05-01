let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '*اهلا ${taguser} اليك قائمه اوامر بوت السلطان*'
 },
 body: {
 text: '*افتح القائمة بواسطه الزر🔘*'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '📝 القائمة 📝',
  sections: [
  {
  title: 'قائمة الأوامر',
  highlight_label: 'بوت السلطان',
  rows: [
  {
  header: 'المطور',
  title: 'المطور',
  description: '',
  id: '.المطور'
  },
  {
  header: 'خصوصيه البوت',
  title: 'الاستخدام',
  description: '',
  id: '.الاستخدام'
  },
  {
  header: 'ابلاغ او ارسال رساله للمطور',
  title: '.بلاغ',
  description: '',
  id: '.بلاغ'
  },
  {
  header: 'اوامر البوت',
  title: 'طلب الاوامر',
  description: '',
  id: '.الاوامر'
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
  handler.command = ['الازرار']

  export default handler
