import { Dialog, Typography } from "@material-tailwind/react";
import ModalHeader from "./ModalHeader";
import { useContext, useState } from "react";

import { DarkContext } from "../App";
import Form from "./Form";

// eslint-disable-next-line react/prop-types
const FormModal = ({ cabin = {}, children }) => {
  const [open, setOpen] = useState();

  const { darkMood } = useContext(DarkContext);

  return (
    <Dialog open={open} onChange={setOpen} size="md">
      {children}
      <Dialog.Overlay>
        <div className={`${darkMood && "dark"} `}>
          <Dialog.Content className="dark:bg-slate-800 dark:text-slate-200 max-sm:w-[95%]">
            {/* //Header */}
            <ModalHeader />
            {/* Form */}
            <Form cabin={cabin} setOpen={setOpen} />
            {/* Footer */}
            <Typography
              type="small"
              className="mb-2 mt-3 flex items-center justify-center gap-1 text-foreground"
            ></Typography>
          </Dialog.Content>
        </div>
      </Dialog.Overlay>
    </Dialog>
  );
};

export default FormModal;
