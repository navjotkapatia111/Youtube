const nameList:string[] = [
    'Time', 'Past', 'Future', 'Dev',
    'Fly', 'Flying', 'Soar', 'Soaring', 'Power', 'Falling',
    'Fall', 'Jump', 'Cliff', 'Mountain', 'Rend', 'Red', 'Blue',
    'Green', 'Yellow', 'Gold', 'Demon', 'Demonic', 'Panda', 'Cat',
    'Kitty', 'Kitten', 'Zero', 'Memory', 'Trooper', 'XX', 'Bandit',
    'Fear', 'Light', 'Glow', 'Tread', 'Deep', 'Deeper', 'Deepest',
    'Mine', 'Your', 'Worst', 'Enemy', 'Hostile', 'Force', 'Video',
    'Game', 'Donkey', 'Mule', 'Colt', 'Cult', 'Cultist', 'Magnum',
    'Gun', 'Assault', 'Recon', 'Trap', 'Trapper', 'Redeem', 'Code',
    'Script', 'Writer', 'Near', 'Close', 'Open', 'Cube', 'Circle',
    'Geo', 'Genome', 'Germ', 'Spaz', 'Shot', 'Echo', 'Beta', 'Alpha',
    'Gamma', 'Omega', 'Seal', 'Squid', 'Money', 'Cash', 'Lord', 'King',
    'Duke', 'Rest', 'Fire', 'Flame', 'Morrow', 'Break', 'Breaker', 'Numb',
    'Ice', 'Cold', 'Rotten', 'Sick', 'Sickly', 'Janitor', 'Camel', 'Rooster',
    'Sand', 'Desert', 'Dessert', 'Hurdle', 'Racer', 'Eraser', 'Erase', 'Big',
    'Small', 'Short', 'Tall', 'Sith', 'Bounty', 'Hunter', 'Cracked', 'Broken',
    'Sad', 'Happy', 'Joy', 'Joyful', 'Crimson', 'Destiny', 'Deceit', 'Lies',
    'Lie', 'Honest', 'Destined', 'Bloxxer', 'Hawk', 'Eagle', 'Hawker', 'Walker',
    'Zombie', 'Sarge', 'Capt', 'Captain', 'Punch', 'One', 'Two', 'Uno', 'Slice',
    'Slash', 'Melt', 'Melted', 'Melting', 'Fell', 'Wolf', 'Hound',
    'Legacy', 'Sharp', 'Dead', 'Mew', 'Chuckle', 'Bubba', 'Bubble', 'Sandwich', 'Smasher', 'Extreme', 'Multi', 'Universe', 'Ultimate', 'Death', 'Ready', 'Monkey', 'Elevator', 'Wrench', 'Grease', 'Head', 'Theme', 'Grand', 'Cool', 'Kid', 'Boy', 'Girl', 'Vortex', 'Paradox'
  ];
  export function Namelist(): string {
    const randomIndex = Math.floor(Math.random() * nameList.length);
    return nameList[randomIndex];
  }
const messageList:string[]=[
    "Let's gooo 🔥",
  "W stream!",
  "Hi everyone 👋",
  "This part's insane 😳",
  "Navjot OP 💯",
  "Who else is vibing here?",
  "Spam 🔥 if you're hyped!",
  "Mods asleep? 😂",
  "This is too good",
  "Yessirrr 🔥🔥🔥",
  "Lmao that part 😭",
  "Replay that please!",
  "Don’t blink 👀",
  "Bro’s cooking fr 👨‍🍳",
  "Nice play!",
  "Love from India 🇮🇳",
  "I'm here every time 😎",
  "Drop a like if you're watching live!",
  "Chat going wild 😂",
  "Can't stop watching this 🔁",
  "Who's been here since 1K subs?",
  "This is so chill 🧊",
  "Pin this comment lol",
  "He actually read my comment!",
  "YouTube finally recommended something good!"
]
  export function RandomMessage(): string {
    const randomIndex = Math.floor(Math.random() * messageList.length);
    return messageList[randomIndex];
  }