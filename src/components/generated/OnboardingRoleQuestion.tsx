import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProductDesignerVisual, FounderVisual, DesignEngineerVisual, FrontendEngVisual, BackendEngVisual, MarketerVisual, SalesVisual } from './RoleAnimations';
interface OnboardingRoleQuestionProps {
  isOpen: boolean;
  onClose: () => void;
  onFinish?: (role: RoleType) => void;
}
type RoleType = 'product-designer' | 'founder' | 'design-engineer' | 'frontend-eng' | 'backend-eng' | 'marketer' | 'sales';
const roleDescriptions: Record<RoleType, string> = {
  'product-designer': 'Designers use MagicPath to quickly hand off production-ready code to eng.',
  'founder': 'Founders use MagicPath to quickly test ideas before they\'re brought up at standup.',
  'design-engineer': 'Design engineers save time by using MagicPath integrating their design files and frontend library',
  'frontend-eng': 'Frontend engineers use MagicPath to integrate the branded components using MagicPath',
  'backend-eng': 'Backend engineers use MagicPath to quickly prototype user interfaces and communicate with frontend teams more effectively.',
  'marketer': 'Marketers use MagicPath to rapidly create landing pages and marketing assets without waiting for design or engineering resources.',
  'sales': 'Sales quickly spin up prototypes for customers to help envision their enterprise workflow'
};
const roleLabels: Record<RoleType, string> = {
  'product-designer': 'Product Designer',
  'founder': 'Founder/executive',
  'design-engineer': 'Design Engineer',
  'frontend-eng': 'Frontend Eng',
  'backend-eng': 'Backend Eng',
  'marketer': 'Marketer',
  'sales': 'Sales'
};
const roleVisuals: Record<RoleType, React.ComponentType> = {
  'product-designer': ProductDesignerVisual,
  'founder': FounderVisual,
  'design-engineer': DesignEngineerVisual,
  'frontend-eng': FrontendEngVisual,
  'backend-eng': BackendEngVisual,
  'marketer': MarketerVisual,
  'sales': SalesVisual
};
export const OnboardingRoleQuestion = ({
  isOpen,
  onClose,
  onFinish
}: OnboardingRoleQuestionProps) => {
  const [selectedRole, setSelectedRole] = useState<RoleType>('founder');
  const handleRoleClick = (role: RoleType) => {
    setSelectedRole(role);
  };
  const handleFinish = () => {
    onFinish?.(selectedRole);
    onClose();
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
      }} onClick={onClose} className="fixed inset-0 bg-black/50 z-50" />

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
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] max-h-[800px] flex overflow-hidden pointer-events-auto">
              {/* Left Section */}
              <div className="flex-1 p-12 flex flex-col">
                {/* Logo */}
                <div className="mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 border-3 border-white rounded-md" />
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  What is your main role?
                </h1>

                {/* Subtitle */}
                <p className="text-lg text-gray-600 mb-2">
                  This helps us personalize your experience.
                </p>
                
                {/* Instruction */}
                <p className="text-sm text-gray-500 mb-8">
                  Select all that apply.
                </p>

                {/* Options */}
                <div className="flex-1 flex flex-col gap-3 overflow-y-auto min-h-0 -mr-4 pr-4">
                  <button onClick={() => handleRoleClick('product-designer')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'product-designer' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['product-designer']}
                  </button>

                  <button onClick={() => handleRoleClick('founder')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'founder' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['founder']}
                  </button>

                  <button onClick={() => handleRoleClick('design-engineer')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'design-engineer' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['design-engineer']}
                  </button>

                  <button onClick={() => handleRoleClick('frontend-eng')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'frontend-eng' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['frontend-eng']}
                  </button>

                  <button onClick={() => handleRoleClick('backend-eng')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'backend-eng' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['backend-eng']}
                  </button>

                  <button onClick={() => handleRoleClick('marketer')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'marketer' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['marketer']}
                  </button>

                  <button onClick={() => handleRoleClick('sales')} className={`px-6 py-4 text-left text-base font-medium rounded-lg border-2 shrink-0 transition-all ${selectedRole === 'sales' ? 'border-green-600 bg-green-50 text-gray-900' : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'}`}>
                    {roleLabels['sales']}
                  </button>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8 shrink-0">
                  <span className="text-sm text-gray-600">Question 5 of 5</span>
                  <button onClick={handleFinish} className="px-8 py-3 bg-green-800 hover:bg-green-900 text-white font-semibold rounded-lg transition-colors">
                    Finish
                  </button>
                </div>
              </div>

              {/* Right Section - Role Description */}
              <div className="w-[52%] bg-gray-50 p-8 flex items-center justify-center relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div key={selectedRole} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} exit={{
                opacity: 0,
                x: -20
              }} transition={{
                duration: 0.3
              }} className="w-full h-full max-w-xl flex flex-col items-center justify-center">
                    <div className="w-full mb-8">
                      {React.createElement(roleVisuals[selectedRole])}
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 w-full">
                      <p className="text-xl font-medium text-gray-900 leading-relaxed">
                        {roleDescriptions[selectedRole]}
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
};