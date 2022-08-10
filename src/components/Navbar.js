import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <img className="logo" src="images/Calendly-Logo.jpeg" alt="" />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/individuals">Individuals</Link>
        <Link to="/teams">Teams</Link>
        <Link to="/enterprise">Enterprise</Link>
      </div>
    </nav>
  );
};

export default Navbar;
