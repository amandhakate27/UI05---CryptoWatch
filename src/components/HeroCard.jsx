const HeroCard = () => {
  return (
    <div className="flex flex-col bg-[rgba(124,58,237,0.1)] border-[rgba(124,58,237,0.3)] rounded-xl p-4 mx-4" >
      <h3 className=" text-xs mb-1 text-[#a78bfa]">Portfolio Value</h3>
      <h2 className="text-3xl font-bold">$24,831.50</h2>
      <h3 className=" text-xs mt-1 text-[#34d399]">+12,04.20 (5.1%) today</h3>
    </div>
  )
}
export default HeroCard