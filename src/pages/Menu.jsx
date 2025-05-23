import { motion } from "framer-motion";
import { useCart } from "../components/CartContext";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import InteractiveAlert from "../components/InteractiveAlert";

const fadeUp = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const Menu = () => {
  const { addToCart } = useCart();
  const [menuData, setMenuData] = useState({});
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      const categories = ["bestsellers", "drinks", "food", "summerSpecials"];
      const newMenuData = {};

      for (const category of categories) {
        const querySnapshot = await getDocs(collection(db, category));
        newMenuData[category] = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      }

      setMenuData(newMenuData);
    };

    fetchMenu();
  }, []);

  const handleAddToCart = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmAddToCart = () => {
    if (selectedItem) {
      addToCart(selectedItem);
    }
    setShowModal(false);
    setSelectedItem(null);
  };

  const cancelAddToCart = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl font-bold mb-8 text-center text-green-800"
      >
        Our Menu
      </motion.h1>

      {Object.entries(menuData).map(([section, items]) => (
        <section key={section} className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold mb-6 capitalize text-stone-950"
          >
            {section.replace(/([A-Z])/g, " $1")}
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-48 w-full object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.name}
                    </h3>
                    <div className="text-green-700 font-bold mt-2">
                      ₹{item.price}
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 bg-green-700 text-stone-950 px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}

      {/* Interactive Confirmation Modal */}
      <InteractiveAlert
        show={showModal}
        title="Add to Cart?"
        message={`Are you sure you want to add "${selectedItem?.name}" to your cart?`}
        onConfirm={confirmAddToCart}
        onCancel={cancelAddToCart}
      />
    </div>
  );
};

export default Menu;
