let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '*▫️اهلا, ${taguser}* *▫️📆تاريخ:* ${date} *▫️🕛وقت نشط:* ${uptime}*▫️رقم اصدار البوت: v1* *▫️🎟️بريم:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''} *▫️  اسم البوت , بوت السلطان**▫️ حط قبل كل امر  ( . )**▫️ اســم الـمطور : يوسف السلطان* *▫️اليك القائمه يحب*  ${taguser}'
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
