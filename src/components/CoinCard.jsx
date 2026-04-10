const CoinCard = ({ name, symbol, image, price, change }) => {
  const isPositive = change > 0
  return (
    <div
      className="flex items-center justify-between rounded-xl p-3"
      style={{
        background: "rgba(255, 255, 255, 0.04)",
        border: "1px solid rgba(255, 255, 255, 0.08)"
      }}
    >
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Coin Image — API se aayega */}
        <img
          src={image}
          alt={name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
            {name}
          </p>
          <p className="text-xs" style={{ color: "#6b7280" }}>
            {symbol.toUpperCase()}/USD
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="text-right">
        <p className="text-sm font-medium" style={{ color: "#ffffff" }}>
          ${price.toLocaleString()}
        </p>
        <p
          className="text-xs"
          style={{ color: isPositive ? "#34d399" : "#f87171" }}
        >
          {isPositive ? "+" : ""}{change.toFixed(2)}%
        </p>
      </div>
    </div>
  )
}

export default CoinCard