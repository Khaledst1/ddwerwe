let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '*📖 قائمه اوامر بوت السلطان 📖*'
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
  highlight_label: 'ON',
  rows: [
  {
  header: 'المطور',
  title: '.المطور',
  description: '',
  id: '.المطور'
  },
  {
  header: 'خصوصيه البوت',
  title: '.خصوصيه',
  description: '',
  id: '.السورس'
  },
  {
  header: 'ابلاغ او ارسال رساله للمطور',
  title: '.بلاغ',
  description: '',
  id: 'بلاغ'
  },
  {
  header: 'اوامر',
  title: '.اوامر',
  description: '',
  id: 'menu'
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
