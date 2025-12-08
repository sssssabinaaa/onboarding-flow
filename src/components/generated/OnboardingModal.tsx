import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PrototypeVisual, LandingPageVisual, MarketingVisual, DashboardVisual, DesignSystemVisual, ComponentsVisual, OtherVisual, YouTubeVisual, TwitterVisual, FriendVisual, LinkedInVisual, PodcastVisual, GoogleVisual, AiVisual, PortfolioVisual, BrandedSitesVisual, DesignVariantsVisual, ExportingCodeVisual, DreamRequestsVisual, DesignerRoleVisual, FounderRoleVisual, DesignEngineerRoleVisual, FrontendEngineerRoleVisual, SalesRoleVisual, TeamSoloVisual, TeamSmallVisual, TeamGrowingVisual, TeamEstablishedVisual, TeamEnterpriseVisual } from './CreationVisuals';
import magicpathLogo from '../../public/magicpath.svg';
interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: (data: OnboardingData) => void;
}
export interface OnboardingData {
  howDidYouHear: string;
  otherSource?: string;
  creationTypes: string[];
  otherCreationType?: string;
  excitedFeatures: string[];
  otherFeature?: string;
  role: string;
  otherRole?: string;
  teamSize: string;
}

// Question 1: How did you hear about us
type HearAboutSource = 'youtube' | 'twitter' | 'friend' | 'linkedin' | 'podcast' | 'google' | 'ai' | 'other';

// Question 2: What are you creating
type CreationType = 'prototypes' | 'landing' | 'marketing' | 'dashboards' | 'design-systems' | 'components' | 'other';

// Question 3: Excited features
type ExcitedFeature = 'portfolio' | 'branded-sites' | 'design-variants' | 'dashboards' | 'exporting-code' | 'dream-requests' | 'other';

// Question 4: Role
type Role = 'designer' | 'founder' | 'design-engineer' | 'frontend-engineer' | 'sales' | 'other';

// Question 5: Team Size
type TeamSize = 'solo' | 'small' | 'growing' | 'established' | 'enterprise';
const visualsMap: Record<CreationType, React.ComponentType> = {
  'prototypes': PrototypeVisual,
  'landing': LandingPageVisual,
  'marketing': MarketingVisual,
  'dashboards': DashboardVisual,
  'design-systems': DesignSystemVisual,
  'components': ComponentsVisual,
  'other': OtherVisual
};
const sourceVisualsMap: Record<string, React.ComponentType> = {
  'youtube': YouTubeVisual,
  'twitter': TwitterVisual,
  'friend': FriendVisual,
  'linkedin': LinkedInVisual,
  'podcast': PodcastVisual,
  'google': GoogleVisual,
  'ai': AiVisual,
  'other': OtherVisual
};
const featureVisualsMap: Record<string, React.ComponentType> = {
  'portfolio': PortfolioVisual,
  'branded-sites': BrandedSitesVisual,
  'design-variants': DesignVariantsVisual,
  'dashboards': DashboardVisual,
  'exporting-code': ExportingCodeVisual,
  'dream-requests': DreamRequestsVisual,
  'other': OtherVisual
};
const roleVisualsMap: Record<string, React.ComponentType> = {
  'designer': DesignerRoleVisual,
  'founder': FounderRoleVisual,
  'design-engineer': DesignEngineerRoleVisual,
  'frontend-engineer': FrontendEngineerRoleVisual,
  'sales': SalesRoleVisual,
  'other': OtherVisual
};
const teamSizeVisualsMap: Record<string, React.ComponentType> = {
  'solo': TeamSoloVisual,
  'small': TeamSmallVisual,
  'growing': TeamGrowingVisual,
  'established': TeamEstablishedVisual,
  'enterprise': TeamEnterpriseVisual
};
const roleDescriptions: Record<string, string> = {
  'designer': "Designers use MagicPath to quickly hand off production-ready code to eng.",
  'founder': "Founders use MagicPath to quickly test ideas before they're brought up at standup.",
  'design-engineer': "Design engineers save time by skipping over integrating their design files and frontend library",
  'frontend-engineer': "Frontend engineers quickly grab live branded components using MagicPath",
  'sales': "Sales quickly spin up prototypes for customers to help envision their enterprise workflow",
  'other': "Everyone else uses MagicPath to bring their creative ideas to life instantly."
};
const teamSizeDescriptions: Record<string, string> = {
  'solo': "Perfect for solo hackers building MVPs at lightning speed.",
  'small': "Keep your small team in sync with shareable prototypes and components.",
  'growing': "Land enterprise deals faster by spinning up custom product prototypes for clients in minutes, not weeks.",
  'established': "Standardize your components across multiple product squads effortlessly.",
  'enterprise': "Empower departments like Sales and Marketing to build with consistent, live components."
};

// Design layout visuals for Question 1 and 3
const DesignLayout1 = () => <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden p-6">
    <div className="space-y-4">
      <div className="h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-2" />
          <div className="w-24 h-3 bg-blue-200 rounded-full mx-auto" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="h-20 bg-purple-50 rounded-lg" />
        <div className="h-20 bg-pink-50 rounded-lg" />
      </div>
    </div>
  </div>;
const DesignLayout2 = () => <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden p-6">
    <div className="space-y-4">
      <div className="flex gap-3">
        <div className="flex-1 h-40 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg" />
        <div className="w-32 space-y-3">
          <div className="h-12 bg-orange-100 rounded-lg" />
          <div className="h-12 bg-yellow-100 rounded-lg" />
          <div className="h-12 bg-red-100 rounded-lg" />
        </div>
      </div>
    </div>
  </div>;
const DesignLayout3 = () => <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden p-6">
    <div className="space-y-4">
      <div className="h-24 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg flex items-center px-6">
        <div className="space-y-2 w-full">
          <div className="w-32 h-4 bg-green-300 rounded-full" />
          <div className="w-48 h-3 bg-green-200 rounded-full" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="h-16 bg-teal-50 rounded-lg" />
        <div className="h-16 bg-cyan-50 rounded-lg" />
        <div className="h-16 bg-sky-50 rounded-lg" />
      </div>
    </div>
  </div>;
export const OnboardingModal = ({
  isOpen,
  onClose,
  onComplete
}: OnboardingModalProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);

  // Question 1 state
  const [selectedSource, setSelectedSource] = useState<HearAboutSource | null>(null);
  const [sourceOtherText, setSourceOtherText] = useState('');

  // Question 2 state
  const [selectedTypes, setSelectedTypes] = useState<CreationType[]>([]);
  const [typeOtherText, setTypeOtherText] = useState('');

  // Question 3 state
  const [selectedFeatures, setSelectedFeatures] = useState<ExcitedFeature[]>([]);
  const [featureOtherText, setFeatureOtherText] = useState('');

  // Question 4 state
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);
  const [roleOtherText, setRoleOtherText] = useState('');

  // Question 5 state
  const [selectedTeamSize, setSelectedTeamSize] = useState<TeamSize | null>(null);
  const handleTypeClick = (type: CreationType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(prev => prev.filter(t => t !== type));
    } else {
      if (selectedTypes.length < 3) {
        setSelectedTypes(prev => [...prev, type]);
      }
    }
  };
  const handleFeatureClick = (feature: ExcitedFeature) => {
    // Single select mode for Question 3
    setSelectedFeatures([feature]);
  };
  const handleTypeOtherFocus = () => {
    if (!selectedTypes.includes('other')) {
      if (selectedTypes.length < 3) {
        setSelectedTypes(prev => [...prev, 'other']);
      }
    }
  };
  const handleFeatureOtherFocus = () => {
    // Single select mode for Question 3
    setSelectedFeatures(['other']);
  };
  const canProceed = () => {
    if (currentQuestion === 1) {
      return selectedSource !== null;
    }
    if (currentQuestion === 2) {
      return selectedTypes.length > 0;
    }
    if (currentQuestion === 3) {
      return selectedFeatures.length > 0;
    }
    if (currentQuestion === 4) {
      return selectedRole !== null;
    }
    if (currentQuestion === 5) {
      return selectedTeamSize !== null;
    }
    return false;
  };
  const handleNext = () => {
    if (currentQuestion < 5) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Complete onboarding
      const data: OnboardingData = {
        howDidYouHear: selectedSource || '',
        otherSource: sourceOtherText,
        creationTypes: selectedTypes,
        otherCreationType: typeOtherText,
        excitedFeatures: selectedFeatures,
        otherFeature: featureOtherText,
        role: selectedRole || '',
        otherRole: roleOtherText,
        teamSize: selectedTeamSize || ''
      };
      onComplete?.(data);
    }
  };
  const handleBack = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  const isTypeSelected = (type: CreationType) => selectedTypes.includes(type);
  const isFeatureSelected = (feature: ExcitedFeature) => selectedFeatures.includes(feature);

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -10
    },
    show: {
      opacity: 1,
      x: 0
    }
  };

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
      const scale = 0.7;
      const spacing = 160;
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
      if (index === 0) return {
        x: -140,
        y: -100,
        rotate: 0,
        scale,
        zIndex: 10
      };
      if (index === 1) return {
        x: 140,
        y: -100,
        rotate: 0,
        scale,
        zIndex: 10
      };
      if (index === 2) return {
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
  const renderRightSidebar = () => {
    // Special handling for Question 1 with selected source
    if (currentQuestion === 1 && selectedSource) {
      const VisualComponent = sourceVisualsMap[selectedSource] || OtherVisual;
      return <div className="relative w-full h-full max-w-2xl max-h-[600px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div key={selectedSource} initial={{
            opacity: 0,
            scale: 0.8,
            rotateY: 15,
            x: 50
          }} animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 600,
              damping: 40
            }
          }} exit={{
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: {
              duration: 0.2
            }
          }} className="w-[450px] h-[340px] shadow-2xl rounded-xl bg-white relative z-10" style={{
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)"
          }}>
              <VisualComponent />
            </motion.div>
          </AnimatePresence>
          
          {/* Background decorative elements that appear when selected */}
          <motion.div className="absolute -z-10 w-[500px] h-[400px] bg-gradient-to-tr from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-0" animate={{
          opacity: 1,
          scale: [0.8, 1.1, 0.9],
          rotate: [0, 90, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }} />
        </div>;
    }

    // Special handling for Question 4 with selected role
    if (currentQuestion === 4 && selectedRole) {
      const VisualComponent = roleVisualsMap[selectedRole] || OtherVisual;
      const roleText = roleDescriptions[selectedRole] || "";
      return <div className="relative w-full h-full max-w-2xl max-h-[600px] flex flex-col items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div key={selectedRole} initial={{
            opacity: 0,
            scale: 0.8,
            rotateY: -15,
            x: -50
          }} animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 600,
              damping: 40
            }
          }} exit={{
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: {
              duration: 0.2
            }
          }} className="w-[450px] h-[340px] shadow-2xl rounded-xl bg-white relative z-10 mb-8" style={{
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)"
          }}>
              <VisualComponent />
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
             <motion.div key={selectedRole + "-text"} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} transition={{
            delay: 0.1
          }} className="max-w-md text-center z-10">
               <p className="text-xl text-gray-700 font-medium leading-relaxed">
                 {roleText}
               </p>
             </motion.div>
          </AnimatePresence>
          
          {/* Background decorative elements */}
          <motion.div className="absolute -z-10 w-[600px] h-[500px] bg-gradient-to-tr from-pink-100/40 to-yellow-100/40 rounded-full blur-3xl opacity-0" animate={{
          opacity: 1,
          scale: [0.9, 1.1, 0.9],
          rotate: [0, 45, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }} />
        </div>;
    }

    // Special handling for Question 5 with selected team size
    if (currentQuestion === 5 && selectedTeamSize) {
      const VisualComponent = teamSizeVisualsMap[selectedTeamSize] || OtherVisual;
      const teamText = teamSizeDescriptions[selectedTeamSize] || "";
      return <div className="relative w-full h-full max-w-2xl max-h-[600px] flex flex-col items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div key={selectedTeamSize} initial={{
            opacity: 0,
            scale: 0.8,
            rotateY: 15,
            x: 50
          }} animate={{
            opacity: 1,
            scale: 1,
            rotateY: 0,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 600,
              damping: 40
            }
          }} exit={{
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: {
              duration: 0.2
            }
          }} className="w-[450px] h-[340px] shadow-2xl rounded-xl bg-white relative z-10 mb-8" style={{
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)"
          }}>
              <VisualComponent />
            </motion.div>
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
             <motion.div key={selectedTeamSize + "-text"} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} exit={{
            opacity: 0,
            y: -10
          }} transition={{
            delay: 0.1
          }} className="max-w-md text-center z-10">
               <p className="text-xl text-gray-700 font-medium leading-relaxed">
                 {teamText}
               </p>
             </motion.div>
          </AnimatePresence>
          
          {/* Background decorative elements */}
          <motion.div className="absolute -z-10 w-[600px] h-[500px] bg-gradient-to-tr from-blue-100/40 to-green-100/40 rounded-full blur-3xl opacity-0" animate={{
          opacity: 1,
          scale: [0.9, 1.1, 0.9],
          rotate: [0, -45, 0]
        }} transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear"
        }} />
        </div>;
    }

    // Special handling for Question 3 with selected features
    if (currentQuestion === 3 && selectedFeatures.length > 0) {
      const selectedFeature = selectedFeatures[0]; // Take the first one since it's single select
      const VisualComponent = featureVisualsMap[selectedFeature] || OtherVisual;
      return <div className="relative w-full h-full max-w-2xl max-h-[600px] flex items-center justify-center perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div key={selectedFeature} initial={{
            opacity: 0,
            scale: 0.8,
            rotateX: 15,
            y: 50
          }} animate={{
            opacity: 1,
            scale: 1,
            rotateX: 0,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 600,
              damping: 40
            }
          }} exit={{
            opacity: 0,
            scale: 0.9,
            y: -20,
            transition: {
              duration: 0.2
            }
          }} className="w-[450px] h-[340px] shadow-2xl rounded-xl bg-white relative z-10" style={{
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.3)"
          }}>
              <VisualComponent />
            </motion.div>
          </AnimatePresence>
          
          <motion.div className="absolute -z-10 w-[500px] h-[400px] bg-gradient-to-tr from-rose-100/50 to-indigo-100/50 rounded-full blur-3xl opacity-0" animate={{
          opacity: 1,
          scale: [0.8, 1.1, 0.9],
          rotate: [0, -90, 0]
        }} transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }} />
        </div>;
    }
    if (currentQuestion === 1 || currentQuestion === 3 || currentQuestion === 4 || currentQuestion === 5) {
      // Show design layouts
      // Cycle through layouts for variety
      let layouts;
      if (currentQuestion === 1) layouts = [DesignLayout1, DesignLayout2, DesignLayout3];else if (currentQuestion === 3) layouts = [DesignLayout3, DesignLayout1, DesignLayout2];else if (currentQuestion === 4) layouts = [DesignLayout2, DesignLayout3, DesignLayout1];else layouts = [DesignLayout1, DesignLayout2, DesignLayout3]; // Default fallback

      return <div className="relative w-full h-full max-w-2xl max-h-[600px] flex items-center justify-center">
          <AnimatePresence>
            {layouts.map((Layout, index) => {
            const position = getVisualPosition(index, 3);
            return <motion.div key={index} initial={{
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
                  <Layout />
                </motion.div>;
          })}
          </AnimatePresence>
        </div>;
    }
    if (currentQuestion === 2) {
      // Show selected creation type visuals
      return <div className="relative w-full h-full max-w-2xl max-h-[600px] flex items-center justify-center perspective-1000">
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
            const VisualComponent = visualsMap[type];
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
        </div>;
    }
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
      }} onClick={onClose} className="fixed inset-0 bg-black/50 z-50 backdrop-blur-xs" />

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

                {/* Content - Changes based on question */}
                <AnimatePresence mode="wait">
                  <motion.div key={currentQuestion} initial={{
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
              }} className="flex-1 flex flex-col min-h-0">
                    {/* Question 1: How did you hear about us */}
                    {currentQuestion === 1 && <>
                        <div className="mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                            How did you hear about us?
                          </h1>
                          <p className="text-lg text-gray-500 font-medium">
                            Select one option
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-3">
                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setSelectedSource('youtube')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedSource === 'youtube' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>YouTube</span>
                            </button>

                            <button onClick={() => setSelectedSource('twitter')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedSource === 'twitter' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Twitter (X)</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setSelectedSource('friend')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedSource === 'friend' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Friend/Colleague</span>
                            </button>

                            <button onClick={() => setSelectedSource('linkedin')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedSource === 'linkedin' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>LinkedIn</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setSelectedSource('podcast')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedSource === 'podcast' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Podcast/Newsletter</span>
                            </button>

                            <button onClick={() => setSelectedSource('google')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedSource === 'google' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Search (Google)</span>
                            </button>
                          </div>

                          <button onClick={() => setSelectedSource('ai')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedSource === 'ai' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <span>AI recommendation</span>
                          </button>

                          <div className="flex gap-3">
                            <button onClick={() => setSelectedSource('other')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 min-w-[120px]
                                ${selectedSource === 'other' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Other</span>
                            </button>
                            <input type="text" placeholder="Enter here..." value={sourceOtherText} onChange={e => setSourceOtherText(e.target.value)} onFocus={() => setSelectedSource('other')} className={`flex-1 px-6 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none 
                                ${selectedSource === 'other' ? 'border-green-600 focus:border-green-600 bg-white' : 'border-gray-200 focus:border-green-600 text-gray-600'}`} />
                          </div>
                        </div>
                      </>}

                    {/* Question 2: What are you creating */}
                    {currentQuestion === 2 && <>
                        <div className="mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                            What are you creating with MagicPath?
                          </h1>
                          <p className="text-lg text-gray-500 font-medium">
                            Choose up to three
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 -mr-2">
                          <button onClick={() => handleTypeClick('prototypes')} disabled={!isTypeSelected('prototypes') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${isTypeSelected('prototypes') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                            <div className="flex items-center justify-between">
                              <span>Prototypes or MVPs</span>
                              {/* Green dot removed */}
                            </div>
                          </button>

                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => handleTypeClick('landing')} disabled={!isTypeSelected('landing') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                                ${isTypeSelected('landing') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                              <div className="flex items-center justify-between">
                                <span>Landing Pages</span>
                                {/* Green dot removed */}
                              </div>
                            </button>

                            <button onClick={() => handleTypeClick('marketing')} disabled={!isTypeSelected('marketing') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                                ${isTypeSelected('marketing') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                              <div className="flex items-center justify-between">
                                <span>Marketing Websites</span>
                                {/* Green dot removed */}
                              </div>
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => handleTypeClick('dashboards')} disabled={!isTypeSelected('dashboards') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                                ${isTypeSelected('dashboards') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                              <div className="flex items-center justify-between">
                                <span>Dashboards</span>
                                {/* Green dot removed */}
                              </div>
                            </button>

                            <button onClick={() => handleTypeClick('design-systems')} disabled={!isTypeSelected('design-systems') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                                ${isTypeSelected('design-systems') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                              <div className="flex items-center justify-between">
                                <span>Design Systems</span>
                                {/* Green dot removed */}
                              </div>
                            </button>
                          </div>

                          <button onClick={() => handleTypeClick('components')} disabled={!isTypeSelected('components') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200
                              ${isTypeSelected('components') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                            <div className="flex items-center justify-between">
                              <span>Components for Desktop or Mobile</span>
                              {/* Green dot removed */}
                            </div>
                          </button>

                          <div className="flex gap-3">
                            <button onClick={() => handleTypeClick('other')} disabled={!isTypeSelected('other') && selectedTypes.length >= 3} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 min-w-[120px]
                                ${isTypeSelected('other') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'}`}>
                              <div className="flex items-center justify-between">
                                <span>Other</span>
                                {/* Green dot removed */}
                              </div>
                            </button>
                            <input type="text" placeholder="Enter here..." value={typeOtherText} onChange={e => setTypeOtherText(e.target.value)} onFocus={handleTypeOtherFocus} className={`flex-1 px-6 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none 
                                ${isTypeSelected('other') ? 'border-green-600 focus:border-green-600 bg-white' : 'border-gray-200 focus:border-green-600 text-gray-600'}`} />
                          </div>
                        </div>
                      </>}

                    {/* Question 3: Excited features */}
                    {currentQuestion === 3 && <>
                        <div className="mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                            What feature are you most excited to try?
                          </h1>
                          <p className="text-lg text-gray-500 font-medium">
                            Select one option
                          </p>
                        </div>

                        <motion.div className="flex-1 flex flex-col gap-3" variants={containerVariants} initial="hidden" animate="show" exit="exit">
                          <div className="grid grid-cols-2 gap-3">
                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('portfolio')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${isFeatureSelected('portfolio') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Portfolio</span>
                            </motion.button>

                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('branded-sites')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${isFeatureSelected('branded-sites') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Branded one-off sites</span>
                            </motion.button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('design-variants')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${isFeatureSelected('design-variants') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Design variants</span>
                            </motion.button>

                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('dashboards')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${isFeatureSelected('dashboards') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Dashboards</span>
                            </motion.button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('exporting-code')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${isFeatureSelected('exporting-code') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Exporting Code</span>
                            </motion.button>

                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('dream-requests')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${isFeatureSelected('dream-requests') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Dream requests?</span>
                            </motion.button>
                          </div>

                          <div className="flex gap-3">
                            <motion.button variants={itemVariants} onClick={() => handleFeatureClick('other')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 min-w-[120px]
                                ${isFeatureSelected('other') ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Other</span>
                            </motion.button>
                            <motion.input variants={itemVariants} type="text" placeholder="Enter here..." value={featureOtherText} onChange={e => setFeatureOtherText(e.target.value)} onFocus={handleFeatureOtherFocus} className={`flex-1 px-6 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none 
                                ${isFeatureSelected('other') ? 'border-green-600 focus:border-green-600 bg-white' : 'border-gray-200 focus:border-green-600 text-gray-600'}`} />
                          </div>
                        </motion.div>
                      </>}

                    {/* Question 4: Role */}
                    {currentQuestion === 4 && <>
                        <div className="mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                            What describes your role best?
                          </h1>
                          <p className="text-lg text-gray-500 font-medium">
                            Select one option
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-3">
                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setSelectedRole('designer')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedRole === 'designer' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Designer</span>
                            </button>

                            <button onClick={() => setSelectedRole('founder')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedRole === 'founder' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Founder</span>
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <button onClick={() => setSelectedRole('design-engineer')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedRole === 'design-engineer' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Design Engineer</span>
                            </button>

                            <button onClick={() => setSelectedRole('frontend-engineer')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                                ${selectedRole === 'frontend-engineer' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Frontend Engineer</span>
                            </button>
                          </div>

                          <button onClick={() => setSelectedRole('sales')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedRole === 'sales' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <span>Sales</span>
                          </button>

                          <div className="flex gap-3">
                            <button onClick={() => setSelectedRole('other')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 min-w-[120px]
                                ${selectedRole === 'other' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                              <span>Other</span>
                            </button>
                            <input type="text" placeholder="Enter here..." value={roleOtherText} onChange={e => setRoleOtherText(e.target.value)} onFocus={() => setSelectedRole('other')} className={`flex-1 px-6 py-4 text-base rounded-xl border-2 transition-all duration-200 focus:outline-none 
                                ${selectedRole === 'other' ? 'border-green-600 focus:border-green-600 bg-white' : 'border-gray-200 focus:border-green-600 text-gray-600'}`} />
                          </div>
                        </div>
                      </>}

                    {/* Question 5: Team Size */}
                    {currentQuestion === 5 && <>
                        <div className="mb-8">
                          <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
                            How large is your team?
                          </h1>
                          <p className="text-lg text-gray-500 font-medium">
                            Select one option
                          </p>
                        </div>

                        <div className="flex-1 flex flex-col gap-3 overflow-y-auto pr-2 -mr-2">
                          <button onClick={() => setSelectedTeamSize('solo')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedTeamSize === 'solo' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <div className="flex items-center justify-between">
                              <span>Solo (Just me)</span>
                              {/* Green dot removed */}
                            </div>
                          </button>

                          <button onClick={() => setSelectedTeamSize('small')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedTeamSize === 'small' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <div className="flex items-center justify-between">
                              <span>Small Team (2-10)</span>
                              {/* Green dot removed */}
                            </div>
                          </button>

                          <button onClick={() => setSelectedTeamSize('growing')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedTeamSize === 'growing' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <div className="flex items-center justify-between">
                              <span>Growing Team (11-50)</span>
                              {/* Green dot removed */}
                            </div>
                          </button>

                          <button onClick={() => setSelectedTeamSize('established')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedTeamSize === 'established' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <div className="flex items-center justify-between">
                              <span>Established (51-200)</span>
                              {/* Green dot removed */}
                            </div>
                          </button>

                          <button onClick={() => setSelectedTeamSize('enterprise')} className={`group relative px-6 py-4 text-left text-base font-medium rounded-xl border-2 transition-all duration-200 
                              ${selectedTeamSize === 'enterprise' ? 'border-green-600 bg-green-50 text-gray-900 shadow-sm' : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50'}`}>
                            <div className="flex items-center justify-between">
                              <span>Enterprise (200+)</span>
                              {/* Green dot removed */}
                            </div>
                          </button>
                        </div>
                      </>}
                  </motion.div>
                </AnimatePresence>

                {/* Footer */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                  <span className="text-sm font-medium text-gray-400">
                    Question {currentQuestion} of 5
                  </span>
                  <div className="flex gap-3">
                    {currentQuestion > 1 && <button onClick={handleBack} className="px-6 py-3 text-gray-600 font-medium hover:bg-gray-100 rounded-xl transition-colors">
                        Back
                      </button>}
                    <button onClick={handleNext} disabled={!canProceed()} className="px-8 py-3 bg-green-800 hover:bg-green-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors shadow-lg shadow-green-900/10">
                      {currentQuestion === 5 ? 'Complete' : 'Next'}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Section - Canvas */}
              <div className="flex-1 bg-gray-50 relative overflow-hidden flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />

                {/* Visuals Container */}
                {renderRightSidebar()}
              </div>
            </div>
          </motion.div>
        </>}
    </AnimatePresence>;
};