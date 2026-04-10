import Navbar from "./components/Navbar"
import HeroCard from "./components/HeroCard"
import Card from "./components/Card"
import StatCard from "./components/StatsCard"
import { useState, useEffect } from "react"
import axios from "axios"
import CoinCard from "./components/CoinCard"

const App = () => {

  const [coins, setCoins] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [activeTab, setActiveTab] = useState("all")

  const stats = [
    { id: 1, label: "24h High", value: "$25,200", change: "+2.4%", isPositive: true },
    { id: 2, label: "24h Low", value: "$23,100", change: "-1.2%", isPositive: false },
    { id: 3, label: "Market Cap", value: "$842B", change: "+0.8%", isPositive: true },
    { id: 4, label: "Volume", value: "$18.2B", change: "+12%", isPositive: true },
  ]

  const API_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc"

  // Fetch function
  const fetchCoins = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.get(API_URL)
      setCoins(response.data)
    } catch (err) {
      setError("Failed to fetch data!")
    } finally {
      setLoading(false)
    }
  }

  // Mount pe fetch karo
  useEffect(() => {
    fetchCoins()
  }, [])

  // Tab filter logic
  const filteredCoins = coins.filter(coin => {
    if (activeTab === "all") return true
    if (activeTab === "gainers")
      return coin.price_change_percentage_24h > 0
    if (activeTab === "losers")
      return coin.price_change_percentage_24h < 0
  })

  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <HeroCard />
        <Card>
          <div className="grid grid-cols-2 gap-2">
            {stats.map(stat => (
              <StatCard
                key={stat.id}
                label={stat.label}
                value={stat.value}
                change={stat.change}
                isPositive={stat.isPositive}
              />
            ))}
          </div>
        </Card>
        <div className="flex gap-2 p-4">
          {["all", "gainers", "losers"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="text-xs px-4 py-1.5 rounded-full capitalize"
              style={{
                background: activeTab === tab
                  ? "rgba(124, 58, 237, 0.2)"
                  : "transparent",
                color: activeTab === tab ? "#a78bfa" : "#6b7280",
                border: activeTab === tab
                  ? "1px solid rgba(124, 58, 237, 0.4)"
                  : "1px solid rgba(255,255,255,0.15)"
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Live Prices Header */}
        <div className="flex justify-between items-center px-4 mb-2">
          <p className="text-sm" style={{ color: "#9ca3af" }}>
            Live Prices
          </p>
          <button
            onClick={fetchCoins}
            className="text-xs px-3 py-1 rounded-lg"
            style={{
              background: "rgba(124, 58, 237, 0.2)",
              color: "#a78bfa"
            }}
          >
            Refresh
          </button>
        </div>

        {/* Conditional Rendering */}
        <div className="px-4 flex flex-col gap-2">
          {loading && <p style={{ color: "#6b7280" }}>Loading...</p>}

          {error && (
            <div>
              <p style={{ color: "#f87171" }}>{error}</p>
              <button onClick={fetchCoins}>Retry</button>
            </div>
          )}

          {!loading && !error && filteredCoins.map(coin => (
            <CoinCard
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              image={coin.image}
              price={coin.current_price}
              change={coin.price_change_percentage_24h}
            />
          ))}
        </div>

      </div>
    </>
  )
}
export default App