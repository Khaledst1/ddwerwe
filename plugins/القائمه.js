import fetch from 'node-fetch';


// Para configurar o idioma, na raiz do projeto altere o arquivo config.json
// Para configurar el idioma, en la raíz del proyecto, modifique el archivo config.json.
// To set the language, in the root of the project, modify the config.json file.


const handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu
    // const pp = imagen7;

    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `  ▢ _${usedPrefix}enable *audios*_
  
> *▫️  اسم البوت , بوت السلطان*
> *▫️ حط قبل كل امر  (.)*
> *▫️ اســم الـمطور : يوسف السلطان*
> *▫️اليك القائمه يحب*  ${taguser}
> *▫️هذا البوت صنع بواسطه يوسف السلطان انضم للقناة عبر الواتساب لمعرفه التحديثات القادمه*
> *▫️https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*


> *▫️انستجرام*
> *▫️https://instagram.com/youssef.alsoltan_*

> *• ∙ ∙━━╍━﹝👥﹞━╍━━∙ ∙ •*
> *˼‏👥˹ قـسـم الجروبات╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄* 
> *. لقبني*
> *. لقب*
> *. الالقاب*
> *. طرد*
> *. ضيف*
> *. ترقية*
> *. اعفاء*
> *. تحذير*
> *. حذف_تحذير*
> *. حذف*
> *. منشن*
> *. مخفي*
> *. المشرفين*
> *. لمنشن*
> *. بروفايل*
> *. الجروب*
> *. دعوه*
> *. تغيير_اللينك*
> *. لفل*
> *. جروب*
> *. الترحيب*
> *. المغادره*
> *. ايات*
> *. جروب قفل  فتح*
> *. خط*
> *. توب*
> *. لينك*
> *. يومي*
> *. الماس*
> *. ترتيب_البنك*
> *. شراء*
> *. هجوم*
> *• ∙ ∙━━╍━﹝📿﹞━╍━━∙ ∙ •*
> *˼‏✨˹ قـسـم الديني╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. سورة*
> *. حديث*
> *. قران*
> *. الله*
> *• ∙ ∙━━╍━﹝⚙️﹞━╍━━∙ ∙ •*
> *˼‏🙎🏻˹ قـسـم المطور╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. ضيف_بريميام*
> *. حذف_بريميام*
> *. بان*
> *. الغاء_البان*
> *. اطفاء*
> *. تفعيل*
> *. المبندين*
> *. إعادة*
> *. اعادةتشغيل*
> *. أدخل*
> *. ضيف_اكس_بي*
> *. ضيف_جواهر*
> *• ∙ ∙━━╍━﹝📁﹞━╍━━∙ ∙ •*
> *˼‏📥˹ قـسـم التنزيلات╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. انستغرام*
> *. انستا*
> *. شغل*
> *. تيكتوك*
> *. تويتر*
> *. اغنية*
> *. بحث*
> *. فيديو*
> *. تطبيق*
> *. صوره*
> *• ∙ ∙━━╍━﹝🕹️﹞━╍━━∙ ∙ •*
> *˼‏🎮˹ قـسـم الترفيه╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. اكس او*
> *. ت*
> *. صراحه*
> *. بوت*
> *. ايدت*
> *. فيك*
> *. ميمز*
> *. اختبرني*
> *. تهكير*
> *. لو*
> *. هل*
> *. ترجم*
> *. احزر*
> *. زواج*
> *. انطق*
> *. تاج*
> *. حكمه*
> *. ميمز*
> *. سوال*
> *• ∙ ∙━━╍━﹝💡﹞━╍━━∙ ∙ •*
> *˼‏🛠️˹ قـسـم التحويل╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. ملصق*
> *. جوده*
> *. سرقة*
> *. لفيديو*
> *. لصورة*
> *. لانمي*
> *. تخيل*
> *. مكس*
> *. لجواهر*
> *. ستك*
> *. تلجراف*
> *. لكرتون*
> *. باركود*
> *• ∙ ∙━━╍━﹝🎚️﹞━╍━━∙ ∙ •*
> *˼‏🎹˹ قـسـم الصوتيات╿↶*
> *⋄━───═◞⬪⋇⬪◟═───━⋄*
> *. عميق*
> *. منفوخ*
> *. تخين*
> *. صاخب*
> *. سريع*
> *. تخينن*
> *. رفيع*
> *. روبوت*
> *. بطيء*
> *. ناعم*
> *. سنجاب*

> *⚠️┑━━━ملاحظه━━━┍⚠️*
> *البوت قيد التطوير لذا عندما لا يتسجيب*
> *فأعلم انه يتم اعادة تشغيله لان تم*
> *اضافه بعض الاوامر وشكرا علي استخدامك البوت*
> *⚠️━━━━━━━━━━━━⚠️*

> 👾┑━━━حـقـوق الـمـطـور━━━┍👾
> *❗⇆ معلومات الـمطـور  ↯*
> ❗ده  instagram.com/youssef.alsoltan_
> *❗⇆ رقـم الـمطـور  ↯*
> ❗ده  https://wa.me/+201277272498
> 👾━━━حـقـوق الـمـطـور━━━👾


    let pp
    // Nouvelles images de menu disponibles 
    if (idioma == 'es') {
      pp = global.imagen4
    } else if (idioma == 'pt-br') {
      pp = global.imagen7
    } else if (idioma == 'fr') {
      pp = global.imagen8
    }else if (idioma == 'en') {
      pp = global.imagen9
    } else if (idioma == 'ru') {
      pp = global.imagen10
    } else {
      pp = global.imagen4 // Imagem Default em espanhol
    }

    

    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: m });
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
      conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net') }, { quoted: fkontak2 });
    }
  } catch {
    const datas = global
    const idioma = datas.db.data.users[m.sender].language
    const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
    const tradutor = _translate.plugins.menu_menu

    conn.reply(m.chat, tradutor.texto1[29], m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
