/* eslint-disable react/prop-types */
import { Button } from "@material-tailwind/react";

const GlobalButton = ({ name, type, status = false }) => {
  if (type === "reset")
    return (
      <Button
        type={type}
        disabled={status}
        className="border-none bg-transparent text-slate-700 hover:bg-red-500 hover:text-white hover:outline-offset-2 hover:ring-2 hover:ring-red-300"
      >
        {name}
      </Button>
    );

  return (
    <Button
      type={type}
      disabled={status}
      className="border-none bg-indigo-700 hover:bg-indigo-600 hover:outline-offset-2 hover:ring-2"
    >
      {name}
    </Button>
  );
};

export default GlobalButton;
