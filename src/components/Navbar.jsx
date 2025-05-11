import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
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
  return (
    <nav className="text-zinc-100 bg-gradient-to-r from-[#E63946] via-[#457B9D] to-[#1D3557] p-4 px-10 border-b-2 border-zinc-400">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">SheriVerse</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to={`/${role}/dashboard`}
              className="hover:text-[#F4A261] hover:border-b-2 text-[#E9ECEF] font-semibold transition-colors duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`/about`}
              className="hover:text-[#F4A261] hover:border-b-2 text-[#E9ECEF] font-semibold transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={()=>logoutHandler(role)}
              className="hover:text-[#E63946] hover:border-b-2 text-[#A8DADC] font-semibold transition-colors duration-300"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
