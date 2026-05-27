import { Fragment, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

import NavigationBar from "../../components/NavigationBar";
import ScrollToTop from "../../components/ScrollToTop";
import CommentsList from "../../components/CommentsList";
import Comments from "../comments/Comments";
import Reply from "../comments/Reply";
import Modal from "../../components/modal/modal";
import Footer from "../Footer";

import { LuDownload } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoCloseSharp } from "react-icons/io5";

function StringSplitter({ text, delimiter }) {
  const parts = text.split(delimiter);

  return (
    <div>
      {parts.map((part, index) => (
        <p key={index}>{part}</p>
      ))}
    </div>
  );
}

const Downloads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedComments, setFetchedComments] = useState([]);
  const [showReplyInput, setShowReplyInput] = useState(false);
  const { state } = useLocation();
  const payload = state?.payload || {};

  const myString = payload.minimumSystemRequirement;
  const myString2 = payload.recommendedSystemRequirement;
  const myString4 = payload.downloadDescription;
  const delimiter = ",";

  const fetchGameComments = async () => {
    if (!payload || !payload.gameId) return;
    const gameId = payload.gameId;

    try {
      const response = await axios.get(
        `https://gamerring-backend.onrender.com/user/gameComments/${gameId}`
      );
      setFetchedComments(response.data.comments);
    } catch (error) {
      console.log("Error fetching comments ", error);
    }
  };

  useEffect(() => {
    fetchGameComments();
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <ScrollToTop />
      <div className="max-[767px]:mb-[6.7rem] md:mb-[8.7rem] lg:my-[4.3rem]">
        <NavigationBar />
      </div>

      <div className="max-[767px]:w-[95%] md:w-[95%] m-auto mt-0.5">
        <img
          className="lg:w-screen lg:h-[25rem]"
          src={payload.image}
          alt="downloadPage"
        />
        <div className="max-[767px]:my-2 grid grid-cols-3 gap-2 md:my-2 lg:my-2">
          <img src={payload.image1} alt="downloadPage" />
          <img src={payload.image2} alt="downloadPage" />
          <img src={payload.image3} alt="downloadPage" />
        </div>

        <section>
          <div className="max-[767px]:mb-4 md:mb-6">
            <h1 className="max-[767px]:text-3xl max-[767px]:my-2 font-bold font-payback tracking-wider md:text-5xl md:my-4 lg:text-3xl">
              {payload.title}
            </h1>
            <div className="font-serif md:text-xl tracking-wider lg:text-sm">
              <StringSplitter text={myString4} delimiter={delimiter} />
            </div>
          </div>

          {payload.minimumSystemRequirement &&
            payload.recommendedSystemRequirement && (
              <div>
                <h1 className="max-[767px]:text-3xl underline underline-offset-4 font-payback tracking-wider md:text-5xl lg:text-3xl">
                  SYSTEM REQUIREMENTS
                </h1>

                <span className="font-serif">
                  <h1 className="max-[767px]:my-2 font-bold tracking-wider md:text-xl md:my-3">
                    MINIMUM REQUIREMENTS
                  </h1>
                  <span className="md:text-xl tracking-wider lg:text-sm">
                    <StringSplitter text={myString} delimiter={delimiter} />
                  </span>

                  <h1 className="max-[767px]:my-2 font-bold tracking-wider md:text-xl md:my-3">
                    RECOMMENDED REQUIREMENTS
                  </h1>
                  <span className="md:text-xl tracking-wider lg:text-sm">
                    <StringSplitter text={myString2} delimiter={delimiter} />
                  </span>
                </span>
              </div>
            )}
        </section>

        <section className="max-[767px]:my-4">
          <h1 className="max-[767px]:text-3xl max-[767px]:my-2 font-payback underline underline-offset-4 md:text-5xl md:my-4 lg:text-3xl">
            NOTE
          </h1>
          <p className="md:text-xl tracking-wider lg:text-sm break-all">
            Kindly be aware that this is the {payload.platform} version of the
            game,
            <br className="hidden lg:block" /> exclusively tailored to provide
            an optimized experience for
            <br className="hidden lg:block" />
            the unique features and capabilities of this platform.
          </p>

          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="font-serif max-[767px]:p-4 md:p-8 grid gap-4">
              <div className="grid max-[767px]:gap-2 md:gap-3">
                <div className="flex justify-between">
                  <h2 className="font-payback text-center underline underline-offset-2 uppercase md:text-xl">
                    Trying To Download
                  </h2>
                  <button
                    className="text-2xl lg:hover:text-red-600 active:text-blue-600"
                    onClick={closeModal}
                  >
                    <IoCloseSharp />
                  </button>
                </div>

                <p className="md:text-xl md:leading-loose lg:text-sm">
                  Sorry, the download isn't available right now. I truly
                  appreciate your interest in my work! This is {""}
                  <span className="font-bold max-[767px]:p-1 md:p-2 md:m-1 bg-blue-600 text-white lg:p-1">
                    Nathaniel Owusu's{" "}
                  </span>
                  {""}
                  portfolio. Feel free to explore more projects and reach out if
                  you have any questions. Your support means a lot!
                </p>
              </div>
              <div className="grid gap-4 md:text-xl lg:text-sm">
                <Link
                  to="https://www.linkedin.com/in/nathaniel-owusu-02187229a"
                  target="_"
                  className="flex items-center gap-2 active:text-blue-600 lg:hover:text-blue-600 lg:active:text-red-600 lg:cursor-pointer"
                >
                  <FaLinkedin /> Nathaniel Owusu
                </Link>
                <Link
                  to="https://github.com/GANABA-25"
                  target="_"
                  className="flex items-center gap-2 active:text-blue-600 lg:hover:text-blue-600 lg:active:text-red-600 lg:cursor-pointer"
                >
                  <FaGithub />
                  Nathaniel Owusu
                </Link>
                <h1 className="flex items-center gap-2 active:text-blue-600 lg:hover:text-blue-600 lg:active:text-red-600 lg:cursor-pointer">
                  <SiGmail />
                  NathanielOwusu01@gmail.com
                </h1>
              </div>
            </div>
          </Modal>

          <button
            onClick={openModal}
            className="max-[767px]:my-4 max-[767px]:p-3 max-[767px]:active:bg-blue-700 md:active:bg-blue-700 font-payback flex justify-center items-center gap-5 text-white bg-blue-600 lg:hover:bg-blue-700 group lg:hover:text-red-600 transition-all duration-300 md:p-4 md:my-4 lg:p-2"
          >
            <span className="text-white md:text-2xl lg:text-xl">Download</span>
            <span className="lg:group-hover:text-red-600">
              <LuDownload className="max-[767px]:text-2xl md:text-3xl lg:text-2xl" />
            </span>
          </button>
        </section>

        <section>
          <section className="max-[767px]:my-8 md:my-10">
            {fetchedComments.length > 0 && (
              <div className="my-4">
                <div className="my-4">
                  <div className="flex ">
                    <p className="max-[767px]:text-xl text-white bg-blue-600 p-3 font-serif md:text-2xl lg:text-xl">
                      {fetchedComments.length}
                    </p>
                    <h1 className="font-payback tracking-widest bg-black text-white flex items-center gap-2 max-[767px]:w-[9rem] max-[767px]:p-1 md:w-[14rem] md:p-4 md:text-2xl lg:text-xl lg:w-[12rem] lg:p-3">
                      COMMENTS
                    </h1>
                  </div>

                  <hr className="bg-black h-0.5" />
                </div>
                {fetchedComments.map((comments) => (
                  <CommentsList
                    key={comments._id}
                    gameId={comments.gameId}
                    _id={comments._id}
                    userName={comments.userName}
                    createdAt={comments.createdAt}
                    comment={comments.comment}
                    replies={comments.replies}
                    showReplyInput={showReplyInput}
                    setShowReplyInput={setShowReplyInput}
                  />
                ))}
              </div>
            )}
          </section>
        </section>

        {showReplyInput ? (
          <>
            <Reply
              refreshComments={fetchGameComments}
              setShowReplyInput={setShowReplyInput}
            />
          </>
        ) : (
          <section>
            <Comments
              gameId={payload.gameId}
              refreshComments={fetchGameComments}
            />
          </section>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Downloads;
