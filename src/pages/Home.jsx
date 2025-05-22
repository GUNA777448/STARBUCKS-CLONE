import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col justify-center items-center text-center p-6 text-stone-800">
        {/* Hero Content */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg">
          Welcome to StarBev's ☕
        </h1>
        <p className="text-lg sm:text-xl mb-6 max-w-xl drop-shadow">
          Fuel your day with handcrafted coffee and cozy vibes — delivered fast
          and fresh.
        </p>
        <Link
          to="/menu"
          className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition mb-10"
        >
          Order Now
        </Link>

        {/* Carousel inside Hero */}
        <div className="w-full max-w-4xl mx-auto">
          <CarouselComponent />
        </div>
      </div>
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-green-800 mb-12">
          Signature Brews 🍵
        </h2>

        <div className="space-y-16 max-w-6xl mx-auto">
          {/* Block 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://monin.in/cdn/shop/products/Vanilla_20Latte.png?v=1681306688"
              alt="Latte"
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Velvety Vanilla Latte
              </h3>
              <p className="text-gray-700 text-lg">
                A creamy blend of espresso and vanilla sweetness — perfect for
                cozy vibes or getting stuff done.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="https://dg6qn11ynnp6a.cloudfront.net/wp-content/uploads/2023/07/18142136/510515450.reviewimg-blkbold-thumb.jpg"
              alt="Cold Brew"
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Bold Cold Brew
              </h3>
              <p className="text-gray-700 text-lg">
                Slow-steeped and extra strong — the cold brew that keeps you
                going all day long.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://img-global.cpcdn.com/recipes/4638085405999104/680x482cq70/mocha-magic-recipe-main-photo.jpg"
              alt="Mocha"
              className="w-full md:w-1/2 rounded-xl shadow-md object-cover"
            />
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold text-green-700 mb-2">
                Mocha Magic
              </h3>
              <p className="text-gray-700 text-lg">
                Espresso meets rich chocolate — for when your sweet tooth and
                caffeine addiction align.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
