//مقدمه من قناة زيزو ممنوع تغير الحقوق https://whatsapp.com/channel/0029Vaflefp4Y9ljqmqllP3a
import{ prepareWAMessageMedia } from '@whiskeysockets/baileys';
import pkg from '@whiskeysockets/baileys';
import axios from 'axios';
const { generateWAMessageFromContent, proto } = pkg
const handler = async (m, { conn, usedPrefix, command }) => {
    // جلب بيانات كريستيانو رونالدو من الملف JSON
    const cristiano = (await axios.get('https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/CristianoRonaldo.json')).data;
    const ronaldo = cristiano[Math.floor(cristiano.length * Math.random())];

    // إرسال رد فعل الرموز التعبيرية
    await conn.sendMessage(m.chat, { react: { text: '🥳', key: m.key } });

    // إعداد رسالة الوسائط
    const mediaMessage = await prepareWAMessageMedia({ image: { url: ronaldo } }, { upload: conn.waUploadToServer });

    let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "𝑃𝑇ـ𝑃𝐴𝑇𝐶𝐻𝐸𝑅𝐴 𝐵𝛩𝑇"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "𝑃𝑇ـ𝑃𝐴𝑇𝐶𝐻𝐸𝑅𝐴 𝐵𝛩𝑇"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "*suiiiiiii*",
            subtitle: "",
            hasMediaAttachment: true, 
            imageMessage: mediaMessage.imageMessage,  
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 الــتـــــالـي 〙\",\"id\":\".الدون\"}"
             }, 
                {
                "name": "quick_reply",
                "buttonParamsJson": "{\"display_text\":\"〘 الـــــــدعــــم 〙\",\"id\":\".الدعم\"}"
              }
           ],
          }) 
        }) 
       } 
     } 
   },{}) 
    // إرسال الرسالة
    await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })
    } 
handler.help = ['cristianoronaldo', 'cr7', 'الدون'];
handler.tags = ['internet'];
handler.command = /^(الدون|رونالدو|كريستيانو)$/i;

export default handler;
