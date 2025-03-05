import { Typography } from "@material-tailwind/react";

// eslint-disable-next-line react/prop-types
const Loading = () => {
  return (
    <div className="absolute left-[50%] top-[45%] max-w-full translate-x-[-50%] translate-y-[-50%] animate-pulse">
      <Typography
        as="div"
        variant="h1"
        className="mb-4 h-3 w-56 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
      <Typography
        as="div"
        variant="paragraph"
        className="mb-2 h-2 w-72 rounded-full bg-gray-300"
      >
        &nbsp;
      </Typography>
    </div>
  );
};

export default Loading;
