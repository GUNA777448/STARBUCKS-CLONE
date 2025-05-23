import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: "0", opacity: 1, transition: { delay: 0.1 } },
};

const InteractiveAlert = ({ show, title, message, onConfirm, onCancel }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full text-center"
            variants={modalVariants}
          >
            <h2 className="text-2xl text-stone-900 font-bold mb-4">{title}</h2>
            <p className="mb-6 text-stone-800">{message}</p>
            <div className="flex justify-center gap-6">
              <button
                onClick={onCancel}
                className="px-5 py-2 rounded-lg bg-gray-300 text-stone-950  hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={onConfirm}
                className="px-5 py-2 rounded-lg bg-green-600 text-stone-950 hover:bg-green-700 transition"
              >
                Confirm
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InteractiveAlert;
