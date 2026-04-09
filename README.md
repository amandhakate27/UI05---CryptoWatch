# UI04 — CryptoWatch Dashboard
## Step-by-Step Implementation Guide

---

## Color Scheme Reference
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
GLOBAL / APP LEVEL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Page Background     : #0f0f1a

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Navbar.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Logo Dot            : #7c3aed
Logo Text           : #ffffff
Live Badge Bg       : rgba(124, 58, 237, 0.2)
Live Badge Text     : #a78bfa
Avatar Bg           : #7c3aed
Avatar Text         : #ffffff

## TASK 2 — Navbar.jsx
```
Kya banana hai:
[ ] Left side — purple dot + "CryptoWatch" text
[ ] Right side — "Live" badge + Avatar (initials)

Props:
→ username  (initials ke liye)

Tailwind hints:
→ flex justify-between items-center
→ bg — #0f0f1a (inline style ya custom)
→ Badge: rounded-full text-xs px-3 py-1
→ Avatar: w-8 h-8 rounded-full



━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
HeroCard.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card Bg             : rgba(124, 58, 237, 0.1)
Card Border         : rgba(124, 58, 237, 0.3)
Label Text          : #a78bfa
Value Text          : #ffffff
Change Text         : #34d399
Sub Text            : #6b7280

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card.jsx (Children Wrapper)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card Bg             : rgba(255, 255, 255, 0.04)
Card Border         : rgba(255, 255, 255, 0.08)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
StatCard.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card Bg             : rgba(255, 255, 255, 0.05)
Card Border         : rgba(255, 255, 255, 0.08)
Label Text          : #6b7280
Value Text          : #ffffff
Positive Change     : #34d399
Negative Change     : #f87171

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tabs (App.jsx inline)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Tab Border          : rgba(255, 255, 255, 0.15)
Tab Text            : #6b7280
Active Tab Bg       : rgba(124, 58, 237, 0.2)
Active Tab Text     : #a78bfa
Active Tab Border   : rgba(124, 58, 237, 0.4)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CoinCard.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Card Bg             : rgba(255, 255, 255, 0.04)
Card Border         : rgba(255, 255, 255, 0.08)
Coin Name Text      : #ffffff
Symbol Text         : #6b7280
Price Text          : #ffffff
Positive Change     : #34d399
Negative Change     : #f87171

BTC Icon Bg         : rgba(247, 147, 26, 0.2)
BTC Icon Text       : #f7931a
ETH Icon Bg         : rgba(98, 126, 234, 0.2)
ETH Icon Text       : #627eea
SOL Icon Bg         : rgba(153, 69, 255, 0.2)
SOL Icon Text       : #9945ff

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Section Header (App.jsx inline)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Title Text          : #9ca3af
Refresh Btn Bg      : rgba(124, 58, 237, 0.2)
Refresh Btn Text    : #a78bfa

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ChartSection.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Chart Bg            : rgba(255, 255, 255, 0.03)
Chart Border        : rgba(255, 255, 255, 0.08)
Bar Color           : rgba(124, 58, 237, 0.35)
Active Bar Color    : #7c3aed
Day Label Text      : #6b7280

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LoadingState.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Wrapper Bg          : rgba(255, 255, 255, 0.03)
Wrapper Border      : rgba(255, 255, 255, 0.08)
Skeleton Bg         : rgba(255, 255, 255, 0.08)
Loading Text        : #6b7280

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ErrorState.jsx
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Wrapper Bg          : rgba(248, 113, 113, 0.08)
Wrapper Border      : rgba(248, 113, 113, 0.3)
Error Text          : #f87171
Retry Btn Bg        : rgba(248, 113, 113, 0.2)
Retry Btn Text      : #f87171
Note Text           : #6b7280

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Footer (App.jsx inline)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Border Top          : rgba(255, 255, 255, 0.06)
Footer Text         : #4b5563
```

---

## Folder Structure
```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Card.jsx
│   ├── HeroCard.jsx
│   ├── StatCard.jsx
│   ├── CoinCard.jsx
│   ├── LoadingState.jsx
│   └── ErrorState.jsx
└── App.jsx
```

---

## API Details
```
URL:
https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc

Method : GET
Auth   : No API key needed
Returns: Array of coin objects
```

### Response Data Fields:
```
coin.id
coin.name
coin.symbol
coin.current_price
coin.price_change_percentage_24h
coin.market_cap
coin.total_volume
coin.high_24h
coin.low_24h
coin.image   ← logo image URL
```

---

## States Required in App.jsx
```js
coins      → useState([])    // API se aaya data
loading    → useState(true)  // fetch ho rahi hai?
error      → useState(null)  // koi error?
activeTab  → useState("all") // selected tab
```

---

## TASK 1 — Project Setup
```
[ ] Vite + React project create karo
[ ] Tailwind CSS setup karo
[ ] components/ folder banao
[ ] Saari empty component files banao
[ ] App.jsx mein sab import karo
```

---


```

---

## TASK 3 — Card.jsx (Children Wrapper)
```
Kya banana hai:
[ ] Sirf ek wrapper div
[ ] children prop render karo

Style:
→ rounded-xl border p-4
→ Background: rgba(255,255,255,0.04)
→ Border: rgba(255,255,255,0.08)
```

---

## TASK 4 — StatCard.jsx
```
Kya banana hai:
[ ] label (e.g. "24h High")
[ ] value (e.g. "$25,200")
[ ] change percentage
[ ] Green color agar positive
[ ] Red color agar negative

Props:
→ label
→ value
→ change
→ isPositive (boolean)
```

---

## TASK 5 — CoinCard.jsx
```
Kya banana hai:
[ ] Left side:
    → Coin image (API se aata hai)
    → Coin name
    → Coin symbol (uppercase)
[ ] Right side:
    → Current price ($)
    → 24h change percentage
    → Green agar positive, Red agar negative

Props:
→ image
→ name
→ symbol
→ price
→ change

Tailwind hints:
→ flex justify-between items-center
→ rounded-xl p-3
→ text-green-400 / text-red-400
```

---

## TASK 6 — LoadingState.jsx
```
Kya banana hai:
[ ] 3 skeleton cards dikhao
[ ] Animated pulse effect

Tailwind hints:
→ animate-pulse
→ bg-gray-700 rounded h-4 w-full
→ Repeat 3 baar fake card structure
```

---

## TASK 7 — ErrorState.jsx
```
Kya banana hai:
[ ] Error message dikhao
[ ] "Retry" button

Props:
→ message  (error message)
→ onRetry  (function — retry button ke liye)

Tailwind hints:
→ text-red-400
→ border border-red-400/30
→ rounded-xl p-4 text-center
```

---

## TASK 8 — App.jsx States Setup
```
[ ] Saare useState define karo:
    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [activeTab, setActiveTab] = useState("all")
```

---

## TASK 9 — App.jsx useEffect + API Fetch
```
[ ] useEffect import karo
[ ] Andar async function banao — fetchCoins
[ ] try block mein:
    → axios/fetch se API call karo
    → setCoins(data) karo
[ ] catch block mein:
    → setError(error.message) karo
[ ] finally block mein:
    → setLoading(false) karo
[ ] fetchCoins() call karo
[ ] Dependency array [] rakho

Retry logic:
[ ] Ek alag function banao — handleRetry
[ ] setLoading(true) karo
[ ] setError(null) karo
[ ] fetchCoins() dobara call karo
```

---

## TASK 10 — App.jsx Tabs Filter Logic
```
[ ] 3 tabs: "all", "gainers", "losers"
[ ] Filter logic:

all     → coins as is
gainers → coins.filter(c => c.price_change > 0)
losers  → coins.filter(c => c.price_change < 0)

[ ] filteredCoins variable banao
[ ] map mein filteredCoins use karo
```

---

## TASK 11 — App.jsx Conditional Rendering
```
[ ] Pehle loading check karo:
    if (loading) → <LoadingState />

[ ] Phir error check karo:
    if (error) → <ErrorState message={error} onRetry={handleRetry} />

[ ] Phir data render karo:
    coins.map → <CoinCard key={coin.id} ...props />
```

---

## TASK 12 — App.jsx Full UI Assembly
```
[ ] Navbar render karo
[ ] HeroCard render karo (hardcode value — useState nahi)
[ ] Stats Grid — 4 StatCards render karo
    (hardcode karo — API mein nahi hoga)
[ ] Tabs — 3 buttons render karo
    → activeTab se active class lagao
    → onClick se setActiveTab karo
[ ] Coin List — filteredCoins.map karo
[ ] LoadingState / ErrorState conditional karo
```

---

## TASK 13 — Final Checks
```
[ ] key prop — coin.id use karo — index nahi!
[ ] Props destructuring — hamesha
[ ] Default props set karo jahan zaruri ho
[ ] No inline styles — sirf Tailwind
[ ] No spread operator unnecessarily
[ ] Named handlers — no inline arrow in JSX
[ ] loading true initially — API call se pehle
```

---

## Concepts Used — Checklist
```
[ ] useEffect — API call on mount
[ ] useState — 4 states manage kiye
[ ] Conditional rendering — 3 states
[ ] Props — har component mein
[ ] Children prop — Card wrapper
[ ] Array.map — coins render
[ ] Functions as props — onRetry
[ ] Default props — StatCard, CoinCard
[ ] Key prop — coin.id
[ ] Async/await in useEffect
[ ] try/catch/finally
```

---

## Difficulty Level
```
Task 1-3  : Easy    ← pehle karo
Task 4-7  : Easy    ← components banao
Task 8-9  : Medium  ← useEffect + API
Task 10-11: Medium  ← filter + conditional
Task 12-13: Medium  ← assembly + checks
```

---

## Rules — Yaad Rakho
```
❌ Hardcode coins data mat karo — real API use karo
❌ Index as key mat use karo
❌ Inline styles mat use karo
❌ setTimeout se fake loading mat banao
❌ Spread operator unnecessarily mat use karo
✅ Mobile first — but abhi sirf desktop focus
✅ Real API call — CoinGecko free hai
✅ Error state properly handle karo
✅ Loading state properly handle karo
```

---

## Completion Checklist
```
[ ] Navbar complete
[ ] Card wrapper complete
[ ] StatCard complete
[ ] CoinCard complete
[ ] LoadingState complete
[ ] ErrorState complete
[ ] useEffect API fetch complete
[ ] 3 States working — loading/error/data
[ ] Tabs filter working
[ ] Retry button working
[ ] key props correct
[ ] Code review ready!
```

🔴 Red border    = Alag component
                   (single use, apni responsibility)

🟢 Green border  = Reusable component
                   (ek banao — baar baar use karo)

🟡 Yellow dashed = Wrapper component
                   (children prop use karta hai)

🔵 Blue border   = App.jsx
                   (parent — sabka data yahan)

⚫ Gray border   = App.jsx mein hi likhte hain
                   (repeat nahi hoga — component nahi)


Repeat hoga?     → 🟢 Reusable component
Alag kaam hai?   → 🔴 Single use component
Wrap karna hai?  → 🟡 Children prop wrapper
Sab ka baap?     → 🔵 App.jsx / Parent

---

*All the best! Code complete hone pe paste karo! 🚀*