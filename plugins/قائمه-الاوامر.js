let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: 'مرحبا يا @${taguser} اليك قائمه الاوامر'
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
  header: 'يعطيك قسم اوامر الجروب🗣️',
  title: 'اوامر الجروب👥',
  description: '',
  id: '.المطور'
  },
  {
  header: 'يعطيك قسم اوامر التنزيلات📤',
  title: 'اوامر التنزيلات📤',
  description: '',
  id: '.الاستخدام'
  },
  {
   header: 'يعطيك قسم اوامر الترفيه🛸',
  title: 'اوامر الترفيه🎮',
  description: '',
  id: '.الاستخدام'
  },
   {
    header: 'يعطيك قسم اوامر التحويل🛠️',
  title: 'اوامر التحويل⛏️',
  description: '',
  id: '.الاستخدام'
  },
   {
  header: 'يعطيك قسم اوامر الدين والأسلام👳🏻‍♂️',
  title: 'اوامر الدين📿',
  description: '',
  id: '.بلاغ'
  },
  {
  header: 'يعطيك قسم اوامر المطور⚙️',
  title: 'اوامر المطور🙎🏻',
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
