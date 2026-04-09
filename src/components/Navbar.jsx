const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-5 py-4">
      <div className="flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-[#7c3aed]"></div>
          <a href="#"><h1 className="font-bold text-2xl">CryptoWatch</h1></a>
      </div>
      <div className="flex items-center gap-2">
       <p className="bg-[rgba(124,58,237,0.2)] text-[#a78bfa] px-3 py-1 rounded-full">Live</p>
        <div className="h-10 w-10 rounded-full bg-[#7c3aed] flex items-center justify-center">AM</div>
      </div>
      
    </nav>
  )
}

export default Navbar
