const StatsCard = ({ label, value, change, isPositive }) => {
  return (

      <div
        className="rounded-xl p-3 bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.08)]">
        <p className="text-xs mb-1" style={{ color: "#6b7280" }}>
          {label}
        </p>

        <p className="text-xl font-medium mb-1" style={{ color: "#ffffff" }}>
          {value}
        </p>
        <p
          className="text-xs"
          style={{ color: isPositive ? "#34d399" : "#f87171" }}
        >
          {change}
        </p>
      </div>
  )
}

export default StatsCard