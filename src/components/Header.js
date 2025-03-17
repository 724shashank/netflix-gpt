import logo from "../../public/Assets/Netflix_Logo.png";
const Header = () => {
  return (
    <>
      <div className="w-50 absolute  bg-gradient-to-b from-black z-10 ">
        <img src={logo} alt="logo" />
      </div>
    </>
  );
};

export default Header;
