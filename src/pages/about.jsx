import aboutBanner from "../assets/about.png";


const About = () => {
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
            src={aboutBanner}
            alt="About Us"
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </a>
      </div>
    </section>
    <section className="max-w-6xl mx-auto bg-black text-white py-12 px-4 sm:px-6 lg:px-20">

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-10">
        World's No. 1 Book Radhe Exchange
      </h2>

      {/* Content Wrapper */}
      <div className="space-y-8 max-w-5xl mx-auto">

        {/* Block 1 */}
        <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
          <p className="text-sm sm:text-base leading-7 text-gray-300 text-justify">
            <span className="text-yellow-400 font-semibold">Where Betting Meets Integrity, Entertainment, and Innovation..</span> <br />
            The most reliable and secure online platform, offering everything At Radhe Exchange, we bring the thrill of legal betting right to your fingertips.
            We're your trusted partner in the exciting world of sports betting and gaming. With a commitment to integrity, transparency, and responsible gaming, 
            we provide a safe and enjoyable betting experience for enthusiasts and novices alike.
            <br />
            <span className="font-semibold text-white">Our story began with a simple idea:</span> to create a betting platform that 
            truly puts the player first. We envisioned a place where enthusiasts could engage with their 
            favorite sports and games in a responsible, secure, and entertaining environment.
           <br />
            <span className="font-semibold text-white">What sets us apart?</span> It's our commitment to 
            innovation, responsibility, and transparency. We're constantly exploring new technologies to 
            enhance your betting experience. From our user-friendly interface to our cutting-edge mobile 
            app, we're at the forefront of innovation. We take responsible gaming seriously, promoting 
            healthy gaming habits and providing self-exclusion tools to ensure that your entertainment 
            never crosses the line. Your trust is our priority, and we provide clear, real-time information 
            on odds, results, and payouts, so you're always in the know.
            <br />
            Behind Radhe Rxchange Book is a dedicated team of betting experts, developers, and customer support 
            professionals who are passionate about what they do. We work tirelessly to provide you with the 
            best possible experience.
            
          </p>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-10">
          Our Mission
        </h2>

        {/* Block 2 */}
        <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
          <p className="text-sm sm:text-base leading-7 text-gray-300 text-justify"> 
            <span className="text-yellow-400 font-semibold">Empowering Your Betting Passion </span>
            <br /> 
            Our mission is to elevate the sports betting experience by offering a wide range of betting 
            options on your favorite sports, events, and games. We aim to provide unmatched customer service, 
            cutting-edge technology, and a secure platform that ensures fairness and transparency in every wager.
            <br />
            <span className="font-semibold text-white">To Elevate Betting:</span> We're on a mission to elevate the betting experience. Whether you're a seasoned 
            pro or new to betting, we want to make every wager an exciting and memorable event.
            <br />
            <span className="font-semibold text-white">To Promote Responsible Gaming:</span> Our commitment to 
            responsible gaming is unwavering. We aim to create a safe and enjoyable environment where gaming 
            remains a form of entertainment, not an obsession. We provide tools and resources to help you 
            stay in control and ensure that betting is always a responsible and enjoyable pastime. Your 
            well-being matters to us, and we're here to support you on your betting journey.
          </p>
        </div>
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-10">
          Join Us
        </h2>
        {/* Block 3 */}
        <div className="border-l-4 border-yellow-400 pl-4 sm:pl-6">
          <p className="text-sm sm:text-base leading-7 text-gray-300 text-justify">
            <span className="text-yellow-400 font-semibold">Join the Radhe Exchange Community</span>
            <br />
            Join thousands of satisfied customers who trust Radhe Exchange for their betting needs. Sign up today to explore our offerings, claim exciting bonuses, and become part of the Rocky Book community.
            <br />
            We promote responsible gaming practices and provide tools to help you stay in control of your betting habits.
            <br />
            From major sporting events to niche competitions, we offer a comprehensive selection of markets, so you can bet on your passion
          </p>
        </div>

      </div>

    </section>
    </>
  );
};

export default About;