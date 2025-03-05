/* eslint-disable react/prop-types */
import { TEModalFooter, TERipple } from "tw-elements-react";
import Button from "./Button";

const ModalFooter = ({ setShowModal }) => {
  return (
    <TEModalFooter>
      <TERipple rippleColor="light">
        <button
          type="button"
          className="bg-primary-100 text-primary-700 hover:bg-primary-accent-100 focus:bg-primary-accent-100 active:bg-primary-accent-200 inline-block rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </TERipple>
      <TERipple rippleColor="light">
        <Button type="primary">Save changes</Button>
      </TERipple>
    </TEModalFooter>
  );
};

export default ModalFooter;
