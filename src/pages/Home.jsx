import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/CarouselComponent";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Home = () => {
  return (
    <>
      <motion.div
        className="min-h-[100vh] flex flex-col justify-center items-center text-center p-6 text-stone-800"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Content */}
        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-lg"
          variants={itemVariants}
        >
          Welcome to StarBev's ☕
        </motion.h1>
        <motion.p
          className="text-lg sm:text-xl mb-6 max-w-xl drop-shadow"
          variants={itemVariants}
        >
          Fuel your day with handcrafted coffee and cozy vibes — delivered fast
          and fresh.
        </motion.p>
        <motion.div variants={itemVariants}>
          <Link
            to="/menu"
            className="bg-green-700 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition mb-10 inline-block"
          >
            Order Now
          </Link>
        </motion.div>

        {/* Carousel inside Hero */}
        <motion.div
          className="w-full max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <CarouselComponent />
        </motion.div>
      </motion.div>

      <section className="py-20 px-6 bg-gray-50">
        <motion.h2
          className="text-4xl font-bold text-center text-green-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Signature Brews 🍵
        </motion.h2>

        <motion.div
          className="space-y-16 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Block 1 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            variants={itemVariants}
          >
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
          </motion.div>

          {/* Block 2 */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-8"
            variants={itemVariants}
          >
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
          </motion.div>

          {/* Block 3 */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-8"
            variants={itemVariants}
          >
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
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
