import { readdirSync, unlinkSync, existsSync, promises as fs, readFileSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  const { sender, chat, isGroup } = m;
  const { user } = conn;
  const datas = global;
  const idioma = datas.db.data.users[sender].language;
  
  // قراءة ملف الترجمة
  const _translate = JSON.parse(readFileSync(`./language/${idioma}.json`));
  const tradutor = _translate.plugins.fix_esperando_mensage;
  
  // التحقق من هوية المستخدم
  if (user.jid !== conn.user.jid) {
    return conn.sendMessage(chat, { text: tradutor.texto1 }, { quoted: m });
  }
  
  // تحديد معرفات المحادثة
  const chatId = isGroup ? [chat, sender] : [sender];
  const sessionPath = './MysticSession/';
  
  try {
    // قراءة الملفات في المجلد المحدد
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    
    // حذف الملفات المطابقة لمعرف المحادثة
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    
    // إرسال رسالة بناءً على عدد الملفات المحذوفة
    if (filesDeleted === 0) {
      await conn.sendMessage(chat, { text: tradutor.texto2 }, { quoted: m });
    } else {
      await conn.sendMessage(chat, { text: `${tradutor.texto3[0]} ${filesDeleted} ${tradutor.texto3[1]}` }, { quoted: m });
    }
  } catch (err) {
    console.error(tradutor.texto4, err);
    await conn.sendMessage(chat, { text: tradutor.texto5 }, { quoted: m });
  }
  
  // إرسال رسالة إضافية
  await conn.sendMessage(chat, { text: `${tradutor.texto6} \n${usedPrefix}s\n${usedPrefix}s\n${usedPrefix}s` }, { quoted: m });
};

handler.help = ['fixmsgespera'];
handler.tags = ['إصلاح'];
handler.command = /^(صلح|ds)$/i;

export default handler;
