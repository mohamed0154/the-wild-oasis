import { Typography, Dialog, IconButton } from "@material-tailwind/react";
import { FaTimes } from "react-icons/fa";
const ModalHeader = () => {
  return (
    <>
      <Dialog.DismissTrigger
        as={IconButton}
        size="sm"
        variant="ghost"
        color="secondary"
        className="absolute right-2 top-2"
        isCircular
      >
        <FaTimes size={20} />
      </Dialog.DismissTrigger>
      <Typography type="h6" className="mb-1">
        Create cabin
      </Typography>
      <Typography className="text-foreground">
        Enter your Cabin details.
      </Typography>
    </>
  );
};

export default ModalHeader;
