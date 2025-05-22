import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const modalBackdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalContent = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: { delay: 0.1, type: "spring", stiffness: 100 },
  },
};

const Checkout = () => {
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    address: "",
    paymentMode: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: "",
  });

  // Show/hide modal state
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  // When user submits form, open modal instead of alert
  const handleCheckout = (e) => {
    e.preventDefault();
    console.log("Checkout Details:", details);
    setShowModal(true);
  };

  // Confirm button inside modal: close modal & navigate
  const handleConfirm = () => {
    setShowModal(false);
    navigate("/thanks");
  };

  // Cancel button inside modal: just close modal
  const handleCancel = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="min-h-screen bg-[#faf9f6] p-6 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl border border-green-100"
        >
          <h2 className="text-3xl font-bold text-center text-green-900 mb-6 flex items-center justify-center gap-2">
            🧾 Checkout @ <span className="text-green-600">Starbevs</span>
          </h2>

          <form onSubmit={handleCheckout} className="space-y-5 text-gray-800">
            <input
              type="text"
              name="name"
              placeholder="👤 Full Name"
              value={details.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <textarea
              name="address"
              placeholder="📍 Delivery Address"
              value={details.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
              rows={3}
              required
            />

            <div>
              <p className="font-semibold text-gray-700 mb-2">
                💰 Payment Method
              </p>
              <div className="flex gap-4 text-sm">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="card"
                    checked={details.paymentMode === "card"}
                    onChange={handleChange}
                  />
                  💳 Card
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="upi"
                    checked={details.paymentMode === "upi"}
                    onChange={handleChange}
                  />
                  📱 UPI
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMode"
                    value="cod"
                    checked={details.paymentMode === "cod"}
                    onChange={handleChange}
                  />
                  💵 Cash
                </label>
              </div>
            </div>

            {details.paymentMode === "card" && (
              <>
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="💳 Card Number"
                  value={details.cardNumber}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                  required
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="📆 Expiry (MM/YY)"
                    value={details.expiry}
                    onChange={handleChange}
                    className="w-1/2 border border-gray-300 rounded-xl px-4 py-3"
                    required
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="🔒 CVV"
                    value={details.cvv}
                    onChange={handleChange}
                    className="w-1/2 border border-gray-300 rounded-xl px-4 py-3"
                    required
                  />
                </div>
              </>
            )}

            {details.paymentMode === "upi" && (
              <input
                type="text"
                name="upiId"
                placeholder="📱 UPI ID (you@upi)"
                value={details.upiId}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3"
                required
              />
            )}

            <motion.button
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-700 text-white font-bold py-3 rounded-xl hover:bg-green-600 transition duration-200"
            >
              ✅ Confirm Order
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <motion.div
              className="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-xl text-gray-900" // <== added text-gray-900 here
              variants={modalContent}
            >
              <h2 className="text-2xl font-bold mb-4">☕ Confirm your order</h2>
              <p className="mb-6">Are you sure you want to place this order?</p>
              <div className="flex justify-center gap-6">
                <button
                  onClick={handleCancel}
                  className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="px-5 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
                >
                  Confirm
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Checkout;
