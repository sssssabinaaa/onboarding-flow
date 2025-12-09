import React from 'react';
import { motion } from 'framer-motion';
import mpBackground from '../../public/MPbackground.svg';
import aiChatImg from '../../public/aichat.png';
import exportToCodeImg from '../../public/exporttocode.png';
import themingImg from '../../public/theming.png';
import visualEditingImg from '../../public/visualediting.png';
import webCaptureImg from '../../public/webcapture.png';

interface CreditsScreenProps {
  onGetStarted: () => void;
  onSkip: () => void;
}

// Card component for the feature previews
const FeatureCard = ({ 
  title, 
  image, 
  className = "",
  style = {}
}: { 
  title: string; 
  image: string; 
  className?: string;
  style?: React.CSSProperties;
}) => (
  <motion.div 
    className={`bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100 flex flex-col ${className}`}
    style={style}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-white">
      <span className="font-semibold text-gray-800 text-sm">{title}</span>
      <div className="text-gray-400 text-lg leading-none">&times;</div>
    </div>
    <div className="flex-1 bg-gray-50 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover object-top" />
    </div>
  </motion.div>
);

export const CreditsScreen = ({ onGetStarted, onSkip }: CreditsScreenProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl aspect-[16/10] rounded-3xl shadow-2xl overflow-hidden relative flex flex-col"
        style={{
          backgroundImage: `url(${mpBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Skip Button */}
        <div className="absolute top-6 right-8 z-20">
          <button 
            onClick={onSkip}
            className="text-white/90 hover:text-white font-medium text-lg transition-colors"
          >
            Skip
          </button>
        </div>

        {/* Header Content */}
        <div className="text-center mt-12 mb-8 z-10 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Hi there!
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            See what makes MagicPath different and get<br/>
            50 free credits.
          </p>
        </div>

        {/* Cards Container - using absolute positioning for the specific layout */}
        <div className="flex-1 relative w-full max-w-5xl mx-auto perspective-1000">
          
          {/* Top Left - Web Capture */}
          <FeatureCard 
            title="Web Capture" 
            image={webCaptureImg}
            className="absolute top-0 left-4 w-80 h-56 z-10"
            style={{ transform: 'rotate(-2deg)' }}
          />

          {/* Top Right - Theming */}
          <FeatureCard 
            title="Theming" 
            image={themingImg}
            className="absolute top-4 right-4 w-80 h-56 z-10"
            style={{ transform: 'rotate(2deg)' }}
          />

          {/* Bottom Left - AI Chat */}
          <FeatureCard 
            title="AI Chat" 
            image={aiChatImg}
            className="absolute bottom-20 left-12 w-80 h-56 z-10"
            style={{ transform: 'rotate(1deg)' }}
          />

          {/* Bottom Right - Visual Editing */}
          <FeatureCard 
            title="Visual Editing" 
            image={visualEditingImg}
            className="absolute bottom-16 right-12 w-80 h-56 z-10"
            style={{ transform: 'rotate(-1deg)' }}
          />

          {/* Center - Export to Code (On top) */}
          <FeatureCard 
            title="Export to Code" 
            image={exportToCodeImg}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-96 h-64 z-20 shadow-2xl"
          />

        </div>

        {/* Bottom Button */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-30">
          <button
            onClick={onGetStarted}
            className="bg-[#1a4731] hover:bg-[#133525] text-white text-lg font-medium px-8 py-3 rounded-full shadow-lg transition-colors transform hover:scale-105 duration-200"
          >
            Get Started
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
