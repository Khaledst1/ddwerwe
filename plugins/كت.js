import axios from 'axios';

let handler = async (m, { conn, args }) => {
    let chat = global.db.data.chats[m.chat];
    let count = parseInt(args[0]) || 10; // Default to 10 names if count is not provided
    let data = await fetchData(); // Fetch data from GitHub raw
    let shuffledData = shuffleArray(data); // Shuffle the data array
    let currentItemIndex = 0; // Index of the current item being processed
    let currentItem; // Current item being processed
    let answered = false; // Flag to track if the question has been answered
    let points = {}; // Object to track points for each user

    // Function to fetch data from GitHub raw
    async function fetchData() {
        try {
            let response = await axios.get('https://raw.githubusercontent.com/Aurtherle/Games/main/.github/workflows/hina.json');
            return response.data;
        } catch (error) {
            console.error("Failed to fetch data:", error);
            return []; // Return an empty array if fetching fails
        }
    }

    // Function to shuffle an array (Fisher-Yates shuffle algorithm)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Function to generate leaderboard message
    async function generateLeaderboard() {
        let leaderboard = Object.entries(points).sort((a, b) => b[1] - a[1]);
        let leaderboardMsg = "*❃ ──────⊰ ❀ ⊱────── ❃*\n\n *المشاركين :*\n\n";
        leaderboard.forEach((entry, index) => {
            let [userId, points] = entry;
            let user = global.db.data.users[userId];
            if (!user) return;
            let { name } = user;
            let emoji = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "";
            leaderboardMsg += `◍ *${name} : ${points}* ${emoji}\n`;
        });
        leaderboardMsg += "\n*❃ ──────⊰ ❀ ⊱────── ❃*";
        return leaderboardMsg;
    }

    // Function to send the next name with a game clue
    async function sendNextName() {
        if (currentItemIndex < shuffledData.length && count > 0) {
            currentItem = shuffledData[currentItemIndex];
            let clue = currentItem.name; // Use the name as the clue (answer)
            currentItem.response = currentItem.response.replace(/\s/g, ''); // Remove white spaces from response
            let caption = `*${currentItem.response}*`; // Construct caption with the game clue
            await conn.reply(m.chat, caption, m); // Send the game clue

            // Add the sent name to the list of sent names
            chat.sentNames = chat.sentNames || [];
            chat.sentNames.push(currentItem.name);

            // Reset answered flag for the new question
            answered = false;

            // Schedule timeout for the current item
            setTimeout(() => {
                // If no correct answer is provided within the timeout, send the next name
                if (!answered) {
                    currentItemIndex++;
                    sendNextName();
                }
            }, 8000);
            count--; // Decrease the count
        } else {
            // When all names are sent or the count limit is reached, generate and send leaderboard
            let leaderboardMsg = await generateLeaderboard();
            await conn.reply(m.chat, leaderboardMsg, m);
        }
    }

    // Function to handle messages
    handler.all = async function (m) {
        let user = m.sender;
        let message = m.text.trim();
        if (!answered && currentItem && normalize(currentItem.name) === normalize(message)) {
            // If user's message matches the name (question) and it's not already answered, increase points
            points[user] = (points[user] || 0) + 1;
            answered = true; // Mark the question as answered
            await conn.reply(m.chat, ".", m);
            currentItemIndex++;
            if (currentItemIndex < shuffledData.length && count > 0) {
                setTimeout(() => sendNextName(), 2000); // Send the next name with a 1-second delay
            } else {
                // If all names have been sent, generate and send leaderboard
                let leaderboardMsg = await generateLeaderboard();
                await conn.reply(m.chat, leaderboardMsg, m);
            }
        }
    };

    // Function to normalize a string (remove whitespace, convert to lowercase, etc.)
    function normalize(str) {
        return str.replace(/\s/g, '').toLowerCase(); // Remove whitespace and convert to lowercase
    }

    // Start sending names with game clues
    sendNextName();

    return true; // Message handled
};

handler.command = /^(كتابة|كت)$/i;

export default handler;
