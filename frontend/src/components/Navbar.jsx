function Navbar() {
  return <header className="bg-white sticky top-0 w-full shadow-sm">
       <nav className="flex justify-center py-4 space-x-5">
        <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
          <img src="/long_temp_logo.png" alt="Logo" className="h-9 w-auto" />
        </div>
        <div>
        <div className="space-x-4">
          <button href="#location-finder" type="button" className="rounded-full hover:bg-gray-100 p-2">
            <span className="p-1">
              Location Finder
            </span>
          </button>
        </div>
        </div>
        <div>
        <div className="">
          <button href="#blog" type="button" className="rounded-full hover:bg-gray-100 p-2">
            <span className="p-1">
              Tips & Advice
            </span>
          </button>
        </div>
        </div>
        <div>
        <div className="">
          <button href="#contact" type="button" className="rounded-full hover:bg-gray-100 p-2">
            <span className="p-1">
              Contact Us
            </span>
          </button>
        </div>
        </div>
       </nav>
     </header>
}

export default Navbar;
