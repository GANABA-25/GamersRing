import { Fragment } from "react";
import Lottie from "lottie-react";
import { fetchPs3Games } from "../../http";
import { useFetch } from "../../hooks/useFetch";

import ScrollToTop from "../../components/ScrollToTop";
import NavigationBar from "../../components/NavigationBar";
import Information from "../../components/Information";
import loadingAnimation from "../../lottie/Animation - loading.json";
import technicalAnimation from "../../lottie/Animation - Technical.json";
import Pagination from "../../components/Pagination";
import GameComp from "../components/GameComp";
import Footer from "../Footer";

const ps3RecentRelease = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776984/GAMERS%20RING/PS3%20GAMES/wallpaperflare.com_wallpaper_22_mb2wgp.jpg",
    title: "LittleBigPlanet 2",
    date: "March 5, 2022",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713818012/GAMERS%20RING/PS3%20GAMES/1111261_zrjlcf.jpg",
    title: "Batman: Arkham City",
    date: "January 25, 2021",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713776979/GAMERS%20RING/PS3%20GAMES/1787648_eu92sj.jpg",
    title: "Ni no Kuni",
    date: "December 30, 2023",
  },
];

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713700861/GAMERS%20RING/PS3%20GAMES/The_last_of_us_1_uwapj7.jpg",
    alt: "Image1",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713917187/GAMERS%20RING/PS3%20GAMES/5077394_cufo9r.jpg",
    alt: "Image 2",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713916964/GAMERS%20RING/PS3%20GAMES/5077310_un2tvi.jpg",
    alt: "Image 3",
  },
];

const Ps3Games = () => {
  const {
    isLoading,
    fetchedData,
    setCurrentPage,
    currentPage,
    totalPages,
    errorMsg,
  } = useFetch(fetchPs3Games);

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <ScrollToTop />
      {errorMsg ? (
        <div className="grid justify-center items-center h-screen">
          <h1 className="font-serif">
            <Lottie
              className="lg:w-[30rem]"
              animationData={technicalAnimation}
              loop={true}
            />
            {errorMsg}
          </h1>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="flex justify-center items-center w-screen h-screen">
              <Lottie
                className="w-[6rem]"
                animationData={loadingAnimation}
                loop={true}
              />
            </div>
          ) : (
            <>
              <NavigationBar
                background="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713647417/GAMERS%20RING/PC%20GAMES/DOWNLOAD%20IMAGES/GHOST_RECON_1_3_cxqjai.jpg"
                images={backgroundImages}
              />
              <div className="max-[767px]:w-[95%] md:w-[95%] m-auto">
                <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3">
                  <section className="col-span-3">
                    <div className="grid max-[767px]:grid-cols-2 max-[767px]:gap-1 max-[767px]:gap-y-2 md:grid-cols-2 md:gap-2 md:gap-y-3 lg:grid-cols-3 transition-opacity duration-500">
                      {fetchedData.map((ps3Game) => (
                        <GameComp
                          key={ps3Game._id}
                          gameId={ps3Game._id}
                          image={ps3Game.image}
                          image1={ps3Game.image1}
                          image2={ps3Game.image2}
                          image3={ps3Game.image3}
                          title={ps3Game.title}
                          description={ps3Game.description}
                          downloadDescription={ps3Game.downloadDescription}
                          minimumSystemRequirement={
                            ps3Game.minimumSystemRequirement
                          }
                          recommendedSystemRequirement={
                            ps3Game.recommendedSystemRequirement
                          }
                          platform={ps3Game.platform}
                        />
                      ))}
                    </div>
                    {totalPages > 0 && (
                      <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handlePageClick={handlePageClick}
                      />
                    )}
                  </section>
                  <section className="max-[767px]:my-4 col-span-1 md:my-8 lg:my-0">
                    <Information
                      recentGamesData={ps3RecentRelease}
                      platform="THIS PAGE CONTAINS ONLY PS3 GAMES"
                    />
                  </section>
                </div>
              </div>
              <Footer />
            </>
          )}
        </>
      )}
    </Fragment>
  );
};

export default Ps3Games;
