"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, X, Heart } from "lucide-react";

interface EasterEggModalProps {
  note: string | null;
  onClose: () => void;
}

export default function EasterEggModal({ note, onClose }: EasterEggModalProps) {
  return (
    <AnimatePresence>
      {note && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121214] border border-[#D4AF37]/40 text-white max-w-md w-full p-8 rounded-2xl shadow-2xl relative text-center space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white/50 hover:text-white rounded-full bg-white/5"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 mx-auto rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-[#D4AF37]" />
            </div>

            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
              Secret Birthday Memory
            </span>

            <p className="font-handwriting text-2xl text-[#E8D08D] leading-relaxed pt-2">
              &quot;{note}&quot;
            </p>

            <div className="pt-4 border-t border-white/10 flex justify-center">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-full bg-[#D4AF37] text-black text-xs font-medium uppercase tracking-widest flex items-center gap-2 hover:bg-white transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-black" /> Close Note
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
