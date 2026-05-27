import { Fragment } from "react";
import { LuDownload } from "react-icons/lu";
import { useLocation, useNavigate } from "react-router-dom";

const GameComp = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Fragment>
      <div className="border-2 border-gray-400 relative flex flex-col">
        <div
          onClick={() =>
            navigate("/Downloads", {
              state: { payload: props },
            })
          }
          className="cursor-pointer"
        >
          {location.pathname === "/Downloads" ? (
            <>
              <img className="" src={props.image1} alt="downloadimage" />
              <img className="" src={props.image2} alt="downloadimage" />
              <img className="" src={props.image3} alt="downloadimage" />
            </>
          ) : (
            <img src={props.image} alt="pcGamesImage" />
          )}
          <div className="m-2">
            <h1 className="font-payback my-2 max-[767px]:text-md tracking-wide md:text-[1.8rem] lg:text-xl">
              {props.title}
            </h1>

            {location.pathname === "/Downloads" ? (
              <>
                <p className="my-2 leading-7 text-base tracking-wide opacity-80 md:text-2xl lg:text-xl">
                  {props.downloadDescription}
                </p>
                <p className="my-2 leading-7 text-base tracking-wide opacity-80 md:text-2xl lg:text-xl">
                  {props.minimumSystemRequirement}
                </p>
                <p className="my-2 leading-7 text-base tracking-wide opacity-80 md:text-2xl lg:text-xl">
                  {props.recommendedSystemRequirement}
                </p>
                <p className="my-2 leading-7 text-base tracking-wide opacity-80 md:text-2xl lg:text-xl">
                  {props.version}
                </p>
              </>
            ) : (
              <p className="my-2 leading-7 text-base tracking-wide opacity-80 md:text-2xl lg:text-xl">
                {props.description}
              </p>
            )}
          </div>
        </div>
        <button
          onClick={() =>
            navigate("/Downloads", {
              state: { payload: props },
            })
          }
          className="mt-auto m-2 max-[767px]:p-3 max-[767px]:active:bg-blue-700 md:active:bg-blue-700 font-payback flex justify-center items-center gap-5 text-white bg-blue-600 lg:hover:bg-blue-700 group lg:hover:text-red-600 relative transition-all duration-300 md:p-4 lg:p-2"
        >
          <span className="text-white md:text-2xl lg:text-xl">Download</span>
          <span className="lg:group-hover:text-red-600">
            <LuDownload className="max-[767px]:text-2xl md:text-3xl lg:text-2xl" />
          </span>
        </button>
      </div>
    </Fragment>
  );
};

export default GameComp;
