const HeaderLanding = () => {
  const openMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <div className="w-full">
      <header className="flex p-4 lg:mt-6 align-middle items-center lg:text-black bg-gray-200 lg:bg-white">
        <div>
          <a href="/">
            <h1
              className="font-bold 2xl:text-2xl text-xl transition-all 
            duration-300"
            >
              SOCIAL<span className="font-bold text-orange-400">ink</span>
            </h1>
          </a>
        </div>
        <div>
          <nav className="space-x-14 lg:text-lg lg:flex font-bold hidden">
            <a
              href="/roadmap"
              className="duration-300 transition-all hover:italic hover:border-b-2 hover:border-black/30 border-b-2 border-black/0"
            >
              Roadmap
            </a>
            <a
              className="duration-300 text-orange-600 transition-all hover:italic hover:border-b-2 hover:border-black/30 border-b-2 border-black/0"
              href="/artists"
            >
              Plans for artists
            </a>
          </nav>
        </div>
        <div className="transition-all duration-300 flex text-center space-x-2">
          <button className="bg-gray-200 p-2 rounded-md text-xs">EN</button>
          <button className="bg-gray-200 p-2 rounded-md text-xs">SK</button>
        </div>
        <div class="space-y-1 lg:hidden" onClick={openMenu}>
          <span class="block w-8 h-0.5 bg-gray-600"></span>
          <span class="block w-8 h-0.5 bg-gray-600"></span>
          <span class="block w-8 h-0.5 bg-gray-600"></span>
        </div>
      </header>
      <div className="mobile-menu w-full align-middle justify-center flex lg:hidden">
        <nav className="space-x-12 text-xs font-bold text-center flex">
          <a href="/roadmap" className="mt-4 text-center">
            Roadmap
          </a>
          <a href="/artists" className="mt-4 text-center">
            Plans for artists
          </a>
        </nav>
      </div>
    </div>
  );
};

export default HeaderLanding;
