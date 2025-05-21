import React from "react";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-green-50">
      <div className="max-w-lg space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Brewed for those who love coffee
        </h1>
        <p className="text-gray-700">
          Start your day right with handcrafted coffee from Starbucks. Order
          ahead, earn rewards, and chill.
        </p>
        <button className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 text-lg">
          Order Now
        </button>
      </div>
      <img
        src={heroImg}
        alt="Starbucks coffee"
        className="w-full md:w-1/2 mt-8 md:mt-0 rounded-lg shadow-lg"
      />
    </section>
  );
};

export default Hero;
