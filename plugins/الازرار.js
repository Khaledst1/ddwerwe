let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *﹝⟣┈┈┈⟢﹝🍷﹞⟣┈┈┈⟢﹞*\n> *مرحبا ياعزيزي*'
 },
 body: {
 text: '> *﹝⟣┈┈┈⟢﹝🍷﹞⟣┈┈┈⟢﹞*\n> *🍷هذه هيا قائمه الاختيارات🍷*\n> *قم بأختيار قسم من القائمه👇🏻*\n> *﹝⟣┈┈┈⟢﹝🍷﹞⟣┈┈┈⟢﹞*'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '💫 اخـتر القـسـم 💫',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: 'بوت السلطان',
  rows: [
  {
  header: 'يعطيك قسم اوامر الاعضاء🗣️',
  title: 'قـسـم الاعضاء👥✬⃝',
  description: '',
  id: '.م1'
  },
  {
  header: 'يعطيك قسم اوامر المطور📤',
  title: 'قـسـم الـمطـور 📥✬⃝',
  description: '',
  id: '.م2'
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
  title: ' قـسـم الـمـطور🙎🏻',
  description: '',
  id: '.قسم-المطور'
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

  handler.help = ['مهام']
  handler.tags = ['main']
  handler.command = ['مهام','ty','er','youssef','ui','op']

  export default handler
