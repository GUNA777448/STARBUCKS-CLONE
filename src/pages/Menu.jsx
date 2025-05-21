import React from "react";
import Navbar from "../components/Navbar";
import MenuItemCard from "../components/MenuItemCard";

const Menu = () => {
  const coffeeItems = [
    {
      id: 1,
      name: "Iced Caramel Macchiato",
      desc: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and topped with caramel drizzle.",
      price: "$4.95",
      image:
        "https://www.starbucks.com/weblx/images/menu/iced-caramel-macchiato.jpg",
    },
    {
      id: 2,
      name: "Caffe Latte",
      desc: "Rich, full-bodied espresso blended with steamed milk and a light layer of foam.",
      price: "$3.85",
      image: "https://www.starbucks.com/weblx/images/menu/caffe-latte.jpg",
    },
    {
      id: 3,
      name: "Cold Brew",
      desc: "Smooth and rich cold brew coffee served over ice.",
      price: "$3.25",
      image: "https://www.starbucks.com/weblx/images/menu/cold-brew.jpg",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="px-6 py-10 bg-green-50 min-h-screen">
        <h1 className="text-3xl font-bold text-green-800 mb-6">
          Our Favorites
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {coffeeItems.map((item) => (
            <MenuItemCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
