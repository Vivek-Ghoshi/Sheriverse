import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logoutUser } from "../redux/features/AuthSlice";
import { persistor } from "../redux/store/Store";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {role,user} = useSelector(state => state.auth);

    const logoutHandler = async (role)=>{
      await dispatch(logoutUser(role)); 
      await persistor.purge();
      window.location.href = '/';
    }

    const navLinkClass = ({isActive}) =>
       isActive ? "text-red-500 font-semibold" :
       "hover:text-[#F4A261] hover:border-b-2 text-[#E9ECEF] font-semibold transition-colors duration-300"
    
  return (
    <nav className="text-zinc-100 bg-gradient-to-r from-[#E63946] via-[#457B9D] to-[#1D3557] p-4 px-10 border-b-2 border-zinc-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">SheriVerse</h1>
        {user ? <ul className="flex space-x-6">
          <li>
            <NavLink
              to={`/${role}/dashboard`}
              className={navLinkClass}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/about`}
              className={navLinkClass}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={()=>logoutHandler(role)}
              className={navLinkClass}
            >
              Logout
            </NavLink>
          </li>
        </ul> : <ul className="flex space-x-6">
          <li>
            <NavLink
              to={`/`}
              className={navLinkClass}
            >
              Intro
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/login`}
              className={navLinkClass}
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/register'}
              className={navLinkClass}
            >
              Register
            </NavLink>
          </li>
        </ul>}
       
      </div>
    </nav>
  );
};

export default Navbar;
