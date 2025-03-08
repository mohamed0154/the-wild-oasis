import {
  Dialog,
  Button,
  Input,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import ModalHeader from "./ModalHeader";
import { useContext, useState } from "react";
import { useInsertCabin } from "../features/cabins/useInsertcabin";
import { useUpdateCabin } from "../features/cabins/useUpdateCabin";
import { DarkContext } from "../App";

// eslint-disable-next-line react/prop-types
const FormModal = ({ cabin = {}, children }) => {
  const [open, setOpen] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    defaultValues: cabin,
  });

  const { insertCabin } = useInsertCabin();
  const { updateCabin } = useUpdateCabin();
  const { darkMood } = useContext(DarkContext);

  function submitData(data) {
    let cabinRow;
    if (typeof data.image === "object") {
      cabinRow = { ...data, image: data.image[0].name };
    } else {
      cabinRow = { ...data };
    }
    if (cabin?.name) {
      updateCabin(cabinRow);
      setOpen(false);
    } else {
      // const cabinRow = { ...data, image: data.image[0].name };
      insertCabin(cabinRow);
    }
  }

  return (
    <Dialog open={open} onChange={setOpen} size="md">
      {children}
      <Dialog.Overlay>
        <div className={`${darkMood && "dark"} `}>
          <Dialog.Content className="dark:bg-slate-800 dark:text-slate-200 max-sm:w-[95%]">
            {/* //Header */}
            <ModalHeader />
            {/* Form */}
            <form
              onSubmit={handleSubmit(submitData)}
              className="scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200/20 mt-6 overflow-auto pe-2 max-sm:h-[70vh]"
            >
              <div className="mb-4 mt-2 space-y-1.5">
                <Typography
                  as="label"
                  htmlFor="name"
                  type="text"
                  color="default"
                  className="darkLabel"
                >
                  Name
                </Typography>
                <Input
                  type="text"
                  id="name"
                  {...register("name", {
                    required: "Fill the field",
                  })}
                  className="darkInput"
                />
                <span className="mt-1 block bg-red-200 ps-1 italic tracking-wider text-red-700 shadow-md">
                  {errors?.name?.message}
                </span>
              </div>

              <div className="mb-4 space-y-1.5">
                <Typography
                  as="label"
                  htmlFor="capacity"
                  type="small"
                  color="default"
                  className="darkLabel"
                >
                  Capacity
                </Typography>
                <Input
                  id="max_capacity"
                  {...register("max_capacity", {
                    required: "Fill the field",
                  })}
                  type="number"
                  className="darkInput"
                />
                <span className="mt-1 block bg-red-200 ps-1 italic tracking-wider text-red-700 shadow-md">
                  {errors?.max_capacity?.message}
                </span>
              </div>
              <div className="mb-4 space-y-1.5">
                <Typography
                  as="label"
                  htmlFor="price"
                  type="small"
                  color="default"
                  className="darkLabel"
                >
                  Price
                </Typography>
                <Input
                  id="regular_price"
                  {...register("regular_price", {
                    required: "Fill the field",
                  })}
                  type="number"
                  className="darkInput"
                />
                <span className="mt-1 block bg-red-200 ps-1 italic tracking-wider text-red-700 shadow-md">
                  {errors?.regular_price?.message}
                </span>
              </div>
              <div className="mb-4 space-y-1.5">
                <Typography
                  as="label"
                  htmlFor="discount"
                  type="small"
                  color="default"
                  className="darkLabel"
                >
                  Discount
                </Typography>
                <Input
                  id="discount"
                  {...register("discount", {
                    required: "Fill the field",
                  })}
                  type="number"
                  className="darkInput"
                />
                <span className="mt-1 block bg-red-200 ps-1 italic tracking-wider text-red-700 shadow-md">
                  {errors?.discount?.message}
                </span>
              </div>
              <div className="mb-4 space-y-1.5">
                <Typography
                  as="label"
                  htmlFor="password"
                  type="small"
                  color="default"
                  className="darkLabel"
                >
                  Description
                </Typography>
                <Textarea
                  rows={4}
                  id="description"
                  {...register("description", {
                    required: "Fill the field",
                  })}
                  type="text"
                  className="darkInput"
                />
                <span className="mt-1 block bg-red-200 ps-1 italic tracking-wider text-red-700 shadow-md">
                  {errors?.description?.message}
                </span>
              </div>
              <div className="mb-4 flex items-center gap-2">
                <h4 className="text-sm font-semibold leading-snug text-gray-900 dark:text-slate-200">
                  Choose Cabin Image
                </h4>
                <Typography htmlFor="image">
                  <label className="flex h-9 w-28 cursor-pointer flex-col items-center justify-center rounded-full border border-slate-400 bg-transparent px-2 text-xs font-semibold leading-4 text-slate-800 shadow hover:bg-indigo-700 hover:text-white focus:outline-none dark:text-slate-200">
                    <input
                      type="file"
                      id="image"
                      {...register("image", {
                        required: getValues().image ? false : "fill the field",
                      })}
                      hidden
                    />
                    Choose
                  </label>
                  <span className="mt-1 block bg-red-200 ps-1 italic tracking-wider text-red-700 shadow-md">
                    {errors?.image?.message}
                  </span>
                </Typography>
              </div>

              <Button
                type="submit"
                className="border-none bg-[#4f46e5] hover:bg-[#4e46e5e5] hover:ring-2 hover:ring-[#4e46e5c9] hover:ring-offset-1 dark:ring-offset-secondary-light"
                isFullWidth
              >
                {cabin?.name ? "Update" : "Add"}
              </Button>
            </form>
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
