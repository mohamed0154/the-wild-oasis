import { useQuery } from "@tanstack/react-query";
import { showBookings } from "./bookingServices";
import Loading from "../../ui/Loading";
import BookingItem from "./BookingItem";

const BookingsShow = () => {
  const { data = [], isPending } = useQuery({
    queryKey: ["bookings"],
    queryFn: showBookings,
  });

  if (isPending) return <Loading />;
  return (
    <div className="mx-auto mt-10 h-[600px] max-sm:mx-auto max-sm:w-[350px]">
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Bookings</h1>
        <span>filter</span>
      </div>
      <div className="overflow-auto rounded-lg border border-surface bg-white">
        <table className="w-full">
          <thead className="border-b border-surface bg-slate-100 text-sm font-semibold text-foreground dark:bg-surface-dark">
            <tr>
              <th className="px-2.5 py-4 text-center">Cabin</th>
              <th className="px-2.5 py-4 text-center">Start</th>
              <th className="px-2.5 py-4 text-center">Price</th>
              <th className="px-2.5 py-4 text-center">End</th>
              <th className="px-2.5 py-4 text-center">Paid</th>
              <th className="px-2.5 py-4 text-center">Nights</th>

              <th className="px-2.5 py-4 text-center">Guest</th>
              <th className="px-2.5 py-4 text-center"></th>
            </tr>
          </thead>
          {Array.isArray(data) &&
            data.map((item) => <BookingItem key={item.id} booking={item} />)}
        </table>
      </div>
    </div>
  );
};

export default BookingsShow;
