/* eslint-disable react/prop-types */
import { IconButton, Menu } from "@material-tailwind/react";
import { FaTrash } from "react-icons/fa";
import { FiCopy, FiMoreVertical } from "react-icons/fi";
import { useDuplicateCabin } from "./useDuplicateCabin";

const CabinMutation = ({ deleteItem, cabin, formModal }) => {
  const { name, regular_price, max_capacity, discount, description, image } =
    cabin;
  const { duplicateCabin: duplicateCabinApi } = useDuplicateCabin();

  function duplicateCabin() {
    const cabinCopy = {
      name,
      regular_price,
      max_capacity,
      discount,
      description,
      image,
    };
    duplicateCabinApi(cabinCopy);
  }

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
          <Menu.Item onClick={duplicateCabin}>
            <FiCopy className="mr-2 h-4 w-4 stroke-2" />
            Dupliicate
          </Menu.Item>
          {/* Form Modal */}
          {formModal}

          <Menu.Item
            onClick={deleteItem}
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

export default CabinMutation;
