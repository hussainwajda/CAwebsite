import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/CA India Logo.png";

interface PreloaderProps {
  onLoadingComplete: () => void;
}

export default function Preloader({ onLoadingComplete }: PreloaderProps) {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onLoadingComplete, 500);
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "transparent", backdropFilter: "blur(30px)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="relative">
            {/* Outer Rotating Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#A0522D]"
              style={{ width: "120px", height: "120px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle Rotating Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-[#A0522D]"
              style={{ width: "90px", height: "90px" }}
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Rotating Circle */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1px] border-[#A0522D]"
              style={{ width: "60px", height: "60px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />

            {/* Logo with Blink Animation */}
            <motion.div
              className="relative w-20 h-20 bg-white rounded-full flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <img src={logo} alt="CA India Logo" className="w-14 h-14 rounded" />
            </motion.div>

            {/* Loading Progress */}
            <motion.div
              className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-white text-sm font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {Math.round(loadingProgress)}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}