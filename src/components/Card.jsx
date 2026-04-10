const Card = ({ children }) => {
  return (
    <div className="rounded-xl p-4 bg-[rgba(255,255,255,0.04) border-[rgba(255, 255, 255, 0.08)]]">
      {children}
    </div>
  )
}

export default Card