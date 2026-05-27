import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <div className="bg-neutral-800 text-white montserrat-regular">
      <div className="w-[95%] pt-12 m-auto md:grid md:grid-cols-4 md:gap-6 md:pt-12 lg:mt-12">
        <div>
          {
            <div className="flex items-center font-payback">
              <img
                className=" rounded-[50%] "
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1714754704/GAMERS%20RING/PC%20GAMES/logo_xwjvg1.png"
                alt="logo"
                width="40px"
              />
              <h1>Gamers Ring</h1>
            </div>
          }

          <div className="max-[767px]:my-2 flex justify-betweem items-center  gap-2 md:my-4 lg:justify-start">
            <FaPhoneAlt className="max-[767px]:mt-1 max-[767px]:text-xl  md:mt-2 md:text-xl" />
            <p className="">+233 56 767 6676</p>
          </div>
          <h1 className="">info@GamersRing.com</h1>
          <div className="max-[767px]:my-4  md:my-4">
            <p className="mt-3"> Accra-Ghana </p>
          </div>
          <ul className="max-[767px]:py-4 max-[767px]:text-3xl flex justify-start gap-4 md:text-2xl">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <GrInstagram />
            </li>
            <li>
              <GrLinkedin />
            </li>
          </ul>
        </div>
        <div className="max-[767px]:my-8">
          <h1 className="text-[1.2rem] max-[767px]:text-2xl underline underline-offset-4 max-[767px]:my-3 montserrat-bold">
            About Gamers_Ring
          </h1>
          <ul className="grid gap-2 max-[767px]:text-md mt-2">
            <li className="cursor-pointer hover:font-bold">About Us</li>
            <li className="cursor-pointer hover:font-bold">
              The Gaming community
            </li>
            <li className="cursor-pointer hover:font-bold">Stories</li>
            <li className="cursor-pointer hover:font-bold">Events</li>
            <li className="cursor-pointer hover:font-bold">What We Do</li>
            <li className="cursor-pointer hover:font-bold">Contact Us</li>
          </ul>
        </div>

        <div className="max-[767px]:my-8">
          <h1 className="text-[1.2rem] max-[767px]:text-2xl underline underline-offset-4 max-[767px]:my-3 montserrat-bold">
            Important Links
          </h1>
          <ul className="grid gap-2 max-[767px]:text-md mt-2">
            <li className="cursor-pointer hover:font-bold">
              Join our community
            </li>
            <li className="cursor-pointer hover:font-bold">sponsers</li>
            <li className="cursor-pointer hover:font-bold">Become a Member</li>
          </ul>

          <div className="hidden max-[767px]:my-8 md:block md:mt-8">
            <h1 className="text-[1.2rem] max-[767px]:text-2xl underline underline-offset-4 max-[767px]:my-3 montserrat-bold">
              Our Partners
            </h1>
            <ul className="grid gap-2 max-[767px]:text-md mt-2">
              <li>Logo Fortnite</li>

              <li>Secretlab</li>
              <li>GameFly</li>
            </ul>
          </div>
        </div>

        <div className="max-[767px]:my-8 md:hidden">
          <h1 className="text-[1.2rem] max-[767px]:text-2xl underline underline-offset-4 max-[767px]:my-3 font-bold font-serif">
            Our Innovation Ecosystem
          </h1>
          <ul className="grid gap-2 max-[767px]:text-md">
            <li>Kampala Angels</li>
            <li>Freelancers Lounge</li>
            <li>Digital Economy</li>
            <li>Next wave</li>
            <li>Start Your Startup</li>
            <li>The97 Fund</li>
          </ul>
        </div>

        <div className="bg-white text-black rounded-lg">
          <div className="w-[95%] m-auto md:px-2">
            <div className="flex items-center font-payback">
              <img
                className=" rounded-[50%] "
                src="https://res.cloudinary.com/dmdnq9vh8/image/upload/v1714754704/GAMERS%20RING/PC%20GAMES/logo_xwjvg1.png"
                alt="logo"
                width="40px"
              />
              <h1>Gamers Ring</h1>
            </div>
            <p className="text-[1rem]">
              At Gamers_Ring, we're dedicated to delivering the best gaming
              experience. Our curated selection of games for download guarantees
              100% security and playability. Dive in and enjoy worry-free
              gaming.
            </p>
            <div className="flex place-content-center">
              <button className="text-sm max-[767px]:my-10 text-red-600 underline underline-offset-4 max-[767px]:py-2 max-[767px]:px-4 max-[1015px]:px-2  md:py-2 lg:px-6 lg:my-8 ">
                FIND OUT MORE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[95%] m-auto flex md:justify-between md:pt-8 md:pb-4">
        <p className="max-[767px]: max-[767px]:my-4 md:my-0">
          Privacy And Cookie Policy <br className="md:hidden" /> Terms And
          Conditions
        </p>
        <p className="hidden pb-8 md:pb-0 md:block">
          © 2024 Gamers_Ring. All rights reserved.
        </p>
      </div>
      <p className="w-[95%] m-auto  pb-8 md:pb-0 md:hidden">
        © 2024 Gamers_Ring. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
