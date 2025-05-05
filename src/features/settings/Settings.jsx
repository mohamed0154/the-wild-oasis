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
    breakfast_price,
    max_guests_per_booking,
    max_booking_length,
    min_booking_length,
  } = data;
  const queryClient = useQueryClient();

  const { mutate, isPending: isEditting } = useMutation({
    mutationFn: updateSettingsApi,
    //
    onSuccess() {
      toast.success("settings updated Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    //
    onError() {
      toast.error("There's a proplem");
    },
  });

  function updateSettings(key, value) {
    const formData = new FormData();
    formData.append(key,value);
    mutate(formData);
  }

  if (isPending) return <Loading />;

  return (
    <div className="text-slate-700">
      <h1 className="my-6 mt-16 text-3xl font-semibold dark:text-slate-200">
        Update hotel settings
      </h1>
      <form
        onSubmit=""
        className="space-y-7 rounded-lg bg-white p-10 shadow-md dark:bg-slate-800 max-sm:px-3"
      >
        <div className="mb-4 mt-2 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="min_booking_length"
            type="text"
            color="default"
            className="basis-56 font-semibold"
          >
            min Booking
          </Typography>
          <Input
            type="number"
            defaultValue={min_booking_length}
            id="min_booking_length"
            onBlur={(e) => updateSettings("min_booking_length", e.target.value)}
            disabled={isEditting}
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>

        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="max_booking_length"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            max Booking
          </Typography>
          <Input
            id="max_booking_length"
            type="number"
            defaultValue={max_booking_length}
            onBlur={(e) => updateSettings("max_booking_length", e.target.value)}
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>
        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="max_guests_per_booking"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            maxGuestsPerbooking
          </Typography>
          <Input
            id="max_guests_per_booking"
            type="number"
            defaultValue={max_guests_per_booking}
            onBlur={(e) =>
              updateSettings("max_guests_per_booking", e.target.value)
            }
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>
        <div className="mb-4 flex items-center gap-5">
          <Typography
            as="label"
            htmlFor="breakfast_price"
            type="small"
            color="default"
            className="basis-56 font-semibold"
          >
            Breakfast Price
          </Typography>
          <Input
            id="breakfast_price"
            type="number"
            defaultValue={breakfast_price}
            onBlur={(e) => updateSettings("breakfast_price", e.target.value)}
            className="max-w-[350px] dark:border-slate-50/20"
          />
        </div>
      </form>
    </div>
  );
};

export default Settings;
