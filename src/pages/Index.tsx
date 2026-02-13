import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import AlbumCover from "@/components/AlbumCover";
import AlbumPages from "@/components/AlbumPages";
import GoldParticles from "@/components/GoldParticles";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background relative">
      <GoldParticles />
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <AlbumCover key="cover" onOpen={() => setIsOpen(true)} />
        ) : (
          <AlbumPages key="pages" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
