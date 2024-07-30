import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw '*عيون سيلفي وش السالفة*';
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react('⏳'); // مؤشر الحالة "جار الكتابة"
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/9ea7c13e92000839267ab.jpg' },
      caption: 'جار الكتابة....'
    }, { quoted: m });

    conn.sendPresenceUpdate('composing', m.chat);

    const prompt = encodeURIComponent(text);
    const guru1 = `${gurubot}/chatgpt?text=${prompt}&lang=ar`;

    let response = await fetch(guru1);
    let data = await response.json();
    let result = data.result;

    if (!result) {
      throw new Error('حدث خطأ');
    }

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key,
        type: 14,
        editedMessage: {
          imageMessage: { caption: result }
        }
      }
    }, {});

    m.react('✅'); // مؤشر الحالة "تم"
  } catch (error) {
    console.error('خطأ:', error);

    try {
      const prompt = encodeURIComponent(text);
      const guru2 = `https://ultimetron.guruapi.tech/gpt3?prompt=${prompt}`;

      let response = await fetch(guru2);
      let data = await response.json();
      let result = data.completion;

      await conn.relayMessage(m.chat, {
        protocolMessage: {
          key,
          type: 14,
          editedMessage: {
            imageMessage: { caption: result }
          }
        }
      }, {});

      m.react('✅'); // مؤشر الحالة "تم"
    } catch (fallbackError) {
      console.error('خطأ في الطلب الاحتياطي:', fallbackError);
      throw '*خطأ*';
    }
  }
};

handler.help = ['chatgpt'];
handler.tags = ['AI'];
handler.command = ['سيلفي', 'chatgpt', 'ai', 'gpt'];

export default handler;
