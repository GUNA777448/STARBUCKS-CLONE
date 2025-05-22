const menuData = {
  bestsellers: [
    {
      id: 1,
      name: "Caffè Latte",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Cappuccino",
      price: "₹179",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      name: "Double Chocolate Chip Frappuccino",
      price: "₹479",
      image:
        "https://parade.com/.image/t_share/MjA5NjgwNjQyMTU2Mjc1MTMw/chocolate-chip-frappuccino.jpg",
    },
  ],
  drinks: [
    {
      id: 4,
      name: "Caramel Macchiato",
      price: "₹229",
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20240408/pngtree-caramel-macchiato-coffee-cup-in-coffee-shop-image_15649984.jpg",
    },
    {
      id: 5,
      name: "Espresso",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      name: "Picco Cappuccino",
      price: "₹149",
      image:
        "https://b.zmtcdn.com/data/dish_photos/80b/df82c9802c913fd60d4a7bd8811e980b.jpeg",
    },
  ],
  food: [
    {
      id: 7,
      name: "Blueberry Muffin",
      price: "₹99",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      name: "Croissant",
      price: "₹119",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhm_-rbRwV5QpDod3nhnJnH18Wp4_Zmo50aA&s",
    },
    {
      id: 9,
      name: "Espresso",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    },
  ],
  merchandise: [
    {
      id: 10,
      name: "StarBrews Mug",
      price: "₹499",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 11,
      name: "Travel Tumbler",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 12,
      name: "Espresso",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    },
  ],
  summerSpecials: [
    {
      id: 13,
      name: "Iced Caramel Coffee",
      price: "₹249",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 14,
      name: "Cold Brew",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 15,
      name: "Espresso",
      price: "₹149",
      image:
        "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=800&q=80",
    },
  ],
};
const Menu = () => {
  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
    // 🔜 In future: dispatch to cart context/store here
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-800">
        Our Menu
      </h1>

      {Object.entries(menuData).map(([section, items]) => (
        <section key={section} className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 capitalize text-stone-950">
            {section.replace(/([A-Z])/g, " $1")}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition flex flex-col justify-between"
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
                      {item.price}
                    </div>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-4 bg-green-700 text-stone-950 px-4 py-2 rounded-md hover:bg-green-600 transition"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
export default Menu;
