import similarity from 'similarity';

const threshold = 0.72;

export async function before(m) {
    let id = m.chat;

    // تحقق من وجود الرسالة المقتبسة وأنها من نفس المستخدم وأنها تتطابق مع النمط المطلوب
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/.*•┇❐↞استخدم انسحب للانسحاب┇*/i.test(m.quoted.text) || /.*hhint/i.test(m.text)) {
        return true;
    }

    this.tokitoki = this.tokitoki || {};

    // تحقق مما إذا كان هناك سجل لهذا المحادثة
    if (!(id in this.tokitoki)) {
        return this.reply(m.chat, '*❐┃هــاذا الــســؤال قــد انــتـهـى┃☑️❯*', m);
    }

    if (m.quoted.id === this.tokitoki[id][0].id) {
        let isSurrender = /^(انسحب|surr?ender)$/i.test(m.text);

        if (isSurrender) {
            clearTimeout(this.tokitoki[id][3]);
            delete this.tokitoki[id];
            return this.reply(m.chat, '*❐┃طـلـع غـبـي و انســحــب┃⚠️ ❯*', m);
        }

        let json = JSON.parse(JSON.stringify(this.tokitoki[id][1]));

        if (m.text.toLowerCase().trim() === json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tokitoki[id][2];
            this.reply(m.chat, `*❐┃اجـابـة صـحـيـحـة┃✅ ❯*\n*❐↞┇الـجـائـزة💰↞* *${this.tokitoki[id][2]}* *نقطه┇❯*`, m);
            clearTimeout(this.tokitoki[id][3]);
            delete this.tokitoki[id];
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
            this.reply(m.chat, '*❐┃اقـربـت مـن الاجـابـه┃🚸 ❯*', m);
        } else {
            this.reply(m.chat, '*❐┃اجـابـة خـاطـئـة ┃❌ ❯*', m);
        }
    }

    return true;
}

export const exp = 0;
