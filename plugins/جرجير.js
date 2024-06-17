/*
طبعا كل امر سويه فملف

ادخل القناة للإستفادة من أوامر اخرى :

https://whatsapp.com/channel/0029VaGPfAx17En4dklujt3n 

coding by BK9 <3 for free, Enjoy.
*/




//=============================================================>

//chatgpt:

import fetch from 'node-fetch';
const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    throw `قم بكتابة سؤالك\n\nمثال . .جرجيرر كيف حالك`;
  }
  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const BK9api = `https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`;
    const BK99 = await fetch(BK9api);
    const BK8 = await BK99.json();
    if (BK8.status && BK8.BK9) {
      const respuestaAPI = BK8.BK9;
      conn.reply(m.chat, respuestaAPI, m);
    } else {
      throw "حدث خطأ أثناء معالجة طلبك.";
    }
  } catch (error) {
    throw "حدث خطأ أثناء معالجة طلبك.";
  }
};

handler.command = /^(جرجيرر)$/i;
handler.tags = ['ai'];

export default handler;

//=============================================================>

//GeminiImg:

import fetch from 'node-fetch'
import uploader from '../lib/uploadImage.js'

var handler = async (m, { conn, text, command, usedPrefix }) => {
let BK7 = m.quoted ? m.quoted : m
let BK8 = (BK7.msg || BK7).mimetype || BK7.mediaType || ''
if (/image/g.test(BK8) && !/webp/g.test(BK8)) {
let BK0 = await BK7.download()

let BK9img = await (uploader)(BK0)
let BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json()
conn.sendMessage(m.chat, { text: BK9api.BK9 }, { quoted: m })
} else throw `قم بالرد على صورة واكتب سؤالك\n\nمثال : .جرجير من هذا ( لا تنسى ترد على صورة )`
}
handler.tags = ['ai']
handler.command = /^(جرجير)$/i;

handler.limit = true

export default handler


//=============================================================>

//Chatgpt & GeminiImg:

import fetch from 'node-fetch';
import uploader from '../lib/uploadImage.js';

const handler = async (m, { conn, text, command, usedPrefix }) => {
    try {
        if (!text) {
            throw `قم بكتابة سؤالك\n\nمثال . .جرجيرر كيف حالك`;
        }

        let BK9api, BK9img;
        if (m.quoted && /image/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '') && !/webp/g.test((m.quoted.msg || m.quoted).mimetype || m.quoted.mediaType || '')) {
            let BK0 = await m.quoted.download();
            BK9img = await uploader(BK0);
            BK9api = await (await fetch(`https://api.bk9.site/ai/geminiimg?url=${BK9img}&q=${text}`)).json();
        } else {
            BK9api = await (await fetch(`https://api.bk9.site/ai/chatgpt?q=${encodeURIComponent(text)}`)).json();
        }

        if (BK9api.status && BK9api.BK9) {
            const respuestaAPI = BK9api.BK9;
            conn.reply(m.chat, respuestaAPI, m);
        } else {
            throw "حدث خطأ أثناء معالجة طلبك.";
        }
    } catch (error) {
        if (typeof error === 'string') throw error;
        throw `حدث خطأ أثناء معالجة طلبك.`;
    }
};

handler.help = ['جرجير'];
handler.tags = ['ai'];
handler.command = /^(bk9)$/i;

export default handler;

//=============================================================>

//Shortner link:

import fetch from 'node-fetch'; 

let handler = async function (m, { text }) {
  try {
    if (!text) {
      m.reply(`لو تبغاه بدون تخصيص سوي : 
. اختصار وحط رابط
مثال : 
.اختصار https://bk9.site/ 
لو تبغاه بتخصيص سوي : 
.اختصار حط رابط + كلمة
مثال : 
.اختصار https://bk9.site/ + قروب_الملصقات`);
      return;
    }
    const [link, alias] = text.split("+").map(part => part.trim());
    let apiUrl = `https://bk9.site/api/create?url=${encodeURIComponent(link)}`;
    if (alias) apiUrl += `&alias=${encodeURIComponent(alias)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.BK99) {
      return m.reply("هذا التخصيص مأخوذ، جرب اخر.");
    }
    const shortURL = data.BK9;
    return m.reply(`֎╎تـم  اخـتـصـار  رابـطـك ${alias ? ' مع التخصيص ب "' + alias + '"' : ''}:\n\n${shortURL}`);
  } catch (error) {
    console.error(error);
    return m.reply('خطأ');
  }
};

handler.command = ['اختصار'];
handler.tags = ['اختصار'];
export default handler;

//=============================================================>

//API Vids:
const handler = async (m, { conn }) => {
  try {
      const videoLink = "https://api.bk9.site/Islam/quranvid";
      const videoFileName = "video.mp4";
      await conn.sendMessage(m.chat, { video: { url: videoLink }, fileName: videoFileName, mimetype: 'video/mp4', caption: 'bk9' }, { quoted: m });
  } catch (error) {
      console.error(error);
      throw "فشل في إرسال الفيديو.";
  }
};

handler.tags = ['islam'];
handler.command = /^(فدين)$/i;

export default handler;

//=============================================================>

//API Imgs:

const handler = async (m, { conn }) => {
  try {
      const photoLink = "https://api.bk9.site/Islam/hadith";
      const photoFileName = "photo.jpg"; 
      await conn.sendMessage(m.chat, { image: { url: photoLink }, fileName: photoFileName, mimetype: 'image/jpeg', caption: 'bk9' }, { quoted: m });
  } catch (error) {
      console.error(error);
      throw "فشل في إرسال الصورة.";
  }
};

handler.tags = ['islam'];
handler.command = /^(صدين)$/i;

export default handler;

/*
هذه بعض الأمثلة لاستخدام موقعي :

https://api.bk9.site

الان فقط غير الروابط وسوي اوامر لكل المتوفر في موقعي

*/
