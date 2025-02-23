function Navbar() {
  return <header className="bg-white sticky top-0 w-full shadow-md">
       <nav className="flex justify-center py-4 space-x-5">
         {/* <a href="#home" className="mx-4 hover-scale-25 text-gray-800 hover:text-gray-600">Home</a> */}
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
                Blog
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
