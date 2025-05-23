import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useCart } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

const Gift = () => {
  const [gifts, setGifts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const giftsCol = collection(db, "Gift");
        const giftsSnapshot = await getDocs(giftsCol);
        const giftsList = giftsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGifts(giftsList);
      } catch (error) {
        console.error("Error fetching gifts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifts();
  }, []);

  const handleAddToCart = (item) => {
    try {
      console.log("Adding to cart:", item);
      addToCart({
        id: item.id,
        name: item.name,
        price: item.price || "₹500", // fallback price
        image: item.image,
        quantity: 1,
      });
      console.log("Redirecting to cart...");
      navigate("/cart");
    } catch (error) {
      console.error("Error adding to cart or redirecting:", error);
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading gifts...</p>;
  }

  if (gifts.length === 0) {
    return <p className="text-center mt-10">No gifts found 😞</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Send a Gift 🎁
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Brighten someone’s day with a StarBrews gift card or treat! Perfect
          for any occasion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {gifts.map((gift) => (
            <div
              key={gift.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={gift.image}
                alt={gift.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{gift.name}</h3>
              <p className="text-gray-600 mb-4">{gift.description}</p>
              <p className="text-green-700 font-semibold mb-4">
                {gift.price || "₹500"}
              </p>
              <button
                className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
                onClick={() => handleAddToCart(gift)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gift;
