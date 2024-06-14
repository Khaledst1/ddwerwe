import moment from 'moment-timezone'

let handler = async (m, { conn }) => {
const fecharya = moment().tz('Asia/Riyadh').format('DD/MM HH:mm')
const fechaper = moment().tz('Africa/Cairo').format('DD/MM HH:mm')
const fechamex = moment().tz('Asia/Aden').format('DD/MM HH:mm')
const fechabol = moment().tz('Asia/Riyadh').format('DD/MM HH:mm')
const fechachi = moment().tz('Asia/Kuwait').format('DD/MM HH:mm')
const fechaarg = moment().tz('Africa/Casablanca').format('DD/MM HH:mm')
const fechacol = moment().tz('Africa/Algiers').format('DD/MM HH:mm')
const fechaecu = moment().tz('Asia/Beirut').format('DD/MM HH:mm')
const fechacosr = moment().tz('Africa/Tripoli').format('DD/MM HH:mm')
const fechacub = moment().tz('Asia/Baghdad').format('DD/MM HH:mm')
const fechagua = moment().tz('Asia/Hebron').format('DD/MM HH:mm')
const fechahon = moment().tz('Asia/Qatar').format('DD/MM HH:mm')
const fechanic = moment().tz('Asia/Dubai').format('DD/MM HH:mm')
const fechauru = moment().tz('Asia/Damascus').format('DD/MM HH:mm')
const fechaven = moment().tz('Asia/Amman').format('DD/MM HH:mm')
const fechapar = moment().tz('Africa/Tunis').format('DD/MM HH:mm')
const fechanew = moment().tz('Asia/Muscat').format('DD/MM HH:mm')
const fechaasi = moment().tz('Africa/Khartoum').format('DD/MM HH:mm')
const fechabra = moment().tz('Africa/Nouakchott').format('DD/MM HH:mm')
await conn.sendMessage(m.chat, { text: `\`\`\`
「 الجدول - الزمني ⏰ 」

⏱️السعودية    : ${fecharya}
⏱️مصر      : ${fechaper}
⏱️البحرين     : ${fechabol}
⏱️الكويت     : ${fechachi}
⏱️المغرب     : ${fechaarg}
⏱️الجزائر     : ${fechacol}
⏱️لبنان       : ${fechaecu}
⏱️اليمن      : ${fechamex}
⏱️ليبيا       : ${fechacosr}
⏱️العراق      : ${fechacub}
⏱️فلسطين     : ${fechagua}
⏱️قطر       : ${fechahon}
⏱️الامارات     : ${fechanic}
⏱️سوريا      : ${fechauru}
⏱️الاردن      : ${fechaven}
⏱️تونس      : ${fechapar}
⏱️عمان      : ${fechanew}
⏱️السودان     : ${fechaasi}
⏱️موريتانيا    :  ${fechabra}
\`\`\`'

${String.fromCharCode(8206).repeat(850)}
المنطقة الزمنية للخادم الحالي:\n[ ${Intl.DateTimeFormat().resolvedOptions().timeZone} ]\n${moment().tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YY HH:mm:ss')}` }, {quoted: m })
}

handler.help = ['horario']
handler.tags = ['info']
handler.command = /^(التوقيت)$/i

export default handler
