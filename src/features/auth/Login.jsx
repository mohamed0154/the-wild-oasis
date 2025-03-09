import logoLight from "../../assets/logo-light.png";
import Loading from "../../ui/Loading";

import { useForm } from "react-hook-form";
import { useLogin } from "./useLogin";
import { useRedirect } from "./useRedirect";

const Login = () => {
  const { register, handleSubmit, formState: errors } = useForm();
  const { isPending: isLoading } = useRedirect();
  const { login, isPending } = useLogin();

  function submitData(data) {
    const { email, password } = data;
    if (email && password) {
      login({ email, password });
    }
  }

  if (isLoading) return <Loading />;

  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-slate-900 dark:text-slate-200">
      <div className="flex w-full flex-col gap-10">
        <img
          src={logoLight}
          className="max-w-auto mx-auto w-[150px] dark:brightness-200"
        />

        <h1 className="text-center text-3xl font-bold">
          Login to your account
        </h1>
        <form
          onSubmit={handleSubmit(submitData)}
          className="mx-auto w-[90%] space-y-4 overflow-hidden rounded-lg bg-white px-3 py-10 dark:bg-slate-800 md:w-[500px] md:px-10"
        >
          <div className="flex flex-col gap-2">
            <label
              id="email"
              className="font-sans text-sm font-semibold text-slate-800 antialiased dark:text-white"
            >
              Email
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Fill the Field",
              })}
              defaultValue="mf@gmail.com"
              disabled={isPending}
              placeholder="someone@example.com"
              type="email"
              className="peer rounded-md border border-slate-200 bg-transparent px-2.5 py-2 text-sm text-slate-800 shadow-sm outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 data-[error=true]:border-red-500 data-[success=true]:border-green-500 data-[icon-placement=end]:pe-9 data-[icon-placement=start]:ps-9 hover:border-green-400 hover:ring-slate-800/10 focus:outline-none focus:ring-slate-800/10 dark:text-white"
              data-error="false"
              data-success="false"
              data-icon-placement=""
            />
            {/* </div> */}
            <span className="text-red-400">{errors?.email?.message}</span>
          </div>
          <div className="flex flex-col gap-2">
            <label
              id="password"
              className="font-sans text-sm font-semibold text-slate-800 antialiased dark:text-white"
            >
              Password
            </label>
            <input
              defaultValue="mohamed"
              id="password"
              {...register("password", {
                required: "Fill the Field",
              })}
              disabled={isPending}
              placeholder="Password"
              type="password"
              className="peer w-full rounded-md border border-slate-200 bg-transparent px-2.5 py-2 text-sm text-slate-800 shadow-sm outline-none ring ring-transparent transition-all duration-300 ease-in placeholder:text-slate-600/60 data-[error=true]:border-red-500 data-[success=true]:border-green-500 data-[icon-placement=end]:pe-9 data-[icon-placement=start]:ps-9 hover:border-green-400 hover:ring-slate-800/10 focus:outline-none focus:ring-slate-800/10 dark:text-white"
              data-error="false"
              data-success="false"
              data-icon-placement=""
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full translate-y-4 rounded-md border border-blue-500 bg-blue-500 px-4 py-3 text-center font-sans text-sm font-semibold text-blue-50 shadow-sm transition-all duration-300 ease-in data-[width=full]:w-full data-[shape=pill]:rounded-full hover:border-blue-400 hover:bg-blue-400 hover:shadow-md focus:shadow-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
