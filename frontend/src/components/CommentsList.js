import { format } from "date-fns";
import { useUserContext } from "../store/Auth-Context";
import { Fragment } from "react";

const CommentsList = (props) => {
  const { setCommentedUserName } = useUserContext();
  const formattedDate = format(
    new Date(props.createdAt),
    "MMMM dd, yyyy 'at' hh:mm a"
  );

  const showInputHandler = () => {
    props.setShowReplyInput(true);
    setCommentedUserName({ commentUserName: props.userName, id: props._id });
  };

  return (
    <Fragment>
      <div className="border-b-4 border-dotted lg:border-b-2">
        <div className="my-4 max-[767px]:text-[1rem] md:text-2xl lg:text-xl ">
          <div className="flex items-center max-[767px]:gap-2 md:gap-3 lg:gap-4">
            <h1 className="font-serif font-bold lg:text-[0.9rem]">
              {props.userName}
            </h1>
            <p className="opacity-80 max-[767px]:text-[0.9rem] lg:text-sm">
              {formattedDate}
            </p>
          </div>
          <p className="lg:text-[1rem] break-all">{props.comment}</p>
          <p
            onClick={showInputHandler}
            className="my-2 hover:text-blue-600 cursor-pointer opacity-80 lg:text-sm"
          >
            Reply
          </p>
        </div>
        {props.replies && props.replies.length > 0 && (
          <div className="max-[767px]:my-4 lg:mx-10">
            {props.replies.map((reply) => {
              const replyFormattedDate = format(
                new Date(reply.createdAt),
                "MMMM dd, yyyy 'at' hh:mm a"
              );

              return (
                <div
                  key={reply._id}
                  className="mb-4 max-[767px]:text-[1rem] md:text-2xl lg:text-xl"
                >
                  <div className="flex items-center max-[767px]:gap-2 md:gap-3 lg:gap-4">
                    <h1 className="font-serif font-bold lg:text-[0.9rem]">
                      {reply.replyUserName}
                    </h1>
                    <p className="opacity-80 max-[767px]:text-[0.9rem] lg:text-sm">
                      {replyFormattedDate}
                    </p>
                  </div>
                  <p className="lg:text-[1rem] break-all">
                    {reply.replyMessage}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CommentsList;
