const HeaderLanding = () => {
  const openMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <div className="w-[960px]">
      <h1 className="text-4xl font-bold mt-6 mb-6">ARCADIA</h1>
    </div>
  );
};

export default HeaderLanding;
