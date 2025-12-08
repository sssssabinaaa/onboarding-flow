import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrototypeVisual, LandingPageVisual, MarketingVisual, DashboardVisual, DesignSystemVisual, ComponentsVisual, OtherVisual } from './CreationVisuals';
import magicpathLogo from '../../public/magicpath.svg';
interface CreationTypeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNext?: (types: CreationType[], otherText?: string) => void;
}
export type CreationType = 'prototypes' | 'landing' | 'marketing' | 'dashboards' | 'design-systems' | 'components' | 'other';
const visuals: Record<CreationType, React.ComponentType> = {
  'prototypes': PrototypeVisual,
  'landing': LandingPageVisual,
  'marketing': MarketingVisual,
  'dashboards': DashboardVisual,
  'design-systems': DesignSystemVisual,
  'components': ComponentsVisual,
  'other': OtherVisual
};
export const CreationTypeModal = ({
  isOpen,
  onClose,
  onNext
}: CreationTypeModalProps) => {
  const [selectedTypes, setSelectedTypes] = useState<CreationType[]>([]);
  const [otherText, setOtherText] = useState('');
  const handleTypeClick = (type: CreationType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(prev => prev.filter(t => t !== type));
    } else {
      if (selectedTypes.length < 3) {
        setSelectedTypes(prev => [...prev, type]);
      }
    }
  };
  const handleOtherFocus = () => {
    if (!selectedTypes.includes('other')) {
      if (selectedTypes.length < 3) {
        setSelectedTypes(prev => [...prev, 'other']);
      }
    }
  };
  const handleNext = () => {
    onNext?.(selectedTypes, otherText);
    // In a real app, you might close the modal here or navigate
    // onClose();
  };
  const isSelected = (type: CreationType) => selectedTypes.includes(type);

  // Animation variants for the visual container items
  const getVisualPosition = (index: number, total: number) => {
    if (total === 1) return {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: 10
    };
    if (total === 2) {
      const scale = 0.7; // Slightly smaller to ensure fit
      const spacing = 160; // Adjusted spacing

      return {
        x: index === 0 ? -spacing : spacing,
        y: 0,
        rotate: 0,
        scale,
        zIndex: 10
      };
    }
    if (total === 3) {
      const scale = 0.6;
      // Triangle formation
      if (index === 0) return {
        // Top Left
        x: -140,
        y: -100,
        rotate: 0,
        scale,
        zIndex: 10
      };
      if (index === 1) return {
        // Top Right
        x: 140,
        y: -100,
        rotate: 0,
        scale,
        zIndex: 10
      };
      if (index === 2) return {
        // Bottom Center
        x: 0,
        y: 90,
        rotate: 0,
        scale,
        zIndex: 10
      };
    }
    return {
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      zIndex: 10
    };
  };
  return <AnimatePresence>
      {isOpen && <>
          {/* Backdrop */}
          <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={onClose} className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} exit={{
        opacity: 0,
        scale: 0.95
      }} transition={{
        duration: 0.2
      }} className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-7xl h-[90vh] max-h-[850px] flex overflow-hidden pointer-events-auto">
              {/* Left Section - Controls */}
              <div className="w-[45%] p-12 flex flex-col border-r border-gray-100 bg-white z-10">
                {/* Logo */}
                <div className="mb-8">
                  <img src={magicpathLogo} alt="MagicPath" className="w-12 h-12" />
                </div>

                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                    What are you creating with MagicPath?
                    </h1>
                    <p className="text-lg text-gray-500 font-medium">
                    Choose up to three
                    </p>
                </div>

                {/* Options Grid */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 -mr-2">
                  <button onClick={() => handleTypeClick('prototypes')} disabled={!isSelected('prototypes') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                      ${isSelected('prototypes') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                    <div className="flex items-center justify-between">
                        <span>Prototypes or MVPs</span>
                        {/* Green dot removed */}
                    </div>
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    <button onClick={() => handleTypeClick('landing')} disabled={!isSelected('landing') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                        ${isSelected('landing') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                        <div className="flex items-center justify-between">
                            <span>Landing Pages</span>
                            {/* Green dot removed */}
                        </div>
                    </button>

                    <button onClick={() => handleTypeClick('marketing')} disabled={!isSelected('marketing') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                        ${isSelected('marketing') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                        <div className="flex items-center justify-between">
                            <span>Marketing Websites</span>
                            {/* Green dot removed */}
                        </div>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                     <button onClick={() => handleTypeClick('dashboards')} disabled={!isSelected('dashboards') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                            ${isSelected('dashboards') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                        <div className="flex items-center justify-between">
                            <span>Dashboards</span>
                            {/* Green dot removed */}
                        </div>
                    </button>

                    <button onClick={() => handleTypeClick('design-systems')} disabled={!isSelected('design-systems') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                            ${isSelected('design-systems') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                        <div className="flex items-center justify-between">
                            <span>Design Systems</span>
                            {/* Green dot removed */}
                        </div>
                    </button>
                  </div>

                  <button onClick={() => handleTypeClick('components')} disabled={!isSelected('components') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                      ${isSelected('components') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                    <div className="flex items-center justify-between">
                        <span>Components for Desktop or Mobile</span>
                        {/* Green dot removed */}
                    </div>
                  </button>

                  <div className="flex gap-3">
                    <button onClick={() => handleTypeClick('other')} disabled={!isSelected('other') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 min-w-[120px]
                        ${isSelected('other') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                       <div className="flex items-center justify-between">
                            <span>Other</span>
                            {/* Green dot removed */}
                        </div>
                    </button>
                    <input type="text" placeholder="Enter here..." value={otherText} onChange={e => setOtherText(e.target.value)} onFocus={handleOtherFocus} className={`flex-1 px-6 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none 
                        ${isSelected('other') ? 'border-green-600 focus:border-green-600 bg-white' : 'border-gray-200 focus:border-green-600 text-gray-600'}`} />
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-400">Question 2 of 5</span>
                  <button onClick={handleNext} disabled={selectedTypes.length === 0} className="px-8 py-3 bg-green-800 hover:bg-green-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors shadow-lg shadow-green-900/10">
                    Next
                  </button>
                </div>
              </div>

              {/* Right Section - Canvas */}
              <div className="flex-1 bg-gray-50 relative overflow-hidden flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
                
                {/* Visuals Container */}
                <div className="relative w-full h-full max-w-2xl max-h-[600px] flex items-center justify-center perspective-1000">
                  <AnimatePresence>
                    {selectedTypes.length === 0 && <motion.div initial={{
                  opacity: 0
                }} animate={{
                  opacity: 1
                }} exit={{
                  opacity: 0
                }} className="text-center text-gray-400">
                            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </div>
                            <p className="text-lg font-medium">Select items to preview</p>
                        </motion.div>}

                    {selectedTypes.map((type, index) => {
                  const VisualComponent = visuals[type];
                  const position = getVisualPosition(index, selectedTypes.length);
                  return <motion.div key={type} layoutId={type} initial={{
                    opacity: 0,
                    scale: 0.5,
                    y: 20
                  }} animate={{
                    opacity: 1,
                    x: position.x,
                    y: position.y,
                    rotate: position.rotate,
                    scale: position.scale,
                    zIndex: position.zIndex,
                    transition: {
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }
                  }} exit={{
                    opacity: 0,
                    scale: 0.5,
                    transition: {
                      duration: 0.2
                    }
                  }} className="absolute w-[400px] h-[300px] shadow-2xl rounded-xl bg-white" style={{
                    boxShadow: "0 20px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}>
                          <VisualComponent />
                        </motion.div>;
                })}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
};