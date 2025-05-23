import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase"; // Your Firebase config file

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "bestsellers"));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBestsellers(items);
      } catch (error) {
        console.error("Error fetching bestsellers: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBestsellers();
  }, []);

  if (loading) return <div>Loading bestsellers...</div>;

  return (
    <div>
      <h2>Bestsellers</h2>
      <div className="grid grid-cols-3 gap-4">
        {bestsellers.map((item) => (
          <div key={item.id} className="border p-4 rounded">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 font-semibold">{item.name}</h3>
            <p className="text-green-700 font-bold">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestsellers;
