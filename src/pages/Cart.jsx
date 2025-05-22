import { Link } from "react-router-dom";

const Cart = () => {
  // Dummy data for now — replace with actual state later
  const cartItems = []; // Or use dummy items here if needed

  return (
    <div className="min-h-screen p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-600">
          <p className="mb-4 text-lg">Your cart is empty 🛒</p>
          <Link
            to="/menu"
            className="inline-block bg-green-700 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <div>
          {/* 🧾 Cart items */}
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between bg-white p-4 shadow rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700 font-medium">
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* 💸 Checkout Button */}
          <div className="mt-8 text-right">
            <Link
              to="/checkout"
              className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
