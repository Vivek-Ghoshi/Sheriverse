import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/features/AuthSlice";
import { persistor } from "../redux/store/Store";
import { Menu, X, Shield } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { role, user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const logoutHandler = async (role) => {
    await dispatch(logoutUser(role));
    await persistor.purge();
    window.location.href = "/";
  };

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-[#F94144] font-semibold"
      : "hover:text-[#F4A261] text-[#E9ECEF] font-medium transition-colors duration-300";

  return (
    <nav className="bg-black bg-opacity-90 backdrop-blur-lg shadow-md  w-full z-50 border-b border-zinc-700 h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 text-white text-xl sm:text-2xl font-bold">
          <Shield className="text-[#F4A261] w-8 h-8" />
          SheriVerse
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center h-full">
          {user ? (
            <>
              <li>
                <NavLink to={`/${role}/dashboard`} className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => logoutHandler(role)}
                  className="text-[#E9ECEF] hover:text-red-500 font-medium transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Intro
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" className={navLinkClass}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className={navLinkClass}>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 px-6 py-4 space-y-3 border-t border-zinc-700 mt-20">
          <ul className="flex flex-col space-y-4 text-center">
            {user ? (
              <>
                <li>
                  <NavLink
                    to={`/${role}/dashboard`}
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => {
                      logoutHandler(role);
                      setMenuOpen(false);
                    }}
                    className="text-[#E9ECEF] hover:text-red-500 font-medium"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="/"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Intro
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/login"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className={navLinkClass}
                    onClick={() => setMenuOpen(false)}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
