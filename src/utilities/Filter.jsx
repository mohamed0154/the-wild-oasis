/* eslint-disable react/prop-types */
import { useSearchParams } from "react-router-dom";

const Filter = ({ keyName, labels }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  function makeFilter(label) {
    console.log(label);
    searchParams.set(keyName, label.replace(" ", ""));
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-1 rounded-md border bg-white p-1 dark:bg-slate-800">
      {labels.map((item, key) => (
        <span
          key={key}
          className="filter-style"
          onClick={() => makeFilter(item.label)}
        >
          {item.label}
        </span>
      ))}

      {/* <span className="filter-style">{label2}</span>
      <span className="filter-style">{label3}</span> */}
    </div>
  );
};

export default Filter;
