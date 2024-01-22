import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">Evo-lutions</div>
      <ul className="nav-menu">
        <li className="links">Home</li>
        <li className="links">Services</li>
        <li className="links">About</li>
        <li className="links">Explore</li>
        <li className="nav-contact">Contact Us</li>
      </ul>
    </div>
  );
};
export default NavBar;
