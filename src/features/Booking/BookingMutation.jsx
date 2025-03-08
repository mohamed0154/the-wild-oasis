/* eslint-disable react/prop-types */
import { IconButton, Menu } from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import { FiEye, FiMoreVertical } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDeleteBooking } from "./useDeleteBooking";

const BookingMutaion = ({ id }) => {
  const { deleteBooking } = useDeleteBooking();
  const navigate = useNavigate();

  return (
    <div className="w-full text-end">
      <Menu>
        <Menu.Trigger
          as={IconButton}
          variant="ghost"
          color="secondary"
          size="sm"
        >
          <FiMoreVertical className="h-4 w-4 stroke-2" />
        </Menu.Trigger>
        <Menu.Content className="min-w-[120px]">
          <Menu.Item onClick={() => navigate(`${id}`)}>
            <FiEye className="mr-2 h-4 w-4 stroke-2 text-indigo-500" />
            Show
          </Menu.Item>
          {/* <Menu.Item>
            <FaCheckCircle className="text-green-500 mr-2 h-4 w-4 stroke-2" />
            Check in
          </Menu.Item> */}

          <Menu.Item
            onClick={() => deleteBooking(id)}
            className="text-error hover:bg-error/10 hover:text-error focus:bg-error/10 focus:text-error"
          >
            <FaTrash className="mr-2 h-4 w-4 stroke-2" />
            Delete
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  );
};

export default BookingMutaion;
