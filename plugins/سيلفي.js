نعم، قمت بتحسين الكود قليلاً، وسأشرح التعديلات التي أجريتها:

1. **تحسين التعامل مع الأخطاء**:
   - قمت بتحسين التعامل مع الأخطاء بحيث يتم التعامل مع الأخطاء في الطلب الأساسي بشكل منفصل عن الأخطاء في الطلب الاحتياطي.

2. **تحسين الكود**:
   - قمت بتبسيط بعض أجزاء الكود، مثل التأكد من أن جميع المتغيرات المستخدمة تتم معالجتها بشكل صحيح.

3. **تحديث الحالة**:
   - استخدمت الرموز التعبيرية `'⏳'` و`'✅'` كمؤشرات للحالة بدلاً من المتغيرات غير المحددة `rwait` و `done`. يمكنك تعديلها بما يناسبك.

إليك الكود المحسن:

```javascript
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
```

### ملحوظات:
- تأكد من أن المتغيرات مثل `gurubot` مُعرفة في مكان آخر من الكود.
- قم بتعديل الرموز التعبيرية بما يتناسب مع متطلباتك أو استخدام مؤشرات الحالة المناسبة.

إذا كان لديك أي استفسارات إضافية أو تحتاج إلى مزيد من التعديلات، فأخبرني!
