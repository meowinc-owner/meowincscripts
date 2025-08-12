// Generate random starting downloads between 1-100
const getRandomDownloads = () => Math.floor(Math.random() * 100) + 1;

export const mockScripts = [
  {
    id: "1",
    name: "The Strongest Battlegrounds",
    description: "Ultimate script for The Strongest Battlegrounds game with advanced features and capabilities",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/hehehe9028/meowinc-the-strongest-battleground/refs/heads/main/meowinc%20the%20strongest%20battleground"))()`,
    category: "Gaming",
    tags: ["roblox", "battlegrounds", "script", "gaming"],
    downloads: getRandomDownloads(),
    author: "Meowinc Scripts"
  },
  {
    id: "2",
    name: "Ink Games",
    description: "Comprehensive script suite for Ink Games with premium features and utilities",
    code: `loadstring(game:HttpGet("https://raw.githubusercontent.com/hehehe9028/MEOWINC-ink-game/refs/heads/main/meowinc%20ink%20game"))()`,
    category: "Gaming",
    tags: ["roblox", "ink", "games", "script"],
    downloads: getRandomDownloads(),
    author: "Meowinc Scripts"
  }
];