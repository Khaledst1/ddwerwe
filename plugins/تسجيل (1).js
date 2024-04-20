//import db from '../lib/database.js'

import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
  let user = global.db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `✳️ انت مسجل مسبقا\n\n هل تريد إعادة التسجيل؟ ?\n\n 📌 استخدم هذا الأمر لإزالة السجل الخاص بك \n*${usedPrefix}unreg* <ارمز التحقق الخاص بك>`
  if (!Reg.test(text)) throw `⚠️ استخدام خاطئ دعني اوضح لك\n\n ✳️ مثال: *${usedPrefix + command} اسمك.عمرك*\n📌مثال : *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw '✳️ لا يمكن أن يكون الاسم فارغًا'
  if (!age) throw '✳️ لا يمكن أن يكون العمر فارغًا'
  if (name.length >= 30) throw '✳️اسم طويل جدا' 
  age = parseInt(age)
  if (age > 50) throw '👴🏻 يعم روح موت احسن '
  if (age < 5) throw '🚼  خلصت رضاعه يا بيبي '
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
┌─「 *تسجيل ناجح✅* 」─
▢ *الاسم:* ${name}
▢ *العمر* : ${age} years
▢ *رمز التحقق الخاص بك* :
${sn}
└──────────────

 *.اوامر* لعرض القائمة
`.trim())
}
handler.help = ['تسجيل'].map(v => v + ' <الاسم.العمر>')
handler.tags = ['الاعضاء']

handler.command = ['verify', 'reg', 'register', 'registrar','تسجيل'] 

export default handler
