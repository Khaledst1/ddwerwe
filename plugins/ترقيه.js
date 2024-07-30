let handler = async (m, { conn, usedPrefix, text }) => {
    if (!text && !m.quoted) {
        return conn.reply(m.chat, `*[❗] الاستخدام المناسب*\n\n*┯┷*\n*┠≽ ${usedPrefix}ترقيه مشرف @منشن*\n*┠≽ ${usedPrefix}ترقيه مشرف -> الرد على رسالة*\n*┷┯*`, m);
    }
    
    let number;
    
    if (isNaN(text) && !text.match(/@/g)) {
        return conn.reply(m.chat, `*[ ⚠️ ] الرجاء إدخال رقم صحيح أو منشن أو رد على رسالة*`, m);
    } else if (isNaN(text)) {
        number = text.split('@')[1];
    } else {
        number = text;
    }
    
    if (number.length > 13 || (number.length < 11 && number.length > 0)) {
        return conn.reply(m.chat, `*[ ⚠️ ] الرقم الذي تم إدخاله غير صحيح ، الرجاء إدخال الرقم الصحيح*`, m);
    }
    
    let user;
    
    try {
        if (text) {
            user = number + '@s.whatsapp.net';
        } else if (m.quoted && m.quoted.sender) {
            user = m.quoted.sender;
        } else if (m.mentionedJid) {
            user = number + '@s.whatsapp.net';
        }
    } catch (e) {
        console.error(e);
    }
    
    if (user) {
        try {
            await conn.groupParticipantsUpdate(m.chat, [user], 'promote');
            conn.reply(m.chat, `*[✔️] تم ترقية المستخدم بنجاح*`, m);
        } catch (e) {
            console.error(e);
            conn.reply(m.chat, `*[❗] حدث خطأ أثناء محاولة ترقية المستخدم*`, m);
        }
    } else {
        conn.reply(m.chat, `*[❗] لم يتم تحديد مستخدم صالح لترقيته*`, m);
    }
};

handler.help = ['*201063720595xxx*', '*@اسم المستخدم*', '*محادثة المستجيب*'].map(v => 'promote ' + v);
handler.tags = ['group'];
handler.command = /^(ترقيه)$/i;
handler.group = true;
handler.rowner = true;
handler.botAdmin = true;
handler.fail = null;

export default handler;
