let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `تقصد نفسك`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/caafdb2292db8180b99fe.mp4', 'video.mp4', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;