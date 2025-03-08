import CabinMutation from "./CabinMutation";
import FormModal from "../../ui/FormModal";
import { Dialog } from "@material-tailwind/react";
import { FaEdit } from "react-icons/fa";
import { useDeleteCabin } from "./useDeleteCabin";

// eslint-disable-next-line react/prop-types
const CabinItem = ({ cabin = {} }) => {
  const {
    id: cabinId,
    name,
    max_capacity,
    regular_price,
    discount,
    image,
  } = cabin;

  const { deleteCabin } = useDeleteCabin();

  function deleteItem(cabinId) {
    deleteCabin(cabinId);
  }

  return (
    <>
      <tbody className="group text-center text-sm text-slate-700 dark:text-white">
        <tr className="last:border-1 border-b border-surface">
          <td className="py-1 font-semibold">{name}</td>
          <td className="py-1">{max_capacity}</td>
          <td className="py-1">${regular_price} </td>
          <td className="py-1">{discount || "-"}</td>
          <td className="py-1">
            <img
              className="mx-auto max-w-[100px] max-sm:w-[75px]"
              src={image}
            />
          </td>
          <td className="">
            <CabinMutation
              deleteItem={() => deleteItem(cabinId)}
              cabin={cabin}
              formModal={
                <FormModal cabin={cabin}>
                  <Dialog.Trigger className="flex w-full items-center p-2 text-success hover:bg-slate-100">
                    <FaEdit size={30} className="mr-2 h-4 w-5 stroke-2" />
                    Edit
                  </Dialog.Trigger>
                </FormModal>
              }
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default CabinItem;
