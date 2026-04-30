"use client";

import * as React from "react";
import { motion } from "motion/react";
import { Star, Smile, Music, Heart, Sun, Cloud, Moon, Zap, Gamepad2, Puzzle } from "lucide-react";

export function BackgroundOrchestra() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-background">
      {/* Small Grid Pattern - slowly moving diagonally */}
      <motion.div 
        className="absolute inset-[-100%] opacity-10 dark:opacity-30"
        style={{
          backgroundImage: `linear-gradient(to right, var(--color-border) 1px, transparent 1px), linear-gradient(to bottom, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
        animate={{
          y: [0, 64],
          x: [0, 64]
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 4
        }}
      />
      
      {/* Floating Animated Icons for the kids app vibe */}
      <div className="absolute inset-0 overflow-hidden opacity-50 dark:opacity-40">
        <motion.div
          animate={{ y: ['-10vh', '110vh'], rotate: [0, -180] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 0 }}
          className="absolute left-[10%]"
        >
          <Star className="w-12 h-12 text-secondary dark:text-secondary-foreground" strokeWidth={2} />
        </motion.div>

        <motion.div
          animate={{ y: ['110vh', '-10vh'], rotate: [0, 180] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
          className="absolute left-[25%]"
        >
          <Smile className="w-16 h-16 text-primary dark:text-primary" strokeWidth={2} />
        </motion.div>

        <motion.div
          animate={{ y: ['-15vh', '115vh'], rotate: [-45, 45] }}
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute left-[40%]"
        >
          <Music className="w-10 h-10 text-accent dark:text-accent" strokeWidth={2} />
        </motion.div>

        <motion.div
          animate={{ y: ['120vh', '-20vh'], rotate: [0, -90] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 8 }}
          className="absolute left-[55%]"
        >
          <Gamepad2 className="w-14 h-14 text-success dark:text-success" strokeWidth={2} />
        </motion.div>

        <motion.div
          animate={{ y: ['-20vh', '120vh'], rotate: [0, 360] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear", delay: 1 }}
          className="absolute left-[70%]"
        >
          <Puzzle className="w-12 h-12 text-destructive dark:text-destructive" strokeWidth={2} />
        </motion.div>

        <motion.div
          animate={{ y: ['110vh', '-10vh'], rotate: [0, -360], scale: [1, 1.2, 1] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear", delay: 4 }}
          className="absolute right-[10%]"
        >
          <Cloud className="w-16 h-16 text-primary dark:text-primary-foreground" strokeWidth={2} />
        </motion.div>
      </div>
    </div>
  );
}
