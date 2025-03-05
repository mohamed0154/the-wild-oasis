import { Alert } from "@material-tailwind/react";
import { FaExclamationTriangle } from "react-icons/fa";

const NotFound = () => {
  return (
    <Alert className="m-5 w-64 border-none bg-white text-slate-700">
      <Alert.Icon>
        <FaExclamationTriangle />
      </Alert.Icon>
      <Alert.Content>Page Not Found.</Alert.Content>
    </Alert>
  );
};

export default NotFound;
