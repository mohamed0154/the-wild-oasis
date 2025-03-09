import CabinItem from "./CabinItem";
import FormModal from "../../ui/FormModal";
import Filter from "../../utilities/Filter";
import Loading from "../../ui/Loading";

import { getCabins } from "./cabinServices";
import { useQuery } from "@tanstack/react-query";
import { Dialog } from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";

const Cabins = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const label = searchParams.get("filter");
  let filterData;

  const { data = [], isPending } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  /////////////Filter
  if (label === "NoDiscound") {
    filterData = data.filter((cabin) => cabin.discount === 0);
  } else if (label === "WithDiscound") {
    filterData = data.filter((cabin) => cabin.discount > 0);
  } else {
    if (!label) {
      searchParams.set("filter", "all");
      setSearchParams(searchParams);
    }
    filterData = data;
  }

  if (isPending) return <Loading />;

  return (
    <>
      <div className="mt-10 max-sm:mx-auto max-sm:w-[350px]">
        <div className="my-8 flex items-center justify-between gap-3 max-sm:flex-col">
          <h1 className="text-3xl font-bold">All Cabins</h1>
          <Filter
            keyName="filter"
            labels={[
              {
                label: "all",
              },
              { label: "With Discound" },
              { label: "No Discound" },
            ]}
          />
        </div>
        <div className="max-h-[550px] overflow-auto rounded-lg border border-surface bg-white scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-blue-500 dark:bg-slate-800">
          <table className="max-h-[600px] w-full overflow-auto scrollbar-thin scrollbar-track-gray-200 scrollbar-thumb-blue-500">
            <thead className="border-b border-surface bg-slate-100 text-sm font-medium text-foreground dark:bg-surface-dark">
              <tr>
                <th className="px-2.5 py-4 text-center font-semibold">Name</th>
                <th className="px-2.5 py-4 text-center font-semibold">
                  Capacity
                </th>
                <th className="px-2.5 py-4 text-center font-semibold">Price</th>
                <th className="px-2.5 py-4 text-center font-semibold">
                  Discount
                </th>
                <th className="px-2.5 py-4 text-center font-semibold">Image</th>
                <th className="px-2.5 py-4 text-center font-semibold"></th>
                <th className="px-2.5 py-4 text-center font-semibold"></th>
              </tr>
            </thead>
            {filterData?.map((item) => (
              <CabinItem key={item.id} cabin={item} />
            ))}
          </table>
        </div>
      </div>
      <div className="my-5 flex items-end justify-center">
        <FormModal>
          <Dialog.Trigger className="rounded-md bg-[#4f46e5] px-7 py-3 text-white hover:bg-[#4e46e5e5]">
            Create Cabin
          </Dialog.Trigger>
        </FormModal>
      </div>
    </>
  );
};

export default Cabins;
