import React from "react";

const MenuItemCard = ({ name, desc, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-green-800">{name}</h3>
        <p className="text-sm text-gray-600">{desc}</p>
        <div className="flex justify-between items-center pt-2">
          <span className="font-bold text-green-700">{price}</span>
          <button className="bg-green-700 text-white px-3 py-1 rounded-full text-sm hover:bg-green-800">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
