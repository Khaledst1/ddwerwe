// 
// 
let handler = async (m, { conn }) => {
let done = '😶‍🌫️'; 
       m.react(done);
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `اهلا انا اسمي • بوت السلطان , تم انشاء هذا البوت بواسطه يوسف السلطان لعرض قائمه الاوامر اكتب ( .اوامر )`;

    conn.sendFile(m.chat, 'https://telegra.ph/file/d2a9b330701ff4932bafd.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(بوت|المطور)$/i;
handler.command = new RegExp;

export default handler;
