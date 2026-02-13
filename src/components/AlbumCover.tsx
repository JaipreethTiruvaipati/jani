import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import albumCover from "@/assets/album-cover.jpg";
import { Heart } from "lucide-react";

interface AlbumCoverProps {
  onOpen: () => void;
}

const AlbumCover = ({ onOpen }: AlbumCoverProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background texture */}
      <div className="absolute inset-0 opacity-30">
        <img src={albumCover} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-background/60" />

      {/* Album book */}
      <motion.div
        className="relative cursor-pointer"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onOpen}
      >
        {/* Album outer frame */}
        <motion.div
          className="relative w-[340px] h-[440px] sm:w-[400px] sm:h-[520px] rounded-sm album-shadow overflow-hidden"
          animate={{ rotateY: isHovered ? -5 : 0 }}
          transition={{ duration: 0.5 }}
          style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        >
          {/* Cover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[hsl(0,0%,8%)] via-[hsl(0,0%,6%)] to-[hsl(0,0%,4%)]" />

          {/* Gold border */}
          <div className="absolute inset-3 border border-gold/30 rounded-sm" />
          <div className="absolute inset-5 border border-gold/15 rounded-sm" />

          {/* Corner ornaments */}
          {[
            "top-6 left-6",
            "top-6 right-6 rotate-90",
            "bottom-6 left-6 -rotate-90",
            "bottom-6 right-6 rotate-180",
          ].map((pos, i) => (
            <div
              key={i}
              className={`absolute ${pos} w-10 h-10 border-l-2 border-t-2 border-gold/40`}
            />
          ))}

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Heart
                className="w-12 h-12 text-gold/60 mb-6"
                fill="hsl(40, 70%, 50%)"
                fillOpacity={0.2}
              />
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl gold-text-gradient mb-2 tracking-wide">
              Our Story
            </h1>

            <div className="w-24 h-px gold-gradient my-4 opacity-60" />

            <p className="font-body text-lg text-gold-light/50 tracking-widest uppercase text-sm">
              A Love Album
            </p>

            <motion.p
              className="absolute bottom-12 text-gold/30 text-sm font-body tracking-wider"
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              tap to open
            </motion.p>
          </div>

          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/5 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AlbumCover;
