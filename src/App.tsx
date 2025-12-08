import { useState } from 'react';
import { Container, Theme } from './settings/types';
import { OnboardingModal } from './components/generated/OnboardingModal';
import { CreditsScreen } from './components/generated/CreditsScreen';
import { AnimatePresence } from 'framer-motion';
import magicpathLogo from './public/magicpath.svg';

let theme: Theme = 'light';
// only use 'centered' container for standalone components, never for full page apps or websites.
let container: Container = 'none';

function App() {
  const [showCredits, setShowCredits] = useState(true);
  const [showOnboarding, setShowOnboarding] = useState(false);

  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const handleGetStarted = () => {
    setShowCredits(false);
    setShowOnboarding(true);
  };

  const handleSkip = () => {
    setShowCredits(false);
    setShowOnboarding(false);
  };

  const handleOnboardingClose = () => {
    setShowOnboarding(false);
  };

  const generatedComponent = (
    <>
      <AnimatePresence>
        {showCredits && (
          <CreditsScreen onGetStarted={handleGetStarted} onSkip={handleSkip} />
        )}
      </AnimatePresence>
      <OnboardingModal isOpen={showOnboarding} onClose={handleOnboardingClose} />
    </>
  );

  // Base UI structure matching the screenshot
  const baseUI = (
    <div className="h-screen w-screen flex flex-col bg-gray-50">
      {/* Top Navigation Bar */}
      <div className="h-12 bg-gray-100 border-b border-gray-200 flex items-center justify-between px-4">
        <div className="text-sm font-medium text-gray-700">Themes</div>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Import from web
          </button>
          <button className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            Share
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-100 border-r border-gray-200 flex flex-col">
          {/* Logo and File Name */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <img src={magicpathLogo} alt="MagicPath" className="w-5 h-5" />
              <span className="text-sm font-medium text-gray-900">My Cool File</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-500">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>

          {/* Tabs */}
          <div className="p-2 border-b border-gray-200">
            <div className="flex gap-1">
              <button className="flex-1 px-3 py-2 bg-gray-200 text-sm font-medium text-gray-900 rounded-md">
                Components
              </button>
              <button className="flex-1 px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:bg-gray-50">
                Libraries
              </button>
            </div>
          </div>

          {/* Empty sidebar content area */}
          <div className="flex-1"></div>

          {/* Bottom Icons */}
          <div className="p-3 border-t border-gray-200 flex items-center gap-3">
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <path d="M12 17h.01" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Central Canvas Area */}
        <div className="flex-1 bg-white relative">
          {/* Empty canvas - this is where content would go */}
          
          {/* Bottom Toolbar */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white rounded-full shadow-lg border border-gray-200 px-2 py-2">
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center hover:bg-green-700 shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 11v-1a2 2 0 0 0-2-2h-5a2 2 0 0 0-2 2v1" />
                <path d="M14 10H9.5a2.5 2.5 0 0 0 0 5H11" />
                <line x1="22" y1="22" x2="16.5" y2="16.5" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="9" x2="20" y2="9" />
                <line x1="4" y1="15" x2="20" y2="15" />
                <line x1="10" y1="3" x2="8" y2="21" />
                <line x1="16" y1="3" x2="14" y2="21" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (container === 'centered') {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center">
        {generatedComponent}
      </div>
    );
  } else {
    return (
      <>
        {baseUI}
        {generatedComponent}
      </>
    );
  }
}

export default App;