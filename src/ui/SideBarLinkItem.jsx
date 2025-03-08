/* eslint-disable react/prop-types */
import { List } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SideBarLinkItem = ({ linkName, to, icon }) => {
  return (
    <>
      <Link to={to} className="ms-5">
        {" "}
        <List.Item className="flex items-center gap-2 dark:hover:bg-slate-900">
          <span className="dark:text-blue-300">{icon}</span>
          <span className="font-semibold dark:text-slate-200">{linkName}</span>
        </List.Item>
      </Link>

      <hr className="-mx-3 my-3 border-secondary dark:border-slate-100/10" />
    </>
  );
};

export default SideBarLinkItem;
