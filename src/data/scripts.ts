export const mockScripts = [
  {
    id: "1",
    name: "Auto Clicker Premium",
    description: "Advanced auto-clicker with customizable delays and patterns",
    code: `// Auto Clicker Premium
setInterval(() => {
  const target = document.querySelector('.target-element');
  if (target) {
    target.click();
    console.log('Click executed');
  }
}, 1000);`,
    category: "Automation",
    tags: ["clicking", "automation", "gaming"],
    downloads: 15420,
    author: "Meowinc"
  },
  {
    id: "2",
    name: "Form Filler Pro",
    description: "Automatically fills forms with predefined data",
    code: `// Form Filler Pro
const formData = {
  name: "John Doe",
  email: "john@example.com"
};

Object.keys(formData).forEach(key => {
  const input = document.querySelector(\`[name="\${key}"]\`);
  if (input) input.value = formData[key];
});`,
    category: "Productivity",
    tags: ["forms", "automation", "productivity"],
    downloads: 8934,
    author: "Meowinc"
  },
  {
    id: "3",
    name: "Speed Hack Ultimate",
    description: "Game speed manipulation script for testing purposes",
    code: `// Speed Hack Ultimate
let originalRAF = requestAnimationFrame;
let speedMultiplier = 2.0;

requestAnimationFrame = function(callback) {
  return originalRAF(function(time) {
    callback(time * speedMultiplier);
  });
};`,
    category: "Gaming",
    tags: ["speed", "gaming", "hack"],
    downloads: 23567,
    author: "Meowinc"
  },
  {
    id: "4",
    name: "Dark Mode Injector",
    description: "Inject dark mode into any website",
    code: `// Dark Mode Injector
const darkCSS = \`
  * { 
    filter: invert(1) hue-rotate(180deg) !important; 
  }
  img, video { 
    filter: invert(1) hue-rotate(180deg) !important; 
  }
\`;

const style = document.createElement('style');
style.textContent = darkCSS;
document.head.appendChild(style);`,
    category: "Utility",
    tags: ["dark-mode", "css", "utility"],
    downloads: 12034,
    author: "Meowinc"
  },
  {
    id: "5",
    name: "Element Highlighter",
    description: "Highlight and inspect page elements easily",
    code: `// Element Highlighter
document.addEventListener('mouseover', (e) => {
  e.target.style.outline = '2px solid #ff0000';
  e.target.style.backgroundColor = 'rgba(255,0,0,0.1)';
});

document.addEventListener('mouseout', (e) => {
  e.target.style.outline = '';
  e.target.style.backgroundColor = '';
});`,
    category: "Development",
    tags: ["debug", "development", "inspector"],
    downloads: 5678,
    author: "Meowinc"
  },
  {
    id: "6",
    name: "Cookie Manager",
    description: "Advanced cookie manipulation and management",
    code: `// Cookie Manager
class CookieManager {
  static set(name, value, days = 7) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = \`\${name}=\${value};expires=\${date.toUTCString()};path=/\`;
  }
  
  static get(name) {
    return document.cookie.split(';')
      .find(c => c.trim().startsWith(name + '='))
      ?.split('=')[1];
  }
}`,
    category: "Utility",
    tags: ["cookies", "storage", "utility"],
    downloads: 9876,
    author: "Meowinc"
  },
  {
    id: "7",
    name: "Anti-Detect Browser",
    description: "Browser fingerprint spoofing and detection prevention",
    code: `// Anti-Detect Browser
Object.defineProperty(navigator, 'userAgent', {
  get: () => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
});

Object.defineProperty(navigator, 'platform', {
  get: () => 'Win32'
});

// Spoof timezone
Date.prototype.getTimezoneOffset = () => -480;`,
    category: "Privacy",
    tags: ["privacy", "fingerprint", "detection"],
    downloads: 18543,
    author: "Meowinc"
  },
  {
    id: "8",
    name: "Page Monitor",
    description: "Monitor page changes and get notifications",
    code: `// Page Monitor
let lastContent = document.body.innerHTML;

setInterval(() => {
  const currentContent = document.body.innerHTML;
  if (currentContent !== lastContent) {
    console.log('Page changed!');
    notification.new('Page Updated', 'Content has changed');
    lastContent = currentContent;
  }
}, 5000);`,
    category: "Monitoring",
    tags: ["monitoring", "notifications", "automation"],
    downloads: 7234,
    author: "Meowinc"
  }
];