import similarity from 'similarity';

const threshold = 0.72;

let handler = m => m;

handler.before = async function (m) {
    let id = m.chat;
    
    // التحقق من وجود الاقتباس وصحته
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) {
        return true;  // عدل من !0 إلى true لزيادة الوضوح
    }

    // التأكد من أن التحدي موجود
    this.tekateki = this.tekateki ? this.tekateki : {};
    if (!(id in this.tekateki)) {
        return m.reply('Ese acertijo ya ha terminado!');
    }

    // التحقق من صحة الإجابة
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]));
        
        if (m.text.toLowerCase().trim() === json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2];
            m.reply(`*اجـابـة صـحـيـحـة✅ ❯*\n\n*الـجـائـزة💰↞ ${this.tekateki[id][2]} نقطة*`);
            clearTimeout(this.tekateki[id][3]);
            delete this.tekateki[id];
        } else if (similarity(m.text.toLowerCase().trim(), json.response.toLowerCase().trim()) >= threshold) {
            m.reply('اقتربت من الاجابه!');
        } else {
            m.reply('اجـابـة خـاطـئـة❌ ❯');
        }
    }

    return true;  // عدل من !0 إلى true لزيادة الوضوح
};

handler.exp = 0;

export default handler;
