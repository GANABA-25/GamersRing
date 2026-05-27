import { Fragment } from "react";

const RecentlyAdded = (props) => {
  return (
    <Fragment>
      <div className="w-[95%] m-auto flex max-[767px]:gap-4 md:gap-5 ">
        <img
          className="max-[767px]:size-32 md:size-48 lg:size-32"
          src={props.image}
          alt="recentImage"
        />
        <div>
          <h1 className="max-[767px]:text-2xl font-payback md:text-4xl lg:text-xl">
            {props.title}
          </h1>
          <p className="opacity-70 md:text-2xl lg:text-xl">{props.date}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default RecentlyAdded;
