import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 border-4 border-[#1a3a6b]/20 rounded-full"
          />
          <motion.div
            className="absolute inset-0 border-4 border-[#dc2626] border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        </div>
        <p className="text-[#1a3a6b] text-sm font-medium">กำลังโหลด...</p>
      </motion.div>
    </div>
  );
}
