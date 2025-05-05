import { Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { useSignup } from "../auth/useSignup";
import GlobalButton from "../../ui/GlobalButton";

const CreateUser = () => {
  const { register, handleSubmit, getValues, formState } = useForm();
  const { signup, isPending } = useSignup();
  
  console.log(formState);
  function submitData(data) {
    const userDataStore = new FormData();
    userDataStore.append('name',data.name);
    userDataStore.append('email',data.email);
    userDataStore.append('password',data.password);
    userDataStore.append('password_confirmation',data.password_confirmation);
    console.log(userDataStore);
    signup(userDataStore);
  }

  return (
    <div className="text-slate-700">
      <h1 className="my-6 mt-16 text-3xl font-semibold dark:text-slate-200">
        Create User
      </h1>
      <form
        onSubmit={handleSubmit(submitData)}
        className="space-y-7 rounded-lg bg-white p-10 shadow-md dark:bg-slate-800 max-sm:px-3"
      >
        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="fullName"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            Full Name
          </Typography>
          <div className="w-full">
            <Input
              type="text"
              id="name"
              {...register("name", {
                required: "Fill The Field",
              })}
              defaultValue=""
              className="max-w-[350px] dark:border-slate-50/20"
            />
            {formState?.fullName && (
              <span className="bg-red-500 p-2 text-white">
                {formState?.fullName?.message}
              </span>
            )}
          </div>
        </div>

        <div className="mb-4 mt-2 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="email"
            type="email"
            color="default"
            className="basis-56 font-semibold"
          >
            Email
          </Typography>
          <Input
            type="email"
            defaultValue=""
            id="email"
            {...register("email", {
              required: "Fill The Field",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            disabled=""
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>

        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="password"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            Password
          </Typography>
          <Input
            id="password"
            type="password"
            {...register("password", {
              required: "Fill The Field",
              minLength: {
                value: 8,
                message: "must be less than 8 Characters",
              },
            })}
            className="max-w-[350px] dark:border-slate-50/20"
          />
          {formState?.password?.message}
        </div>
        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="password_confirmation"
            type="password"
            color="default"
            className="basis-56 font-semibold"
          >
            Confirm Password
          </Typography>
          <Input
            id="password_confirmation"
            type="password"
            {...register("password_confirmation", {
              required: "Fill The Field",
              validate: (value) => value === getValues().password,
            })}
            defaultValue=""
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>
        <div className="ms-auto w-fit space-x-2">
          <GlobalButton name="Cancel" type="reset" />
          <GlobalButton name="Create User" type="submit" status={isPending} />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
