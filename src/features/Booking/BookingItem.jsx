/* eslint-disable react/prop-types */

// import { formatCurrency } from "../../utilities/helpers";
// import { formatCurrency } from "../../utilities/helpers";
import { formatCurrency } from "../../utilities/helpers";
import BookingMutaion from "./BookingMutation";

const BookingItem = ({ booking = {} }) => {
  const {
    id,
    start_at,
    total_price,
    cabins: { name },
    end_at,
    is_paid,
    num_nights,
    guests: { full_name },
  } = booking;
  return (
    <tbody className="group text-center text-sm text-slate-700 dark:bg-slate-800 dark:text-white">
      <tr className="last:border-1 border-b border-surface">
        <td className="py-1 font-semibold">{name}</td>
        <td className="py-1">{formatCurrency(start_at)}</td>
        <td className="py-1">${total_price}</td>
        <td className="py-1">{formatCurrency(end_at)}</td>
        <td className="py-1">{is_paid ? "Paid" : "Not Paid"}</td>
        <td className="py-1">{num_nights}</td>
        <td className="py-1 font-semibold">{full_name}</td>
        <td className="">
          <BookingMutaion id={id} />
        </td>
      </tr>
    </tbody>
  );
};

export default BookingItem;
