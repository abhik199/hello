import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import banner1 from "../assets/Banner1.png";
import banner1Mobile from "../assets/banner1-mobile.png";

import banner2 from "../assets/Banner2.png";
import banner2Mobile from "../assets/banner2-mobile.png";

import aboutImage from "../assets/post.png";

import bg from "../assets/bg2.jpg";

import {
  PiUsersThreeFill,
  PiTrophyFill,
  PiMedalFill,
  PiGiftFill,
} from "react-icons/pi";

import { FaTrophy, FaHeadset, FaGift } from "react-icons/fa";
import {
  Dice5,
  Trophy,
  Landmark,
  Volleyball,
  Target,
  BadgeIndianRupee,
  CircleDot,
  Swords,
} from "lucide-react";

import p1 from "../assets/payment/p1.png";
import p2 from "../assets/payment/p2.png";
import p3 from "../assets/payment/p3.png";
import p4 from "../assets/payment/p4.png";
import p5 from "../assets/payment/p5.png";
import p6 from "../assets/payment/p6.png";
import p7 from "../assets/payment/p7.png";
import p8 from "../assets/payment/p8.png";



const payments = [p1, p2, p3, p4, p5, p6, p7, p8];

const games = [
  {
    title: "Board Games",
    desc: "Play premium board games and win exciting rewards.",
    image:
       "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&auto=format&fit=crop&q=80",
    icon: <Dice5 size={22} />,
    tag: "NEW",
  },
  {
    title: "Andar Bahar",
    desc: "Experience India's favorite live card game.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    icon: <BadgeIndianRupee size={22} />,
    tag: "HOT",
  },
  {
    title: "Cricket",
    desc: "Bet live while enjoying thrilling matches.",
    image:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=600",
    icon: <Trophy size={22} />,
    tag: "LIVE",
  },
  {
    title: "Casino",
    desc: "Live casino with real dealers & instant wins.",
    image:
      "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600",
    icon: <Landmark size={22} />,
    tag: "VIP",
  },
  {
    title: "Soccer",
    desc: "Enjoy football betting with high odds.",
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600",
    icon: <Volleyball size={22} />,
    tag: "NEW",
  },
  {
    title: "7 Up Down",
    desc: "Fast, simple & exciting dice game.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
    icon: <CircleDot size={22} />,
    tag: "TRENDING",
  },
  {
    title: "Teen Patti",
    desc: "India's most loved card game.",
    image:
      "https://images.unsplash.com/photo-1511193311914-0346f16efe90?w=600",
    icon: <Swords size={22} />,
    tag: "POPULAR",
  },
  {
    title: "Tennis",
    desc: "Bet on live tennis tournaments worldwide.",
    image:
      "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600",
    icon: <Target size={22} />,
    tag: "LIVE",
  },
];

const images = [
  {
    desktop: banner1,
    mobile: banner1Mobile,
  },
  {
    desktop: banner2,
    mobile: banner2Mobile,
  },
];

const Home = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <>

    {/* ================= SLIDER ================= */}

    <div className="relative w-full overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`${current === index ? "block" : "hidden"} w-full bg-black`}
        >
          <a
            href="https://wa.me/message/WG7RXPWZFE5JO1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              {/* Mobile Image */}
              <source
                media="(max-width:767px)"
                srcSet={img.mobile}
              />

              {/* Desktop Image */}
              <img
                src={img.desktop}
                alt={`Banner ${index + 1}`}
                className="
                  w-full
                  h-auto
                  md:h-[420px]
                  lg:h-[550px]
                  object-contain
                  md:object-cover
                  bg-black
                  cursor-pointer
                  block
                "
              />
            </picture>
          </a>
        </div>
      ))}

      {/* Previous */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60"
      >
        ❮
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/60"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
      {/* ================= ABOUT SECTION ================= */}

  <section className="py-16 bg-black">
  <div className="max-w-7xl mx-auto px-5">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* LEFT */}
      <div className="relative">

        {/* Experience Badge */}
        <div className="absolute -top-6 -left-3 lg:-left-6 z-20">
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-[#101915] border-4 border-black flex items-center justify-center overflow-hidden">

            {/* Circular Text */}
            <div className="absolute inset-0 flex items-center justify-center animate-spin-slow">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M50,50
                      m-38,0
                      a38,38 0 1,1 76,0
                      a38,38 0 1,1 -76,0"
                  />
                </defs>

                <text
                  fill="white"
                  fontSize="9"
                  fontWeight="600"
                  letterSpacing="4"
                >
                  <textPath href="#circlePath">
                    EXPERIENCE • EXPERIENCE •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Center Number */}
            <h2 className="text-yellow-400 text-4xl lg:text-5xl font-bold z-10 text-center">
              10
              <br />
              years
            </h2>

          </div>
        </div>

        {/* Image */}
        <a
          href="https://wa.me/message/EC3JTTQFZ63RA1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={aboutImage}
            alt="About Radhe Exchange"
            className="w-full h-[650px] object-contain rounded-xl cursor-pointer hover:scale-105 duration-300"
          />
        </a>
      </div>

      {/* RIGHT */}
      <div className="text-center lg:text-left">

        <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-yellow-400">
          WE'RE THE BEST
          <br />
          SERVICE
          <br />
          <span className="text-yellow-400">
            PROVIDER
          </span>
        </h2>

        <div className="w-24 h-1 bg-yellow-400 rounded-full my-8 mx-auto lg:mx-0"></div>

        <h4 className="italic font-semibold text-xl mb-5 text-white">
          KHELO DUM PAR, JEETO BUMPER
        </h4>

        <p className="text-gray-400 leading-8">
          Welcome to Radhe Exchange Book - the world's biggest betting exchange.
          We offer a wide range of options to bet on including sportsbook,
          live cards & live casino.
        </p>

        <div className="mt-8 space-y-4">

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="text-yellow-400 text-lg">✔</span>
            <span>Instant Withdrawal & Deposit</span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="text-yellow-400 text-lg">✔</span>
            <span>24/7 Customer Service</span>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <span className="text-yellow-400 text-lg">✔</span>
            <span>Referral Bonus</span>
          </div>

        </div>

        <a
          href="https://wa.me/message/EC3JTTQFZ63RA1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mt-10 border border-yellow-400 px-10 py-4 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black duration-300 cursor-pointer">
            PLAY NOW
          </button>
        </a>
      </div>

    </div>
  </div>
</section>
      {/* ===================== STATS SECTION ===================== */}

      <section
        className="relative py-16 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="bg-[#1a1a1ad9] p-6 flex items-center gap-5 clip-card hover:bg-[#222] duration-300">

              <PiUsersThreeFill className="text-[75px] text-yellow-400" />

              <div>
                <h2 className="text-3xl font-bold text-[#ffbf00]">
                  5,000,000
                </h2>

                <p className="text-[#ffbf00] uppercase text-sm font-semibold mt-2">
                  + ACTIVE USERS
                </p>
              </div>

            </div>

            {/* Card 2 */}

            <div className="bg-[#1a1a1ad9] p-6 flex items-center gap-5 clip-card hover:bg-[#222] duration-300">

              <PiTrophyFill className="text-[75px] text-yellow-400" />

              <div>
                <h2 className="text-3xl font-bold text-[#ffbf00]">
                  2,900,000
                </h2>

                <p className="text-[#ffbf00] uppercase text-sm font-semibold mt-2">
                  + PRIZE IN TOTAL
                </p>
              </div>

            </div>

            {/* Card 3 */}

            <div className="bg-[#1a1a1ad9] p-6 flex items-center gap-5 clip-card hover:bg-[#222] duration-300">

              <PiGiftFill className="text-[75px] text-yellow-400" />

              <div>
                <h2 className="text-3xl font-bold text-[#ffbf00]">
                  4,030,000
                </h2>

                <p className="text-[#ffbf00] uppercase text-sm font-semibold mt-2">
                  + DAILY CONTESTS
                </p>
              </div>

            </div>

            {/* Card 4 */}

            <div className="bg-[#1a1a1ad9] p-6 flex items-center gap-5 clip-card hover:bg-[#222] duration-300">

              <PiMedalFill className="text-[75px] text-yellow-400" />

              <div>
                <h2 className="text-3xl font-bold text-[#ffbf00]">
                  2,004,000
                </h2>

                <p className="text-[#ffbf00] uppercase text-sm font-semibold mt-2">
                  + LUCKY WINNERS
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-5">
          {/* Heading */}
          <div className="flex flex-col items-center text-center">

            <h2
              className="text-white text-4xl md:text-5xl"
              style={{ fontFamily: "Arial Black" }}
            >
              BEST <span className="text-[#f2b321]">SERVICE</span>
            </h2>

            <div className="w-20 h-[3px] bg-[#f2b321] mt-4 rounded-full"></div>

            <p className="max-w-4xl mt-8 text-gray-300 uppercase italic text-[15px] leading-7">
              Welcome To Radhe Exchange Book - The World's Biggest Betting Exchange. We Offer A
              Wide Range Of Options To Bet On Including Sportsbook, Live Cards &
              Live Casino.
            </p>

        </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* CARD */}
            <div
              className="group relative bg-[#1c1c1c] p-7 transition-all duration-300"
              style={{
                clipPath:
                  "polygon(0 0,92% 0,100% 10%,100% 100%,8% 100%,0 90%)",
              }}
            >

              <div className="flex items-start gap-5">

                <div className="w-20 h-20 bg-[#2b2b2b] flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">

                  <FaTrophy className="text-4xl text-[#f2b321] group-hover:text-white transition-all duration-300" />

                </div>

                <div>

                  <h3
                    className="text-white text-[20px] leading-7"
                    style={{ fontFamily: "Arial Black" }}
                  >
                    Instant
                    <br />
                    Withdrawal
                    <br />
                    & Deposit
                  </h3>

                </div>

              </div>

              <p className="text-gray-300 text-[15px] leading-7 mt-6">
                Trustworthy and Speedy Withdrawals,
                Seamless Deposits.
              </p>

            </div>

            {/* CARD */}

            <div
              className="group relative bg-[#1c1c1c] p-7 transition-all duration-300"
              style={{
                clipPath:
                  "polygon(0 0,92% 0,100% 10%,100% 100%,8% 100%,0 90%)",
              }}
            >

              <div className="flex items-start gap-5">

                <div className="w-20 h-20 bg-[#2b2b2b] flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">

                  <FaHeadset className="text-4xl text-[#f2b321] group-hover:text-white transition-all duration-300" />

                </div>

                <div>

                  <h3
                    className="text-white text-[20px] leading-7"
                    style={{ fontFamily: "Arial Black" }}
                  >
                    24 / 7
                    <br />
                    Customer
                    <br />
                    Service
                  </h3>

                </div>

              </div>

              <p className="text-gray-300 text-[15px] leading-7 mt-6">
                Support Around The Clock, Always Ready.
                Click Here And Chat With Us.
              </p>

            </div>

            {/* CARD */}

            <div
              className="group relative bg-[#1c1c1c] p-7 transition-all duration-300"
              style={{
                clipPath:
                  "polygon(0 0,92% 0,100% 10%,100% 100%,8% 100%,0 90%)",
              }}
            >

              <div className="flex items-start gap-5">

                <div className="w-20 h-20 bg-[#2b2b2b] flex items-center justify-center transition-all duration-300 group-hover:bg-white/20">

                  <FaGift className="text-4xl text-[#f2b321] group-hover:text-white transition-all duration-300" />

                </div>

                <div>

                  <h3
                    className="text-white text-[20px] leading-7"
                    style={{ fontFamily: "Arial Black" }}
                  >
                    Referral
                    <br />
                    Bonus
                  </h3>

                </div>

              </div>

              <p className="text-gray-300 text-[15px] leading-7 mt-6">
                Share The Wealth, Earn Rewards
                With Every Referral.
              </p>

            </div>

          </div>

        </div>
      </section>

      <section className="relative bg-[#050505] py-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,196,0,.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-5">
          {/* Heading */}
          <div className="text-center mb-14">
            <p className="uppercase tracking-[5px] text-yellow-500 text-sm font-semibold">
              Casino Collection
            </p>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white mt-3">
              PLAY THE GAME OF YOUR{" "}
              <span className="text-yellow-400">CHOICE</span>
            </h2>

            <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-5 rounded-full" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {games.map((game, index) => (
              <div
                key={index}
                className="group h-[400px] rounded-2xl overflow-hidden bg-[#111] border border-white/10 hover:border-yellow-400 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(250,204,21,.25)] flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                  <span className="absolute top-3 right-3 bg-yellow-400 text-black text-[11px] font-bold px-3 py-1 rounded-full">
                    {game.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-yellow-400 flex items-center justify-center text-black">
                      {game.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white">
                      {game.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-sm text-gray-400 leading-6 line-clamp-3 flex-1">
                    {game.desc}
                  </p>

                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/message/EC3JTTQFZ63RA1",
                        "_blank"
                      )
                    }
                    className="mt-5 w-full rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-500 py-2.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/40"
                  >
                    Play Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-extrabold uppercase leading-tight">
            <span className="text-white">THE RADHE EXCHNAGE GUARANTEE</span>
            <br />
            <span className="text-yellow-400">
              WITHDRAWAL IN 60 MINUTES
            </span>
            <br />
            <span className="text-yellow-400">
              - OR ELSE MONEY DOUBLE
            </span>
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mt-5 rounded-full"></div>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          loop={true}
          speed={3500}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            640: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {payments.map((img, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center"
            >
              <div className="w-[250px] h-[400px] rounded-2xl overflow-hidden border border-yellow-500/30 bg-white flex items-center justify-center">
                <img
                  src={img}
                  alt={`Payment ${index + 1}`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>

</>
  );
};

export default Home;