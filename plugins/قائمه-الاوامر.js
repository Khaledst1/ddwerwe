let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: 'مرحبا يا @user اليك قائمه الاوامر'
 },
 body: {
 text: '*قم بأختيار قسم الاوامر👇🏻*'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '💫 ألاقسام 💫',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: 'بوت السلطان',
  rows: [
  {
  header: 'قسم التنزيلات📥',
  title: 'اوامر التنزيلات',
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
  handler.command = ['qw','ty','er','youssef','ui','op']

  export default handler
