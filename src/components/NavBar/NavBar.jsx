import NavLink from "./NavLinks";

const navLinks = ["Home", "Contact", "Blog", "Support", "About"];
const NavBar = () => {
  return (
    <ul className="links">
      {navLinks.map((item, index) => {
        return <NavLink text={item} key={index} />;
      })}
    </ul>
  );
};

export default NavBar;
