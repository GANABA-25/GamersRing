import { Fragment } from "react";
import Lottie from "lottie-react";
import { useFetch } from "../../hooks/useFetch";
import { fetchPs5Games } from "../../http";

import ScrollToTop from "../../components/ScrollToTop";
import loadingAnimation from "../../lottie/Animation - loading.json";
import technicalAnimation from "../../lottie/Animation - Technical.json";
import GameComp from "../components/GameComp";
import Pagination from "../../components/Pagination";
import NavigationBar from "../../components/NavigationBar";
import Information from "../../components/Information";
import Footer from "../Footer";

const ps5RecentRelease = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869984/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_7_smugbj.jpg",
    title: "GOD OF WAR RAGNAROCK",
    date: "March 5, 2022",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713869988/GAMERS%20RING/PS5%20GAMES/3618387_qgxhel.jpg",
    title: "FAR CRY 6",
    date: "January 25, 2021",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713872139/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_12_ubzzyk.jpg",
    title: "DEATHLOOP",
    date: "December 30, 2023",
  },
];

const backgroundImages = [
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713713873/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_od6ovp.jpg",
    alt: "Image1",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870386/GAMERS%20RING/PS5%20GAMES/5871398_ftqfav.jpg",
    alt: "Image 2",
  },
  {
    url: "https://res.cloudinary.com/dmdnq9vh8/image/upload/v1713870356/GAMERS%20RING/PS5%20GAMES/wallpaperflare.com_wallpaper_b8ikqo.jpg",
    alt: "Image 3",
  },
];

const Ps5Games = () => {
  const {
    isLoading,
    fetchedData,
    setCurrentPage,
    currentPage,
    totalPages,
    errorMsg,
  } = useFetch(fetchPs5Games);

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
        <Fragment>
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
                <div className="font-serif lg:grid lg:grid-cols-4 lg:gap-3 ">
                  <section className="col-span-3">
                    <div className="grid max-[767px]:grid-cols-2 max-[767px]:gap-1 max-[767px]:gap-y-2 md:grid-cols-2 md:gap-2 md:gap-y-3 lg:grid-cols-3 transition-opacity duration-500">
                      {fetchedData.map((ps5Game) => (
                        <GameComp
                          key={ps5Game._id}
                          gameId={ps5Game._id}
                          image={ps5Game.image}
                          image1={ps5Game.image1}
                          image2={ps5Game.image2}
                          image3={ps5Game.image3}
                          title={ps5Game.title}
                          description={ps5Game.description}
                          downloadDescription={ps5Game.downloadDescription}
                          minimumSystemRequirement={
                            ps5Game.minimumSystemRequirement
                          }
                          recommendedSystemRequirement={
                            ps5Game.recommendedSystemRequirement
                          }
                          platform={ps5Game.platform}
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
                      recentGamesData={ps5RecentRelease}
                      platform="THIS PAGE CONTAINS ONLY PS5 GAMES"
                    />
                  </section>
                </div>
              </div>
              <Footer />
            </>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Ps5Games;
