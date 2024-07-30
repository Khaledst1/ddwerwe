let handler = async (m, { conn }) => {
  // تأكد من أن conn.tebakbendera مُعرفة أو أنشئ كائن فارغ
  conn.tebakbendera = conn.tebakbendera || {};
  
  let id = m.chat;

  // تحقق مما إذا كانت المحادثة موجودة في conn.tebakbendera
  if (!(id in conn.tebakbendera)) {
    return conn.reply(m.chat, '*❌ اللعبة غير موجودة هنا.*', m);
  }

  // استرجع البيانات المتعلقة بالمحادثة
  let json = conn.tebakbendera[id][1];

  // استبدال الحروف المتحركة بعلامة _ وإرسال الرد
  let maskedName = json.name.replace(/[AIUEOaiueo]/g, '_');
  conn.reply(m.chat, '```' + maskedName + '```', m);
};

// تعيين الأوامر التي يستجيب لها البوت
handler.command = /اجابه$/i;

export default handler;
