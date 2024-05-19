let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `> اهلا بك انا بوت واتساب اسمي بوت السلطان يمكنك طلب قائمه الاوامر من خلال امر  *.اوامر* انا بوت عباره عن تلبيه طلبك والترفيه واحمي الجروبات ويوجد بي تحميل الاغاني والالعاب و التطبيقات واشياء كثيره وتحميل الفيديوهات من جميع المنصات وهذا يوفر لك استخدام تطبيقات كثيره وكما يوجد العاب تقدر تلعبها انت واصدقائك في الجروبات وعلى ما اظن انه يوجد تحديثات كثيره اخرى نحدثها قريبا وانضم الى قناه الوتساب الرسميه لمعرفه التحديثات المستقبليه

> *https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/6c8064983cd7e01123262.jpg', 'video.mp4', message, m);
};

handler.customPrefix = /^(bot|بوت)$/i;
handler.command = new RegExp;

export default handler;
