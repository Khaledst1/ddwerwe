let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> *﹝❒═════﹝🍷﹞═════❒﹞*\n> *مرحبا بك/ي*'
 },
 body: {
 text: '> *﹝❒═════﹝🍷﹞═════❒﹞*\n> *🍷هذه هيا قائمه الاختيارات🍷*\n> *قم بأختيار قسم من القائمه👇🏻*\n> *﹝❒═════﹝🍷﹞═════❒﹞*'
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
  header: 'يعطيك كـل اوامـر الـبوت📃',
  title: ' كـل الاوامـر📃✬⃝',
  description: '',
  id: '.كل-الاوامر'
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
  handler.command = ['مهام','ty','er','youssef','ui','op']

  export default handler
