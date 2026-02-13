import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

import photo1 from "@/assets/1.jpeg";
import photo2 from "@/assets/2.jpeg";
import photo5 from "@/assets/5.jpeg";
import photo6 from "@/assets/6.jpeg";
import photo8 from "@/assets/8.jpeg";
import photo9 from "@/assets/9.jpeg";
import photo11 from "@/assets/11.jpeg";
import albumCover from "@/assets/album-cover.jpg";
import couple1 from "@/assets/couple-1.jpeg";
import couple2 from "@/assets/couple-2.jpeg";
import couple3 from "@/assets/couple-3.jpeg";
import couple4 from "@/assets/couple-4.jpeg";
import couple6 from "@/assets/couple-6.jpeg";
import soloHer from "@/assets/solo-her.jpeg";
import soloHer2 from "@/assets/solo-her-2.jpeg";
import soloHim from "@/assets/solo-him.jpeg";
import videocall from "@/assets/videocall.jpeg";

interface PhotoPage {
  image: string;
  caption: string;
  subtitle?: string;
}

const pages: PhotoPage[] = [
  { image: photo1, caption: "Our First Moment", subtitle: "Where it all began" },
  { image: photo2, caption: "Together in Love", subtitle: "Every moment is precious" },
  { image: couple1, caption: "Perfect Together", subtitle: "Two hearts, one soul" },
  { image: couple2, caption: "Endless Joy", subtitle: "Smiling through every moment" },
  { image: couple3, caption: "Our Adventure", subtitle: "Exploring life together" },
  { image: couple4, caption: "Sweet Moments", subtitle: "Making memories every day" },
  { image: couple6, caption: "Love & Laughter", subtitle: "The best of times" },
  { image: photo5, caption: "Beautiful Memories", subtitle: "Creating our story together" },
  { image: photo6, caption: "Side by Side", subtitle: "Hand in hand, heart to heart" },
  { image: soloHer, caption: "Her Smile", subtitle: "The light of my life" },
  { image: soloHer2, caption: "Radiant Beauty", subtitle: "Shining bright always" },
  { image: soloHim, caption: "His Strength", subtitle: "My rock and support" },
  { image: photo8, caption: "Cherished Times", subtitle: "Moments we'll never forget" },
  { image: photo9, caption: "Forever Yours", subtitle: "This is our journey" },
  { image: videocall, caption: "Connected Hearts", subtitle: "Near or far, always together" },
  { image: albumCover, caption: "Our Love Story", subtitle: "Written in the stars" },
  { image: photo11, caption: "Forever & Always", subtitle: "This is just the beginning" },
];

const AlbumPages = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setDirection(1);
      setCurrentPage((p) => p + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setDirection(-1);
      setCurrentPage((p) => p - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") nextPage();
      if (e.key === "ArrowLeft") prevPage();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [currentPage]);

  const page = pages[currentPage];

  const variants = {
    enter: (d: number) => ({
      rotateY: d > 0 ? 90 : -90,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (d: number) => ({
      rotateY: d > 0 ? -90 : 90,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <div className="min-h-screen album-page flex flex-col items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Top ornament */}
      <motion.div
        className="mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Heart className="w-6 h-6 text-gold/40 mx-auto mb-3 animate-heart-beat" fill="currentColor" />
        <p className="text-gold/30 font-body text-sm tracking-[0.3em] uppercase">
          Page {currentPage + 1} of {pages.length}
        </p>
      </motion.div>

      {/* Album page container */}
      <div className="relative w-full max-w-lg aspect-[3/4] mx-auto" style={{ perspective: 1200 }}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Page frame */}
          <div className="w-full h-full rounded-sm bg-card album-shadow relative overflow-hidden">
            {/* Gold border */}
            <div className="absolute inset-2 sm:inset-4 border border-gold/20 rounded-sm z-10 pointer-events-none" />

            {/* Photo */}
            <div className="absolute inset-4 sm:inset-8 overflow-hidden rounded-sm">
              <motion.img
                src={page.image}
                alt={page.caption}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              {/* Photo overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 text-center z-10 px-6">
              <motion.h2
                className="font-display text-2xl sm:text-3xl gold-text-gradient mb-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {page.caption}
              </motion.h2>
              {page.subtitle && (
                <motion.p
                  className="font-body text-foreground/50 text-sm sm:text-base italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {page.subtitle}
                </motion.p>
              )}
            </div>

            {/* Corner decorations */}
            {[
              "top-3 left-3 sm:top-5 sm:left-5",
              "top-3 right-3 sm:top-5 sm:right-5 rotate-90",
              "bottom-3 left-3 sm:bottom-5 sm:left-5 -rotate-90",
              "bottom-3 right-3 sm:bottom-5 sm:right-5 rotate-180",
            ].map((pos, i) => (
              <div
                key={i}
                className={`absolute ${pos} w-5 h-5 border-l border-t border-gold/25 z-10`}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={prevPage}
          disabled={currentPage === 0}
          className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/50 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page dots */}
        <div className="flex gap-1.5">
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > currentPage ? 1 : -1);
                setCurrentPage(i);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentPage
                ? "bg-gold w-6"
                : "bg-gold/20 hover:bg-gold/40"
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
          className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/50 hover:text-gold hover:border-gold/50 transition-all disabled:opacity-20 disabled:cursor-not-allowed"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Footer */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-16 h-px gold-gradient mx-auto mb-3 opacity-40" />
        <p className="text-gold/20 font-body text-xs tracking-widest uppercase">
          Made with love ♥
        </p>
      </motion.div>
    </div>
  );
};

export default AlbumPages;
