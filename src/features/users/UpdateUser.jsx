import GlobalButton from "../../ui/GlobalButton";

import { Input, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { useCheckAuth } from "../auth/useCheckAuth";
import { useUpdateUser } from "./useUpdateUser";
import { useForm } from "react-hook-form";
import { updatePassword } from "./updateUserServices";
import toast from "react-hot-toast";

const UpdateUser = () => {
  
  const {register,handleSubmit,}=useForm();
  const [password, setNewPass] = useState();
  const { user } = useCheckAuth();
  const { updateUser: updateUserApi, isPending } = useUpdateUser();
  const formData = new FormData();

  function updateUser(data) {
    
    formData.append('avatar',data.avatar[0]);
    updateUserApi(formData);
  }

  async function updateUserPass(e) {
    e.preventDefault();
     formData.append('password',password);
     try{
       const result = await updatePassword(formData);
       toast.success('Password is Changed Successfully');
     }catch(er){
      toast.error(er.message);
    }
  }

  return (
    <div className="text-slate-700">
      <h1 className="my-6 mt-16 text-3xl font-semibold dark:text-slate-50">
        Update User
      </h1>
      <form
      onSubmit={handleSubmit(updateUser)}
        // onSubmit={(e) => updateUser(e)}
        className="mb-10 w-full space-y-7 overflow-hidden rounded-lg bg-white p-10 shadow-md dark:bg-slate-800 max-sm:px-3"
      >
        {/* <div className="mb-4 flex items-center gap-5"></div> */}

        <div className="mb-4 mt-2 flex gap-5 max-md:flex-col max-md:gap-2 md:items-center">
          <Typography
            as="label"
            htmlFor="email"
            type="email"
            color="default"
            className="font-semibold md:basis-56"
          >
            Email
          </Typography>
          <Input
            type="email"
            value={user?.data?.email}
            id="email"
            disabled=""
         
            className="max-w-[350px] dark:border-slate-100/20"
          />
        </div>

        <div className="mb-4 flex gap-5 max-md:flex-col max-md:gap-2 md:items-center">
          <Typography
            as="label"
            htmlFor="name"
            type="small"
            color="default"
            className="font-semibold md:basis-56"
          >
            Full Name
          </Typography>
          <Input
            id="name"
            type="text"
            value={user?.data?.name}
         
            className="max-w-[350px] dark:border-slate-100/20"
          />
        </div>
        <div className="mb-4 flex max-md:flex-col max-md:gap-2 md:items-center">
          <h4 className="text-sm font-semibold leading-snug text-gray-900 dark:text-slate-200 md:basis-[180px] xl:basis-[196px]">
            Update Avatar
          </h4>
          <Typography htmlFor="image" className="">
            <label className="flex h-9 cursor-pointer items-center justify-center rounded-full border border-slate-400 bg-transparent text-xs font-semibold leading-4 text-slate-800 shadow hover:bg-indigo-700 hover:text-white focus:outline-none dark:text-slate-200 max-md:max-w-[350px] md:w-[350px]">
              <input
                type="file"
                id="image"
                className=""
                hidden
                {...register("avatar",{
                  'required':'The avatar is required',
                })}
              />
              Choose
            </label>
          </Typography>
        </div>

        <div className="ms-auto w-fit space-x-2">
          <GlobalButton name="Cancel" type="reset" />

          <GlobalButton name="Update User" type="submit" status={isPending} />
        </div>
      </form>
      <form
        onSubmit={(e) => updateUserPass(e)}
        className="mb-5 space-y-7 rounded-lg p-10 shadow-md dark:bg-slate-800 max-sm:px-3"
      >
        <div className="mb-4 flex items-center gap-5"></div>

        <div className="mb-4 flex gap-5 max-md:flex-col md:items-center">
          <Typography
            as="label"
            htmlFor="fullName"
            type="small"
            color="default"
            className="font-semibold md:basis-56"
          >
            New Password
          </Typography>
          <Input
            id="password"
            type="password"
            defaultValue=""
            onChange={(e) => setNewPass(e.target.value)}
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>

        <div className="ms-auto w-fit space-x-2">
          <GlobalButton name="Cancel" type="reset" />
          <GlobalButton
            name="Update Password"
            type="submit"
            status={isPending}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
