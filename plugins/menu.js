import fetch from 'node-fetch';




const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.menu_audios

  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` *『إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا』*
*⟣┈اهلا, ${taguser}*

*⟣┈📆تاريخ:* ${date}
*⟣┈🕛وقت نشط:* ${uptime}
*⟣┈رقم اصدار البوت: v1*
*⟣┈『اسم البوت باتشيرا』*
*⟣┈حط قبل كل امر  ( . )*
*⟣┈اســم الـمطور : ابوهايف:♡*
*⟣┈اليك القائمه يحب*  ${taguser}

*⟣┈اذا كان يوجد اي خطا وتريد ابلاغ المطور استخدم امر*

> ﹝ . *بلاغ* ﹞

*﹝❒═════﹝👥﹞═════❒﹞*
❍↜ *قـسـم الجـروبـات* 👥✬⃝
*﹝❒═════﹝🍷﹞═════❒﹞*
> *. القاب-الاعضاء*
> *. طرد*
> *. طرد-الكل*
> *. ضيف*
> *. ترقيه*
> *. اعفاء*
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
> *. جروب قفل*
> *. جروب فتح*
> *. خط*
> *. توب*
> *. لينك*
> *. يومي*
> *. الماس*
> *. ترتيب_البنك*
> *. شراء*
> *. هجوم*
> *. التوقيت*
*﹝❒═════﹝📿﹞═════❒﹞*
❍↜ *قـسـم الـديـني* 🍷✬⃝
*﹝❒═════﹝🍷﹞═════❒﹞*
> *. آيه*
> *. حديث*
> *. دين*
> *. قران*
> *. سوره*
> *. تلاوة*
> *. الله*
*﹝❒═════﹝⚙️﹞═════❒﹞*
❍↜ *قـسـم الـمـطور* 🙎🏻✬⃝
*﹝❒═════﹝🍷﹞═════❒﹞*
> *. ضيف_بريميام*
> *. حذف_بريميام*
> *. بان*
> *. الغاء_البان*
> *. اطفاء*
> *. تفعيل*
> *. المبندين*
> *. إعادة*
> *. اعادةتشغيل*
> *. انضم*
> *. ضيف_اكس_بي*
> *. ضيف_جواهر*
*﹝❒═════﹝📁﹞═════❒﹞*
❍↜ *قـسـم الـتنـزيلات و البحـث* 📥✬⃝
*﹝❒═════﹝🍷﹞═════❒﹞*
> *. انستغرام*
> *. انستا*
> *. خلفيات*
> *. تيكتوك*
> *. كلمات-اغنيه*
> *. تيك*
> *. شغل*
> *. تيكتوك*
> *. تويتر*
> *. بحث*
> *. فيديو*
> *. تطبيق*
> *. صوره*
*﹝❒═════﹝🕹️﹞═════❒﹞*
❍↜ *قـسـم الـتـرفيـه*🎮✬⃝
❍↜ *يـدعـم الجـروبـات*
*﹝❒═════﹝🍷﹞═════❒﹞*
> *.اكس*
> *.جنية ملك او كتابة*
> *.سلم_وثعبان*
> *.تحدي*
> *.لعبة*
> *.صراحه*
> *.عمري*
> *.موت*
> *.وفاتي*
> *.بوت*
> *.باتشيرا*
> *.دحيح*
> *.قتل*
> *.فزوره*
> *.تطقيم*
> *.ايدت*
> *.فكك*
> *.علم*
> *.اسئلني*
> *.رياضه*
> *.سيلفي*
> *.خمن*
> *.شخصيه*
> *.فيك*
> *.ميمز*
> *.اختبرني*
> *.خروف*
> *.احزر*
> *.حرب*
> *.اتحداك*
> *.عين*
> *.قلب*
> *.تهكير*
> *.لو*
> *.ايموجي*
> *.صداقه*
> *.بيحبني*
> *.بيكرهني*
> *.حب*
> *.حساب*
> *.هل*
> *.رتب*
> *.ترجم*
> *.اقتباس*
> *.زواج*
> *.انطق*
> *.تاج*
> *.حكمه*
> *.سؤال*
> *.متفجرات*
> *.غزة*
*﹝❒═════﹝🍷﹞═════❒﹞*
❍↜ *قـسـم الـتحـويل* 🛠️✬⃝
*﹝❒═════﹝🍷﹞═════❒﹞*
> *. ملصق*
> *. تخيل*
> *. اتتب*
> *. التعرف*
> *. صورهai*
> *. مطلوب*
> *. رابطي*
> *. جوده*
> *. سرقة*
> *. تصميم*
> *. لوجو-ناروتو*
> *. لفيديو*
> *. لصورة*
> *. لانمي*
> *. تخيل*
> *. مكس*
> *. لجواهر*
> *. ستك*
> *. تليجراف*
> *. لكرتون*
> *. باركود*
🍷┑━━━حـقـوق الـمـطـور━━━┍🍷
> *❗⇆ معلومات الـمطـور  ↯*
> رقم المطور https://wa.me/+967775302218 
*﹝❒═════﹝🍷﹞═════❒﹞`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, tradutor.texto2, m);
  }
};
handler.command = /^(كل-الاوامر|keyaudio|krk|jrn|jdj|bjjk|jdkn|memuaudio|audios|keyaudio|keyaudios)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
  }
