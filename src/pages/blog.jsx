import { GiCricketBat } from "react-icons/gi";
import { FaTrophy, FaUsers, FaBaseballBall } from "react-icons/fa";
import { MdSportsCricket} from "react-icons/md";

import blogBanner from "../assets/blog.png";

const Blog = () => {
     const data = [
    {
      icon: <GiCricketBat />,
      title: "Indian Premier League (IPL)",
      desc: "The best and craziest of the T20 leagues in the world. Put a wager on your preferred team and players for the whole season."
    },
    {
      icon: <FaTrophy />,
      title: "ICC Cricket World Cup",
      desc: "This is one of the most distinguished global competitions that assembles top teams around the world."
    },
    {
      icon: <FaUsers />,
      title: "T20 World Cup",
      desc: "Yet another fast paced global event that provides plenty of wagering options."
    },
    {
      icon: <MdSportsCricket />,
      title: "Test Matches & ODI Series",
      desc: "Wager on cricket that takes place over a longer period, has lots of action and has much more to contest for."
    },
    {
      icon: <FaTrophy />,
      title: "Domestic Leagues",
      desc: "Spanning Big Bash League (BBL) from Australia to Caribbean Premier League (CPL) we also do the local leagues too."
    },
    {
      icon: <FaBaseballBall />,
      title: "Big Bash League (BBL)",
      desc: "Australia's popular T20 league featuring thrilling cricket action and star players."
    }
  ];
  return (
    <>
    <section className="bg-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        <a
          href="https://wa.me/message/EC3JTTQFZ63RA1" 
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl border border-yellow-500/30 hover:border-yellow-400 transition-all duration-500 group"
        >
          <img
            src={blogBanner}
            alt="Blog"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </a>
      </div>
    </section>
    <section className="bg-black text-white py-12 px-4 sm:px-6 lg:px-20">

      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-400">
          Radhe Exchange Blog
        </h1>

        <p className="text-gray-400 mt-4 text-sm sm:text-base  mx-auto text-center pt-2">
          Expert tips, betting strategies, and in-depth guides to help you win smarter.
        </p>
      </div>
    </section>
    <section className="max-w-6xl mx-auto bg-black text-white py-2 px-4 sm:px-6 lg:px-20">

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {data.map((item, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-6 text-center 
            transition duration-300 
            hover:shadow-[0_0_25px_rgba(255,215,0,0.25)] 
            hover:border-yellow-400"
          >
            {/* Icon Circle */}
            <div className="flex justify-center mb-4">
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center 
                border-2 border-yellow-400 text-yellow-400 text-4xl
                shadow-[0_0_20px_rgba(255,215,0,0.5)]
                transition duration-300 hover:scale-110"
              >
                {item.icon}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-yellow-400 mb-3">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-6">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
   </>
  );
};

export default Blog;