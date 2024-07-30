let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `> فرع يهتم بنشر القرآن والاحاديث والدعاء حياكم 
> *https://chat.whatsapp.com/I3bSqLaH50aGaPTNdn8Rbm*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/5613a96244591e5c1dd7c.jpg', 'video.mp4', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
