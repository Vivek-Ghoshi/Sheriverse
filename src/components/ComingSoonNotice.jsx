import { Hammer, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ComingSoonNotice = () => {
  return (
    <motion.div
      className="bg-gray-800 border border-yellow-500/30 rounded-xl p-5 mt-6 text-center shadow-lg max-w-2xl mx-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center justify-center gap-3">
        <Hammer className="w-10 h-10 text-yellow-400 animate-bounce" />
        <h2 className="text-xl font-semibold text-yellow-400 capitalize">
          This feature is under construction 🚧
        </h2>
        <p className="text-gray-300 text-sm max-w-md">
          I'm actively working on building this functionality to deliver the best experience possible. Stay tuned — it's coming very soon!
        </p>
        <div className="flex items-center justify-center gap-2 mt-3 text-sm text-blue-400">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>Because good things take time ✨</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ComingSoonNotice;
