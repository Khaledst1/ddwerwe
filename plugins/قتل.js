let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`*${toM(a)}, انت قتلت👇🏻 يا لك من سفاح🥺*
*${toM(b)},*ياصديقي*🥺\n\*هذا الشخص قتلك🪚 الله يرحمك*`, null, {
mentions: [a, b]
})}
handler.help = ['formarpareja']
handler.tags = ['main', 'fun']
handler.command = ['قتل','موت']
handler.group = true
export default handler
