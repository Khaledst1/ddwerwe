const generate = (x, y, bombs) => {
  const field = Array.from({
    length: x
  }, () => Array(y).fill(0));
  for (let i = 0; i < bombs; i++) {
    let xBomb, yBomb;
    do {
      xBomb = Math.floor(Math.random() * x), yBomb = Math.floor(Math.random() * y);
    } while ("x" === field[xBomb][yBomb]);
    field[xBomb][yBomb] = "x";
  }
  for (let i = 0; i < x; i++)
    for (let j = 0; j < y; j++)
      if ("x" !== field[i][j])
        for (let k = -1; k <= 1; k++)
          for (let l = -1; l <= 1; l++) {
            const ni = i + k,
              nj = j + l;
            ni >= 0 && ni < x && nj >= 0 && nj < y && "x" === field[ni][nj] && field[i][j]++;
          }
  return field;
};

const generateEmpty = (x, y) => Array.from({
  length: x
}, () => Array(y).fill(0));

const translate = value => {
  switch (value) {
    case 0:
      return "⬜"; // خانة فارغة
    case 1:
      return "1️⃣"; // رقم 1
    case 2:
      return "2️⃣"; // رقم 2
    case 3:
      return "3️⃣"; // رقم 3
    case 4:
      return "4️⃣"; // رقم 4
    case 5:
      return "5️⃣"; // رقم 5
    case 6:
      return "6️⃣"; // رقم 6
    case 7:
      return "7️⃣"; // رقم 7
    case 8:
      return "8️⃣"; // رقم 8
    case "x":
      return "💣"; // قنبلة
    case "e":
      return "⏹️"; // خانة مغلقة
    case "f":
      return "🚩"; // علم
  }
};

const generateString = map => map.map(row => row.map(cell => translate(cell)).join("")).join("\n");

const detectZero = (map, x, y) => {
  const queue = [
      [x, y]
    ],
    result = [],
    visited = new Set();
  for (; queue.length > 0;) {
    const [cx, cy] = queue.shift();
    if (!visited.has(`${cx},${cy}`) && (visited.add(`${cx},${cy}`), result.push([cx, cy]), 0 === map[cx][cy]))
      for (let i = -1; i <= 1; i++)
        for (let j = -1; j <= 1; j++) {
          const ni = cx + i,
            nj = cy + j;
          ni >= 0 && ni < map.length && nj >= 0 && nj < map[0]?.length && queue.push([ni, nj]);
        }
  }
  return result;
};

const handler = async (m, {
  conn,
  args,
  usedPrefix,
  command
}) => {
  conn.minesweeper = conn.minesweeper || {};
  const orgs = args[0],
    oX = args[1],
    oY = args[2],
    F = args[3];
  if (!orgs) return await conn.reply(m.chat, `🕹️ *لعبة ألغام* 🕹️\n* ️ ${usedPrefix + command} ابدأ* - لبدء اللعبة\n*🔓 ${usedPrefix + command} افتح* - فتح خلية\n*🔽 ${usedPrefix + command} استسلم* - الاستسلام\n\n*مثال:* ${usedPrefix + command} ابدأ`, m);
  switch (orgs.toLowerCase()) {
    case "ابدأ":
    case "بداية":
      const map = generate(10, 10, 15),
        empty = generateEmpty(10, 10),
        {
          key
        } = await conn.reply(m.chat, "🕹️ *لعبة ألغام* 🕹️\n\n*اللوحة*\n" + generateString(empty), m);
      return void(conn.minesweeper[m.chat] = {
        map: map,
        current: empty,
        key: key
      });
    case "استسلم":
    case "توقف":
    case "انتهاء":
      return conn.minesweeper[m.chat] ? (delete conn.minesweeper[m.chat], await conn.reply(m.chat, "🏳️ *لقد استسلمت.*", m)) : await conn.reply(m.chat, "🚨 *لا توجد جلسة لعب نشطة.*", m);
    case "افتح":
    case "فتح":
    case "بوكا":
      if (!conn.minesweeper[m.chat]) return await conn.reply(m.chat, "🚨 *لا توجد جلسة لعب نشطة.*", m);
      if (oX > 10 || !oX || !oY) return await conn.reply(m.chat, `🚨 *معلمات غير صالحة. مثال: ${usedPrefix + command} افتح 2 5*`, m);
      const g = conn.minesweeper[m.chat];
      if ("f" === F) g.current[oY - 1][oX - 1] = "🚩";
      else {
        const openedCell = g.map[oX - 1][oY - 1];
        if (0 === openedCell) {
          const zero = detectZero(g.map, oX - 1, oY - 1);
          for (const coords of zero) g.current[coords[0]][coords[1]] = g.map[coords[0]][coords[1]];
        } else {
          if ("x" === openedCell) {
            delete conn.minesweeper[m.chat], db.data.users[m.sender].exp -= 9e3;
            const {
              key: loseKey
            } = await conn.reply(m.chat, "💥 *انفجار!* 💣 *لقد فتحت قنبلة.*\n*خصم نقاط التجربة: 9000* 💔\n*نقاط التجربة:* " + db.data.users[m.sender].exp, m);
            return void(conn.minesweeper[m.chat] = {
              key: loseKey
            });
          }
          g.current[oY - 1][oX - 1] = openedCell, db.data.users[m.sender].exp += 9e3;
        }
      }
      await conn.sendMessage(m.chat, {
        delete: g.key
      });
      const {
        key: newKey
      } = await conn.reply(m.chat, "🕹️ *لعبة ألغام* 🕹️\n\n*اللوحة*\n" + generateString(g.current) + "\n\n*نقاط التجربة:* +9000", m);
      return void(conn.minesweeper[m.chat].key = newKey);
  }
};

handler.help = ["ألغام", "الغموض"].map(v => v + " <command> <x> <y>"), handler.tags = ["لعبة"],
  handler.command = /^(ألغام|الغموض)$/i;
export default handler;
