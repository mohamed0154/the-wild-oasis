import { Card } from "@material-tailwind/react";

import logoLight from "../assets/logo-light.png";
import SideBarLinks from "../ui/SideBarLinks";
const SideBarBody = () => {
  return (
    <Card className="border-none shadow-none">
      <Card.Body className="mt-5 p-3">
        {/* Logo */}
        <img src={logoLight} className="max-w-auto mx-auto w-[150px]" />
        {/* Links */}
        <SideBarLinks />
        {/* /////// */}
      </Card.Body>
      <Card.Footer className="p-3"></Card.Footer>
    </Card>
  );
};

export default SideBarBody;
