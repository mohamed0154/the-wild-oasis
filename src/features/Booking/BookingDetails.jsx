import { useQuery } from "@tanstack/react-query";
import { FaCheck, FaDollarSign, FaHome } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { showBooking } from "./bookingServices";
import Loading from "../../ui/Loading";
import { formatCurrency } from "../../utilities/helpers";

const BookingDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data: booking = {}, isPending } = useQuery({
    queryKey: ["bookings"],
    queryFn: () => showBooking(id),
  });

  if (isPending) return <Loading />;
  return (
    <div className="mt-5">
      <div className="my-7 mt-14 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Booking #1969</h1>
        <div
          onClick={() => navigate(-1)}
          className="cursor-pointer rounded-md border bg-white px-2 py-1 text-blue-400"
        >
          &larr;
          <span>Back</span>
        </div>
      </div>
      <div className="flex flex-col gap-7 bg-white pb-5">
        <div className="flex items-center gap-3 rounded-se-lg rounded-ss-lg bg-indigo-500 p-5 text-xl font-semibold text-slate-50/80 max-md:flex-col max-md:text-center md:gap-32 md:text-2xl">
          <div className="flex items-center gap-5">
            <FaHome className="text-5xl" />
            <span className="italic">
              {booking?.num_nights} Nights in Cabin {booking?.cabins?.name}
            </span>
          </div>
          <span className="">
            {formatCurrency(booking?.start_at)} —{" "}
            {formatCurrency(booking?.end_at)}
          </span>
        </div>
        <div className="md:mx-10">
          <div className="flex items-center gap-7 max-md:flex-col max-md:gap-1">
            <span className="text-lg font-medium">
              {booking?.guests?.full_name} + {booking?.num_guests} Guests
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-900/50"></span>
            <span className="tracking-wider text-slate-600">
              {booking?.guests?.email}
            </span>

            <span className="h-1 w-1 rounded-full bg-slate-900/50"></span>

            <span className="italic tracking-wider text-slate-600">
              Nationl Id{booking?.guests?.national_id}
            </span>
          </div>

          <div className="mt-5 max-md:text-center">
            <span className="me-4 font-semibold">Observations</span>
            <span>Hi my name is {booking?.guests?.full_name}</span>
          </div>
          <div className="mt-5 flex items-center gap-3 max-md:justify-center">
            <FaCheck className="rounded-full border-2 border-blue-500/50 text-lg text-blue-500/70" />{" "}
            <span className="font-semibold">
              Breakfast included? :{booking?.has_breakfast ? " Yes" : " No"}
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between rounded-md bg-yellow-400/50 p-5 md:mx-10">
          <div className="flex items-center gap-3">
            <FaDollarSign className="rounded-full outline-double" />
            <span className="font-semibold">Total Price is</span>
            <span>{booking?.total_price}</span>
          </div>
          <span>{!booking?.is_paid ? "Will pay at property" : "is Paid"}</span>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
