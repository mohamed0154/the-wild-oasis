import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "./bookingServices";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,

    onSuccess() {
      toast.success("The Booking Deleted Successfuly");
      queryClient.invalidateQueries({
        queryKey: ["bookings"],
      });
    },

    onError() {
      toast.error("There's a Proplem");
    },
  });

  return { deleteBooking };
}
