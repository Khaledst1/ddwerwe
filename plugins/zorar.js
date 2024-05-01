let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '*⛩️ قائمة الأوامر ⛩️*'
 },
 body: {
 text: '*افتح القائمة بواسطه الزر🔘*'
  },
  nativeFlowMessage: {
  buttons: [
  {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '⛩️ القائمة ⛩️',
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
  header: 'السورس',
  title: '.السورس',
  description: '',
  id: '.السورس'
  },
  {
  header: 'كونان',
  title: '.كونان',
  description: '',
  id: 'كونان'
  },
  {
  header: 'اوامر',
  title: '.اوامر',
  description: '',
  id: 'اوامر'
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
