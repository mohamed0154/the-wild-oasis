/* eslint-disable react/prop-types */
import { Card } from "@material-tailwind/react";

import logoLight from "../assets/logo-light.png";
import SideBarLinks from "../ui/SideBarLinks";
const SideBarBody = () => {
  return (
    <Card className="border-none shadow-none dark:bg-slate-800">
      <Card.Body className="mt-5 p-3">
        {/* Logo */}
        <img
          src={logoLight}
          className="max-w-auto mx-auto w-[150px] dark:brightness-200"
        />
        {/* Links */}
        <SideBarLinks />
        {/* /////// */}
      </Card.Body>
      <Card.Footer className="p-3"></Card.Footer>
    </Card>
  );
};

export default SideBarBody;
