let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://raw.githubusercontent.com/Khaledst1/-/main/Bot-AlSoltan1.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*· • • ━━ ⌝🐉⌞ ━━ • • ·*
*${command.toUpperCase()}*
*🜋↫╎السـؤال ✍🏻⇜『من الاعب ال بالصورة』*
  *🜋↫╎الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ┇*
  *استخدم .انسحب للأنسحاب*
  *🜋↫╎الـجـائزة💰↞ ${poin} نقاط┇*
∞┇━━━ •🐉• ━━━┇∞
*✠ ~تــ✍︎ــوقــيــع ↯:~*
『بوت السلطان』
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n❐↞┇الاجـابـة✅↞ *${json.name}* ┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['كوره']
handler.tags = ['fun']
handler.command = /^كوره/i

export default handler 
