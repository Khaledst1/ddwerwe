import { lyrics } from "@bochilteam/scraper";
import fetch from "node-fetch";
import Genius from "genius-lyrics";
import axios from "axios";
import cheerio from "cheerio";

const verline = async (m, { conn, args, usedPrefix, command }) => {
    let text;
    if (args.length >= 1) {
        text = args.slice(0).join(" ");
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text;
    } else throw "البحث عن كلمات اي اغنية\n*مثال:*\n .lyric hello";

    const key = "h6fTn1BYNjYi5VTszhyAFTcM3WWtk2E4hqrXCcutfObE4jVFnJ3LVyewHKIYTli7";
    const Client = new Genius.Client(key);
    const song = await Client.songs.search(text);
    const nothing = "غير معروف!";

    try {
        const bocil = await lyrics(text);
        const bocap = `*乂 title 乂*
${bocil.title ? bocil.title : nothing}

*乂 lyric 乂*
${bocil.lyrics ? bocil.lyrics : nothing}

*乂 Author 乂*
${bocil.author ? bocil.author : nothing}

*乂 Url 乂*
${bocil.link ? bocil.link : nothing}
_By MOUL BOBIZA_
`;
        await m.reply(bocap);
    } catch (e) {
        try {
            const jenius = await song[0];
            const albert = `*乂 title 乂*
${jenius.title ? jenius.title : nothing}

*乂 Lyric 乂*
${await getLyrics(jenius.url)}

*乂 singer 乂*
${(await jenius.artist).name ? await(jenius.artist).name : nothing}

*乂 Url 乂*
${jenius.url ? jenius.url : nothing}

instagram.com/noureddine_ouafy
`;
            await m.reply(albert);
        } catch (e) {
            try {
                const { data } = await axios.get("https://www.lyricsfreak.com/search.php?a=search&q=" + text);
                const $ = cheerio.load(data);
                const h1 = $(".song");
                const hh = h1.attr("href");
                const huu = await axios.get("https://www.lyricsfreak.com" + hh);
                const s = cheerio.load(huu.data);
                const h2 = s(".lyrictxt").text();
                const frank = `*乂 Lyric 乂*\n${h2}\n\ninstagram.com/noureddine_ouafy`;
                await m.reply(frank);
            } catch (error) {
                throw error;
            }
        }
    }
};
verline.help = ["lirik"]
verline.tags = ["internet"];
verline.command = /^كلمات-اغنيه$/i;
export default verline;
async function getLyrics(url) {
    const response = await fetch("https://files.xianqiao.wang/" + url);
    const html = await response.text();
    const $ = cheerio.load(html);
    let lyrics = '';
    $('div[class^="Lyrics__Container"]').each((i, elem) => {
        if ($(elem).text().length !== 0) {
            const snippet = $(elem)
                .html()
                .replace(/<br>/g, '\n')
                .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');

            lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
        }
    });
    return lyrics;
}
