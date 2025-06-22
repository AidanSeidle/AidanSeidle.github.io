import { motion } from "framer-motion";

const floatingImages = [
  "../assets/media/CloudPixelNoBkg.png",
];

function FloatingBackground() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: -1 }}
    >
      {Array.from({ length: 10 }).map((_, i) => {
        const src = floatingImages[i % floatingImages.length];
        const top = Math.random() * 90; // Random vertical position
        const size = 32 + Math.random() * 24; // Random size
        const duration = 30 + Math.random() * 20; // Random duration for speed
        const delay = i * 4; // Stagger start times
        const initialLeft = -Math.random() * 20 - 50; // Start off-screen to the left

        return (
          <motion.img
            key={i}
            src={src}
            alt="Floating cloud"
            className="absolute opacity-30"
            style={{
              width: `${size}px`,
              top: `${top}%`, // Random vertical position
              left: `${initialLeft}vw`, // Off-screen initially
            }}
            initial={{ x: 0 }}
            animate={{ x: "120vw" }} // Move across to the right
            transition={{
              repeat: Infinity, // Repeat animation
              duration: duration,
              ease: "linear",
              delay: delay, // Staggered delay for each image
            }}
          />
        );
      })}
    </div>
  );
}

export default FloatingBackground;
