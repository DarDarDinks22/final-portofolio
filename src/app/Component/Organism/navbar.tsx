
const NavBar = () => {
  return (
    <div className="flex justify-evenly p-4 text-large fixed top-0 font-semibold z-50 w-full h-screen">
      <a href="#home">HOME</a>
      <a href="#project">PROJECT</a>
      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>
    </div>
  );
};

export default NavBar;