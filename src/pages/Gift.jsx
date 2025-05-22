const Gift = () => {
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
          {/* Gift card */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn_ZD24ogYAuNe2XI1lAOQfCcha_3d7hPZdg&s"
              alt="Gift Card"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Digital Gift Card</h3>
            <p className="text-gray-600 mb-4">
              Choose your amount and message. Sent instantly via email.
            </p>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Send Gift
            </button>
          </div>

          {/* Coffee Basket */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"
              alt="Coffee Basket"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Coffee Basket</h3>
            <p className="text-gray-600 mb-4">
              A hand-picked selection of beans, mugs, and snacks.
            </p>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Order Now
            </button>
          </div>

          {/* Personalized Mug */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=500&q=80"
              alt="Custom Mug"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Custom Mug</h3>
            <p className="text-gray-600 mb-4">
              Personalize a mug with their name or a cute message!
            </p>
            <button className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
              Customize
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
