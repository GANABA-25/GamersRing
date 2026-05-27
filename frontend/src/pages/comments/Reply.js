import { useState } from "react";
import Lottie from "lottie-react";
import axios from "axios";

import NormalLoadingAnimation from "../../lottie/Animation - form loading.json";

import { useUserContext } from "../../store/Auth-Context";
import { BsFillSendArrowDownFill } from "react-icons/bs";

const Reply = ({ setShowReplyInput, refreshComments }) => {
  const { commentedUserName } = useUserContext();
  const { commentUserName, id } = commentedUserName;
  const [isLoading, setIsLoading] = useState(false);

  const [replyComment, setReplyComment] = useState({
    replyMessage: "",
    replyUserName: "",
    replyUserEmail: "",
  });

  const textAreaHandler = (e) => {
    setReplyComment((prevState) => {
      return { ...prevState, replyMessage: e.target.value };
    });
  };

  const nameHandler = (e) => {
    setReplyComment((prevState) => {
      return { ...prevState, replyUserName: e.target.value };
    });
  };

  const emailHandler = (e) => {
    setReplyComment((prevState) => {
      return { ...prevState, replyUserEmail: e.target.value };
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        `https://gamerring-backend.onrender.com/user/replyComment/${id}`,
        replyComment
      );

      if (refreshComments) refreshComments();
    } catch (error) {
      console.log("error posting comment", error);
    } finally {
      setIsLoading(false);
    }

    setReplyComment({
      replyMessage: "",
      replyUserName: "",
      replyUserEmail: "",
    });
  };

  const cancelReplyHandler = () => {
    setShowReplyInput(false);
  };
  return (
    <>
      <div className="my-10">
        <form onSubmit={submitHandler}>
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-serif">
              <label className="max-[767px]:text-2xl md:text-4xl lg:text-2xl">
                Reply to {commentUserName}
              </label>
              <h1
                className="cursor-pointer lg:hover:text-blue-600 capitalize"
                onClick={cancelReplyHandler}
              >
                cancel reply
              </h1>
            </div>

            <textarea
              className="max-[767px]:w-[18rem] border border-blue-600 outline-blue-700 p-2 md:w-[20rem]"
              placeholder="Please leave your Message"
              onChange={textAreaHandler}
              value={replyComment.replyMessage}
              required
            />
          </div>
          <div className="max-[767px]:my-4 grid max-[767px]:gap-2 md:my-4 md:gap-4">
            <input
              className="max-[767px]:p-2 border border-blue-600 outline-blue-700 md:p-4 lg:p-3 lg:w-[50%]"
              type="text"
              placeholder="Name: *"
              onChange={nameHandler}
              value={replyComment.replyUserName}
              required
            />
            <input
              className="max-[767px]:p-2 border border-blue-600 outline-blue-700 md:p-4 lg:p-3 lg:w-[50%]"
              type="email"
              placeholder="Email: *"
              onChange={emailHandler}
              value={replyComment.replyUserEmail}
              required
            />
          </div>
          <button className="max-[767px]:w-[12rem] max-[767px]:text-xl max-[767px]:p-2 font-serif bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 md:w-[14rem md text-3xl md:p-4 lg:text-xl lg:p-3">
            Reply Message
            {isLoading ? (
              <Lottie
                className="max-[767px]:w-[2.33rem] md:w-[4rem] lg:w-[3rem]"
                animationData={NormalLoadingAnimation}
                loop={true}
              />
            ) : (
              <BsFillSendArrowDownFill className="flex justify-center items-center" />
            )}
          </button>
        </form>
      </div>
    </>
  );
};

export default Reply;
