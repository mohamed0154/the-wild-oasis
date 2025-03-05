import { Input, Typography } from "@material-tailwind/react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getSettings, updateSettingsApi } from "./settingsServices";
import Loading from "../../ui/Loading";
import toast from "react-hot-toast";
const Settings = () => {
  const { data = {}, isPending } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });
  const {
    breakfastPrice,
    maxGuestsPerbooking,
    maxBookingLength,
    minBookingLength,
  } = data;

  const queryClient = useQueryClient();

  const { mutate, isPending: isEditting } = useMutation({
    mutationFn: updateSettingsApi,
    onSuccess() {
      toast.success("settings updated Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError() {
      toast.error("There's a proplem");
    },
  });

  function updateSettings(key, value) {
    mutate({ [key]: value });
  }
  console.log(isEditting);
  if (isPending) return <Loading />;
  return (
    <div className="text-slate-700">
      <h1 className="my-6 mt-16 text-3xl font-semibold">
        Update hotel settings
      </h1>
      <form
        onSubmit=""
        className="space-y-7 rounded-lg bg-white p-5 pb-8 shadow-md"
      >
        <div className="mb-4 mt-2 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="minBookingLength"
            type="text"
            color="default"
            className="basis-56 font-semibold"
          >
            min Booking
          </Typography>
          <Input
            type="number"
            defaultValue={minBookingLength}
            id="minBookingLength"
            onBlur={(e) => updateSettings("minBookingLength", e.target.value)}
            disabled={isEditting}
            className="max-w-[350px]"
          />
        </div>

        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="maxBookingLength"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            max Booking
          </Typography>
          <Input
            id="maxBookingLength"
            type="number"
            defaultValue={maxBookingLength}
            onBlur={(e) => updateSettings("maxBookingLength", e.target.value)}
            className="max-w-[350px]"
          />
        </div>
        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="maxGuestsPerbooking"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            maxGuestsPerbooking
          </Typography>
          <Input
            id="maxGuestsPerbooking"
            type="number"
            defaultValue={maxGuestsPerbooking}
            onBlur={(e) =>
              updateSettings("maxGuestsPerbooking", e.target.value)
            }
            className="max-w-[350px]"
          />
        </div>
        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="breakfastPrice"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            Breakfast Price
          </Typography>
          <Input
            id="breakfastPrice"
            type="number"
            defaultValue={breakfastPrice}
            onBlur={(e) => updateSettings("breakfastPrice", e.target.value)}
            className="max-w-[350px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
