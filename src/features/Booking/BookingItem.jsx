/* eslint-disable react/prop-types */
import BookingMutaion from "./BookingMutation";

import { formatCurrency } from "../../utilities/helpers";

const BookingItem = ({ booking = {} }) => {
  const {
    id,
    created_at,
    total_price,
    cabin: { name },
    updated_at,
    is_paid,
    num_nights,
    guest: { name:full_name },
  } = booking;

  return (
    <tbody className="group text-center text-sm text-slate-700 dark:bg-slate-800 dark:text-white">
      <tr className="last:border-1 border-b border-surface">
        <td className="py-1 font-semibold">{name}</td>
        <td className="py-1">{formatCurrency(created_at)}</td>
        <td className="py-1">${total_price}</td>
        <td className="py-1">{formatCurrency(updated_at)}</td>
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
