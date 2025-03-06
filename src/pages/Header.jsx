import { Link } from "react-router-dom";
import { useCheckAuth } from "../features/auth/useCheckAuth";
import { FiUser } from "react-icons/fi";

const Header = () => {
  const { user = {} } = useCheckAuth();

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
          {/* <FaSun /> */}
          {/* <span
            onClick={() => setDarkMode((dark) => !dark)}
            className="hover:bg-slate-50 p-2 rounded-full"
          >
            <MdLightMode className="hover:bg-slate-50 text-2xl text-blue-500" />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
