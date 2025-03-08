import { Link } from "react-router-dom";
import { useCheckAuth } from "../features/auth/useCheckAuth";
import { FiUser } from "react-icons/fi";
import { MdLightMode } from "react-icons/md";
import { useContext } from "react";
import { DarkContext } from "../App";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const { user = {} } = useCheckAuth();
  const { darkMood, setDarkMood } = useContext(DarkContext);

  return (
    <div className="border-s border-slate-400/20 bg-white p-3 dark:bg-slate-800">
      <div className="ms-auto flex w-fit items-center gap-2">
        <div className="flex items-center gap-3">
          <img
            src={user?.user_metadata?.avatar}
            className="h-[40px] w-[40px] rounded-full"
            alt=""
          />
          <span className="font-sans text-sm font-semibold max-sm:max-h-11 max-sm:max-w-36 max-sm:overflow-hidden">
            {user?.user_metadata?.fullName}
          </span>
        </div>
        <div className="flex">
          <Link to="/updateUser" className="rounded-full p-2 hover:bg-slate-50">
            <FiUser className="text-2xl text-blue-500" />
          </Link>

          <span
            onClick={() => setDarkMood((dark) => !dark)}
            className="cursor-pointer rounded-full p-2 hover:bg-slate-50 dark:hover:bg-slate-50"
          >
            {darkMood ? (
              <MdLightMode className="text-2xl text-blue-500" />
            ) : (
              <FaMoon color="#6054fd" size={25} className="m-0 text-blue-500" />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
