import React from 'react';
import { motion } from 'framer-motion';

// Shared Window Frame Component
export const WindowFrame = ({
  title,
  children,
  color = "bg-gray-100"
}: {
  title: string;
  children: React.ReactNode;
  color?: string;
}) => <div className="w-full h-full bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
    <div className={`h-8 ${color} border-b border-gray-200 flex items-center px-3 gap-1.5`}>
      <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
      <div className="ml-3 px-2 py-0.5 bg-white/50 rounded text-[10px] font-medium text-gray-500 flex-1 truncate text-center">
        {title}
      </div>
    </div>
    <div className="flex-1 relative overflow-hidden bg-white">
      {children}
    </div>
  </div>;

// --- Creation Type Visuals ---

export const PrototypeVisual = () => <WindowFrame title="Prototype V1">
    <div className="p-4 flex flex-col gap-3 h-full">
      <div className="w-1/3 h-8 bg-gray-100 rounded-lg animate-pulse" />
      <div className="flex gap-4 h-32">
        <div className="w-2/3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200" />
        <div className="w-1/3 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200" />
      </div>
      <div className="flex-1 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 p-3 flex gap-2">
        <div className="w-12 h-12 rounded-full bg-gray-200" />
        <div className="flex-1 space-y-2">
          <div className="w-full h-2 bg-gray-200 rounded" />
          <div className="w-2/3 h-2 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
    <motion.div initial={{
    scale: 0
  }} animate={{
    scale: 1
  }} transition={{
    delay: 0.5
  }} className="absolute bottom-4 right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg text-white">
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </motion.div>
  </WindowFrame>;
export const LandingPageVisual = () => <WindowFrame title="Product Launch" color="bg-purple-50">
    <div className="flex flex-col h-full">
      <div className="h-40 bg-purple-100 flex items-center justify-center p-6 text-center">
        <div className="space-y-2 w-full flex flex-col items-center">
          <div className="w-3/4 h-4 bg-purple-300 rounded-full" />
          <div className="w-1/2 h-3 bg-purple-200 rounded-full" />
          <div className="mt-4 w-24 h-6 bg-purple-600 rounded-md shadow-sm" />
        </div>
      </div>
      <div className="flex-1 p-4 grid grid-cols-3 gap-3">
        <div className="bg-gray-50 rounded h-20" />
        <div className="bg-gray-50 rounded h-20" />
        <div className="bg-gray-50 rounded h-20" />
      </div>
    </div>
  </WindowFrame>;
export const MarketingVisual = () => <WindowFrame title="Campaign Site" color="bg-orange-50">
    <div className="flex flex-col h-full overflow-hidden">
      <div className="h-12 border-b flex items-center justify-between px-4">
        <div className="w-20 h-3 bg-gray-200 rounded" />
        <div className="flex gap-2">
            <div className="w-12 h-2 bg-gray-100 rounded" />
            <div className="w-12 h-2 bg-gray-100 rounded" />
        </div>
      </div>
      <div className="p-4 grid grid-cols-2 gap-4 h-full">
         <div className="space-y-3">
            <div className="w-full h-24 bg-orange-100 rounded-lg" />
            <div className="w-full h-2 bg-gray-100 rounded" />
            <div className="w-2/3 h-2 bg-gray-100 rounded" />
         </div>
         <div className="space-y-3 pt-6">
            <div className="w-full h-2 bg-gray-100 rounded" />
            <div className="w-2/3 h-2 bg-gray-100 rounded" />
            <div className="w-full h-24 bg-blue-100 rounded-lg" />
         </div>
      </div>
    </div>
  </WindowFrame>;
export const DashboardVisual = () => <WindowFrame title="Analytics" color="bg-blue-50">
    <div className="p-4 grid grid-cols-2 gap-3 h-full">
      <div className="col-span-2 flex gap-3 h-16">
        <div className="flex-1 bg-blue-50 rounded-lg p-2 flex flex-col justify-between">
            <div className="w-12 h-2 bg-blue-200 rounded" />
            <div className="w-8 h-4 bg-blue-400 rounded" />
        </div>
        <div className="flex-1 bg-green-50 rounded-lg p-2 flex flex-col justify-between">
            <div className="w-12 h-2 bg-green-200 rounded" />
            <div className="w-8 h-4 bg-green-400 rounded" />
        </div>
        <div className="flex-1 bg-purple-50 rounded-lg p-2 flex flex-col justify-between">
            <div className="w-12 h-2 bg-purple-200 rounded" />
            <div className="w-8 h-4 bg-purple-400 rounded" />
        </div>
      </div>
      <div className="bg-gray-50 rounded-lg p-2 flex items-end justify-between gap-1 h-28">
         <div className="w-full bg-blue-300 rounded-t h-[40%]" />
         <div className="w-full bg-blue-300 rounded-t h-[70%]" />
         <div className="w-full bg-blue-300 rounded-t h-[50%]" />
         <div className="w-full bg-blue-300 rounded-t h-[80%]" />
      </div>
      <div className="bg-gray-50 rounded-lg flex items-center justify-center h-28 relative">
        <svg viewBox="0 0 36 36" className="w-16 h-16 text-indigo-400 transform -rotate-90">
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" strokeDasharray="75, 100" />
            <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e2e8f0" strokeWidth="6" strokeDasharray="25, 100" strokeDashoffset="-75" />
        </svg>
      </div>
    </div>
  </WindowFrame>;
export const DesignSystemVisual = () => <WindowFrame title="Foundations" color="bg-pink-50">
    <div className="p-4 space-y-4">
      <div className="space-y-2">
        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Colors</div>
        <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 shadow-sm" />
            <div className="w-8 h-8 rounded-full bg-purple-500 shadow-sm" />
            <div className="w-8 h-8 rounded-full bg-pink-500 shadow-sm" />
            <div className="w-8 h-8 rounded-full bg-orange-500 shadow-sm" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Typography</div>
        <div className="space-y-1">
            <div className="text-xl font-bold text-gray-900">Heading 1</div>
            <div className="text-sm font-medium text-gray-600">Body regular</div>
        </div>
      </div>
      <div className="space-y-2">
        <div className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Components</div>
        <div className="flex gap-2">
            <div className="px-3 py-1 bg-blue-600 text-white rounded text-xs">Primary</div>
            <div className="px-3 py-1 border border-gray-300 rounded text-xs">Secondary</div>
        </div>
      </div>
    </div>
  </WindowFrame>;
export const ComponentsVisual = () => <WindowFrame title="UI Library">
    <div className="p-4 grid grid-cols-2 gap-3">
        <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm flex flex-col gap-2">
            <div className="w-full h-20 bg-gray-50 rounded flex items-center justify-center">
                <div className="w-8 h-4 bg-green-500 rounded-full" />
            </div>
            <div className="w-16 h-2 bg-gray-200 rounded" />
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-2 shadow-sm flex flex-col gap-2">
            <div className="w-full h-20 bg-gray-50 rounded flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-gray-400 rounded" />
            </div>
            <div className="w-16 h-2 bg-gray-200 rounded" />
        </div>
    </div>
  </WindowFrame>;
export const PortfolioVisual = () => <WindowFrame title="My Portfolio" color="bg-rose-50">
    <div className="flex flex-col h-full bg-white">
        <div className="p-6 text-center border-b border-gray-100">
            <div className="w-16 h-16 rounded-full bg-gray-100 mx-auto mb-3 overflow-hidden">
                 <div className="w-full h-full bg-rose-100 flex items-center justify-center text-rose-500 font-bold text-xl">JP</div>
            </div>
            <div className="h-3 bg-gray-800 rounded w-32 mx-auto mb-2" />
            <div className="h-2 bg-gray-400 rounded w-48 mx-auto" />
        </div>
        <div className="p-4 grid grid-cols-2 gap-3 bg-gray-50 flex-1 overflow-hidden">
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                 <div className="w-full h-16 bg-gray-100 rounded mb-2" />
                 <div className="w-16 h-2 bg-gray-200 rounded" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                 <div className="w-full h-16 bg-gray-100 rounded mb-2" />
                 <div className="w-16 h-2 bg-gray-200 rounded" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                 <div className="w-full h-16 bg-gray-100 rounded mb-2" />
                 <div className="w-16 h-2 bg-gray-200 rounded" />
            </div>
            <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                 <div className="w-full h-16 bg-gray-100 rounded mb-2" />
                 <div className="w-16 h-2 bg-gray-200 rounded" />
            </div>
        </div>
    </div>
</WindowFrame>;
export const BrandedSitesVisual = () => <WindowFrame title="Brand Guide" color="bg-emerald-50">
    <div className="flex flex-col h-full p-6 space-y-6">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500 shadow-lg shadow-emerald-200" />
            <div className="space-y-2 flex-1">
                <div className="h-3 bg-gray-800 rounded w-24" />
                <div className="h-2 bg-gray-400 rounded w-full" />
            </div>
        </div>
        
        <div className="space-y-3">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Color Palette</div>
             <div className="flex gap-2">
                 <div className="h-10 flex-1 rounded bg-emerald-500 shadow-sm" />
                 <div className="h-10 flex-1 rounded bg-emerald-700 shadow-sm" />
                 <div className="h-10 flex-1 rounded bg-teal-400 shadow-sm" />
                 <div className="h-10 flex-1 rounded bg-gray-900 shadow-sm" />
             </div>
        </div>
        
        <div className="space-y-3">
             <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Typography</div>
             <div className="space-y-2 border-l-2 border-emerald-200 pl-3">
                 <div className="h-4 bg-gray-800 rounded w-3/4" />
                 <div className="h-4 bg-gray-800 rounded w-1/2" />
             </div>
        </div>
    </div>
</WindowFrame>;
export const DesignVariantsVisual = () => <WindowFrame title="A/B Testing" color="bg-violet-50">
    <div className="h-full flex relative">
        <div className="w-1/2 h-full border-r border-gray-200 p-3 bg-white">
            <div className="absolute top-2 left-2 text-[8px] font-bold text-gray-400 bg-gray-100 px-1 rounded">VAR A</div>
            <div className="mt-4 space-y-2">
                <div className="w-full h-20 bg-blue-100 rounded-lg mb-2" />
                <div className="w-full h-2 bg-gray-200 rounded" />
                <div className="w-2/3 h-2 bg-gray-200 rounded" />
                <div className="w-20 h-6 bg-blue-500 rounded mt-2" />
            </div>
        </div>
        <div className="w-1/2 h-full p-3 bg-gray-50">
            <div className="absolute top-2 right-2 text-[8px] font-bold text-gray-400 bg-white px-1 rounded shadow-sm">VAR B</div>
            <div className="mt-4 space-y-2">
                <div className="w-full h-20 bg-violet-100 rounded-xl mb-2" />
                <div className="w-full h-2 bg-gray-300 rounded" />
                <div className="w-2/3 h-2 bg-gray-300 rounded" />
                <div className="w-full h-8 bg-violet-600 rounded-full mt-2" />
            </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-6 h-6 bg-white rounded-full shadow border border-gray-200 flex items-center justify-center text-[10px] font-bold text-gray-400">
                VS
            </div>
        </div>
    </div>
</WindowFrame>;
export const ExportingCodeVisual = () => <WindowFrame title="Code Output" color="bg-gray-800">
    <div className="h-full bg-gray-900 p-4 font-mono text-[10px] overflow-hidden text-gray-300 space-y-2">
        <div className="flex gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
        </div>
        
        <div className="text-purple-400">export function <span className="text-yellow-300">Hero</span>() {'{'}</div>
        <div className="pl-4 text-blue-300">return (</div>
        <div className="pl-8 text-green-300">{'<div className="flex">'}</div>
        <div className="pl-12 text-green-300">{'<h1 className="text-4xl">'}</div>
        <div className="pl-16 text-white">Welcome Home</div>
        <div className="pl-12 text-green-300">{'</h1>'}</div>
        <div className="pl-8 text-green-300">{'</div>'}</div>
        <div className="pl-4 text-blue-300">)</div>
        <div className="text-purple-400">{'}'}</div>
        
        <motion.div initial={{
      opacity: 0,
      y: 10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      repeat: Infinity,
      duration: 1.5,
      repeatType: "reverse"
    }} className="w-2 h-4 bg-blue-500 inline-block align-middle ml-1" />
    </div>
</WindowFrame>;
export const DreamRequestsVisual = () => <WindowFrame title="Magic Mode" color="bg-fuchsia-50">
    <div className="h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4 relative overflow-hidden flex items-center justify-center">
        <motion.div animate={{
      rotate: 360
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }} className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        
        <motion.div initial={{
      scale: 0.8,
      opacity: 0.5
    }} animate={{
      scale: 1.1,
      opacity: 1
    }} transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }} className="w-32 h-32 rounded-full bg-white/20 blur-xl absolute" />
        
        <div className="relative z-10 text-center text-white">
            <div className="text-4xl mb-2">✨</div>
            <div className="font-bold text-lg">Make a Wish</div>
            <div className="text-xs text-white/80 mt-1">Anything is possible</div>
        </div>
        
        {[...Array(5)].map((_, i) => <motion.div key={i} initial={{
      y: 50,
      opacity: 0
    }} animate={{
      y: -100,
      opacity: [0, 1, 0]
    }} transition={{
      duration: 2 + Math.random() * 2,
      repeat: Infinity,
      delay: Math.random() * 2
    }} className="absolute text-yellow-300 text-xs" style={{
      left: `${20 + Math.random() * 60}%`
    }}>
                ★
            </motion.div>)}
    </div>
</WindowFrame>;
export const OtherVisual = () => <WindowFrame title="Custom Project">
    <div className="flex items-center justify-center h-full bg-gray-50">
        <div className="text-center p-6">
            <div className="w-16 h-16 bg-white rounded-full shadow-md mx-auto mb-3 flex items-center justify-center text-3xl">
                ✨
            </div>
            <div className="w-24 h-2 bg-gray-200 rounded-full mx-auto" />
            <div className="mt-2 w-16 h-2 bg-gray-200 rounded-full mx-auto" />
        </div>
    </div>
  </WindowFrame>;

// --- Source/Hearing Visuals ---

export const YouTubeVisual = () => <WindowFrame title="YouTube Video" color="bg-red-50">
    <div className="flex flex-col h-full">
      <div className="h-40 bg-gray-900 flex items-center justify-center relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-50" />
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 0.2
      }} className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-lg relative z-10">
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
        </motion.div>
        
        {/* Fake progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div className="w-1/3 h-full bg-red-600" />
        </div>
      </div>
      <div className="p-4 space-y-3">
        <div className="w-3/4 h-4 bg-gray-200 rounded" />
        <div className="w-1/2 h-3 bg-gray-100 rounded" />
        <div className="flex gap-2 mt-2 pt-2 border-t border-gray-100">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <div className="flex-1 space-y-1">
                <div className="w-24 h-2 bg-gray-200 rounded" />
                <div className="w-16 h-2 bg-gray-100 rounded" />
            </div>
            <div className="w-16 h-6 bg-red-100 rounded-full text-red-600 text-[10px] font-bold flex items-center justify-center">SUBSCRIBE</div>
        </div>
      </div>
    </div>
  </WindowFrame>;
export const TwitterVisual = () => <WindowFrame title="Social Feed" color="bg-sky-50">
    <div className="flex flex-col h-full">
       <div className="p-4 border-b border-gray-100">
          <div className="flex gap-3">
             <div className="w-10 h-10 rounded-full bg-sky-100 flex-shrink-0" />
             <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                   <div className="w-20 h-3 bg-gray-800 rounded" />
                   <div className="w-16 h-3 bg-gray-400 rounded" />
                </div>
                <div className="w-full h-3 bg-gray-600 rounded" />
                <div className="w-full h-3 bg-gray-600 rounded" />
                <div className="w-3/4 h-3 bg-gray-600 rounded" />
                
                <div className="pt-2 flex gap-4">
                    <div className="w-4 h-4 rounded-full bg-gray-100" />
                    <div className="w-4 h-4 rounded-full bg-green-100" />
                    <div className="w-4 h-4 rounded-full bg-red-100" />
                    <div className="w-4 h-4 rounded-full bg-blue-100" />
                </div>
             </div>
          </div>
       </div>
       <div className="flex-1 bg-gray-50 p-4 space-y-4">
          <div className="flex gap-3 opacity-50">
             <div className="w-8 h-8 rounded-full bg-gray-200" />
             <div className="flex-1 space-y-2">
                <div className="w-16 h-2 bg-gray-200 rounded" />
                <div className="w-full h-2 bg-gray-200 rounded" />
             </div>
          </div>
       </div>
       <motion.div initial={{
      y: 20,
      opacity: 0
    }} animate={{
      y: 0,
      opacity: 1
    }} transition={{
      delay: 0.3
    }} className="absolute bottom-4 right-4 w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center shadow-lg text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5v14M5 12h14" />
          </svg>
       </motion.div>
    </div>
  </WindowFrame>;
export const FriendVisual = () => <WindowFrame title="Messages" color="bg-green-50">
    <div className="flex flex-col h-full bg-gray-50">
       <div className="flex-1 p-4 space-y-4">
          <motion.div initial={{
        x: -20,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        delay: 0.1
      }} className="flex gap-2 max-w-[80%]">
             <div className="w-8 h-8 rounded-full bg-green-200 self-end mb-1" />
             <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 space-y-1">
                 <div className="w-32 h-2 bg-gray-200 rounded" />
                 <div className="w-24 h-2 bg-gray-200 rounded" />
             </div>
          </motion.div>
          
          <motion.div initial={{
        x: 20,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="flex gap-2 max-w-[80%] ml-auto flex-row-reverse">
             <div className="w-8 h-8 rounded-full bg-blue-200 self-end mb-1" />
             <div className="bg-blue-500 p-3 rounded-2xl rounded-br-none shadow-sm space-y-1">
                 <div className="w-28 h-2 bg-blue-300 rounded" />
                 <div className="w-16 h-2 bg-blue-300 rounded" />
             </div>
          </motion.div>

          <motion.div initial={{
        x: -20,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        delay: 0.5
      }} className="flex gap-2 max-w-[80%]">
             <div className="w-8 h-8 rounded-full bg-green-200 self-end mb-1" />
             <div className="bg-white p-3 rounded-2xl rounded-bl-none shadow-sm border border-gray-100 flex items-center gap-2">
                 <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center text-[10px]">✨</div>
                 <div className="w-32 h-2 bg-gray-200 rounded" />
             </div>
          </motion.div>
       </div>
       <div className="p-3 bg-white border-t border-gray-100">
           <div className="h-8 bg-gray-100 rounded-full w-full" />
       </div>
    </div>
  </WindowFrame>;
export const LinkedInVisual = () => <WindowFrame title="Network" color="bg-blue-50">
    <div className="flex flex-col h-full bg-gray-50">
       <div className="h-24 bg-white relative border-b border-gray-200 mb-2">
          <div className="h-12 bg-blue-600" />
          <div className="absolute top-6 left-4 border-2 border-white rounded-full">
              <div className="w-16 h-16 rounded-full bg-gray-200" />
          </div>
          <div className="absolute top-14 right-4 flex gap-2">
              <div className="w-6 h-6 rounded bg-gray-100" />
              <div className="w-20 h-6 rounded-full bg-blue-600" />
          </div>
       </div>
       <div className="p-4 bg-white flex-1 space-y-3">
           <div className="w-32 h-4 bg-gray-800 rounded" />
           <div className="w-24 h-3 bg-gray-400 rounded" />
           <div className="w-full h-12 bg-gray-100 rounded p-2 text-xs text-gray-400">
               About section...
           </div>
           
           <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                  <div className="w-full h-2 bg-gray-200 rounded" />
              </div>
              <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                  <div className="w-full h-2 bg-gray-200 rounded" />
              </div>
           </div>
       </div>
    </div>
  </WindowFrame>;
export const PodcastVisual = () => <WindowFrame title="Now Playing" color="bg-purple-50">
    <div className="flex flex-col h-full bg-gray-900 text-white p-6 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-gray-900 to-gray-900" />
        
        <div className="w-32 h-32 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 shadow-2xl mb-6 relative z-10 flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0 1 7-7 7 7 0 0 1 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 0 0-9-9z" />
            </svg>
        </div>
        
        <div className="space-y-2 text-center w-full z-10">
            <div className="h-4 bg-gray-700 rounded w-2/3 mx-auto" />
            <div className="h-2 bg-gray-800 rounded w-1/2 mx-auto" />
        </div>
        
        <div className="mt-8 flex items-center gap-4 w-full justify-center z-10">
             <div className="w-4 h-4 text-gray-500">⏮</div>
             <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">▶</div>
             <div className="w-4 h-4 text-gray-500">⏭</div>
        </div>

        {/* Audio Visualizer Bars */}
        <div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-1 opacity-30">
            {[1, 2, 3, 4, 5, 4, 3, 2, 1, 2, 3, 4, 6, 4, 2].map((h, i) => <motion.div key={i} animate={{
        height: [h * 4, h * 8, h * 4]
      }} transition={{
        repeat: Infinity,
        duration: 1,
        delay: i * 0.1
      }} className="w-2 bg-purple-500 rounded-t" />)}
        </div>
    </div>
  </WindowFrame>;
export const GoogleVisual = () => <WindowFrame title="Search" color="bg-white">
    <div className="flex flex-col h-full bg-white p-6 items-center justify-center">
        <div className="text-4xl font-bold mb-6 flex gap-1">
            <span className="text-blue-500">G</span>
            <span className="text-red-500">o</span>
            <span className="text-yellow-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
        </div>
        
        <div className="w-full h-10 rounded-full border border-gray-200 shadow-sm flex items-center px-4 gap-3 mb-8">
            <div className="w-4 h-4 text-gray-400">🔍</div>
            <div className="flex-1 h-2 bg-gray-100 rounded" />
            <div className="w-4 h-4 text-blue-500">🎤</div>
        </div>
        
        <div className="flex gap-3">
             <div className="h-8 px-4 bg-gray-50 rounded border border-gray-100 flex items-center text-xs text-gray-600">Google Search</div>
             <div className="h-8 px-4 bg-gray-50 rounded border border-gray-100 flex items-center text-xs text-gray-600">I'm Feeling Lucky</div>
        </div>
    </div>
  </WindowFrame>;
export const AiVisual = () => <WindowFrame title="AI Assistant" color="bg-indigo-50">
    <div className="flex flex-col h-full bg-gradient-to-b from-indigo-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
        
        <div className="flex-1 p-4 flex flex-col items-center justify-center text-center space-y-6">
            <motion.div animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 5, -5, 0]
      }} transition={{
        repeat: Infinity,
        duration: 4
      }} className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M12 2a10 10 0 0 1 10 10c0 2.97-1.35 5.5-3.5 7.5-.02.02-.44 2.5-1 4.5h-3c-.56-2-.98-4.48-1-4.5A9.98 9.98 0 0 1 6 8a6 6 0 0 1 6-6z" />
                    <path d="M12 12 2.1 12.1" />
                    <path d="M12 12 18.9 5.1" />
                </svg>
            </motion.div>
            
            <div className="space-y-2 max-w-[80%]">
                <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.5
        }} className="h-2 bg-indigo-100 rounded-full w-full" />
                <motion.div initial={{
          opacity: 0,
          y: 10
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.7
        }} className="h-2 bg-indigo-100 rounded-full w-2/3 mx-auto" />
            </div>
        </div>
        
        <div className="p-4 border-t border-indigo-100 bg-white/50 backdrop-blur-sm">
            <div className="flex gap-2 items-center">
                 <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center">✨</div>
                 <div className="flex-1 h-8 bg-white border border-indigo-100 rounded-lg shadow-sm" />
            </div>
        </div>
    </div>
  </WindowFrame>;

// --- Role Visuals (Question 4) ---

export const DesignerRoleVisual = () => <WindowFrame title="Handoff" color="bg-pink-50">
    <div className="flex flex-col h-full items-center justify-center p-6 relative overflow-hidden">
      <div className="flex items-center gap-8">
        <motion.div initial={{
        x: -20,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.5
      }} className="w-20 h-24 bg-pink-100 rounded-lg border-2 border-pink-200 flex flex-col items-center justify-center gap-2">
          <div className="w-8 h-8 rounded-full bg-pink-400" />
          <div className="w-12 h-2 bg-pink-300 rounded" />
        </motion.div>

        <motion.div animate={{
        x: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 1.5
      }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.div>

        <motion.div initial={{
        x: 20,
        opacity: 0
      }} animate={{
        x: 0,
        opacity: 1
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }} className="w-20 h-24 bg-gray-900 rounded-lg border-2 border-gray-700 flex flex-col items-center justify-center gap-2">
          <div className="text-green-400 font-mono text-xl">{'< >'}</div>
          <div className="w-12 h-2 bg-gray-700 rounded" />
        </motion.div>
      </div>
      <div className="absolute bottom-6 text-sm text-gray-500 font-medium">Design to Code</div>
    </div>
</WindowFrame>;
export const FounderRoleVisual = () => <WindowFrame title="Rapid Testing" color="bg-yellow-50">
    <div className="flex flex-col h-full items-center justify-center p-6 bg-gradient-to-t from-yellow-50/50 to-white">
      <motion.div animate={{
      scale: [1, 1.1, 1],
      filter: ["brightness(1)", "brightness(1.2)", "brightness(1)"]
    }} transition={{
      repeat: Infinity,
      duration: 2
    }} className="relative">
        <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg shadow-yellow-200 z-10 relative">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2">
            <path d="M12 2a6 6 0 0 1 6 6c0 2.97-1.35 5.5-3.5 7.5-.02.02-.44 2.5-1 4.5h-3c-.56-2-.98-4.48-1-4.5A9.98 9.98 0 0 1 6 8a6 6 0 0 1 6-6z" />
          </svg>
        </div>
        <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-40 animate-pulse" />
      </motion.div>
      <div className="mt-8 flex gap-2">
        <motion.div animate={{
        height: [10, 20, 10]
      }} transition={{
        repeat: Infinity,
        duration: 1,
        delay: 0
      }} className="w-3 bg-yellow-200 rounded-full" />
        <motion.div animate={{
        height: [15, 30, 15]
      }} transition={{
        repeat: Infinity,
        duration: 1,
        delay: 0.2
      }} className="w-3 bg-yellow-300 rounded-full" />
        <motion.div animate={{
        height: [10, 25, 10]
      }} transition={{
        repeat: Infinity,
        duration: 1,
        delay: 0.4
      }} className="w-3 bg-yellow-400 rounded-full" />
      </div>
    </div>
</WindowFrame>;
export const DesignEngineerRoleVisual = () => <WindowFrame title="Integration" color="bg-cyan-50">
    <div className="flex flex-col h-full items-center justify-center p-6 bg-cyan-50/30">
       <div className="relative w-full max-w-[200px] h-32 flex items-center justify-center">
         <motion.div animate={{
        x: [0, 25, 0]
      }} transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }} className="absolute left-0 w-24 h-24 bg-white border-2 border-dashed border-gray-300 rounded-xl z-10 flex items-center justify-center text-gray-400 font-mono text-xs">
           Design
         </motion.div>
         <motion.div animate={{
        x: [0, -25, 0]
      }} transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut"
      }} className="absolute right-0 w-24 h-24 bg-cyan-100 border-2 border-cyan-200 rounded-xl z-20 flex items-center justify-center shadow-lg">
           <div className="text-cyan-700 font-bold">Code</div>
         </motion.div>
       </div>
       <div className="mt-4 flex items-center gap-2 text-cyan-600 text-sm font-medium">
         <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
           <path d="M5 12l14 9-14 9V3z" />
         </svg>
         <span>Synced</span>
       </div>
    </div>
</WindowFrame>;
export const FrontendEngineerRoleVisual = () => <WindowFrame title="Components" color="bg-blue-50">
    <div className="flex h-full">
      <div className="w-1/3 border-r border-gray-100 p-3 space-y-2 bg-gray-50">
        <div className="w-full h-8 bg-white border border-gray-200 rounded shadow-sm" />
        <motion.div animate={{
        x: [0, 100, 0],
        y: [0, 20, 0],
        scale: [1, 0.5, 1],
        opacity: [1, 0, 1]
      }} transition={{
        repeat: Infinity,
        duration: 2.5,
        times: [0, 0.5, 1]
      }} className="w-full h-8 bg-blue-500 rounded shadow-lg z-20" />
        <div className="w-full h-8 bg-white border border-gray-200 rounded shadow-sm" />
        <div className="w-full h-8 bg-white border border-gray-200 rounded shadow-sm" />
      </div>
      <div className="flex-1 p-4 flex items-center justify-center bg-white relative">
        <div className="w-full h-32 border-2 border-dashed border-gray-200 rounded-lg flex items-center justify-center bg-gray-50/50">
          <motion.div animate={{
          opacity: [0, 1, 0],
          scale: [0.8, 1, 0.8]
        }} transition={{
          repeat: Infinity,
          duration: 2.5,
          delay: 1.25
        }} className="w-32 h-10 bg-blue-500 rounded flex items-center justify-center text-white font-medium shadow-xl">
            Button
          </motion.div>
        </div>
        <div className="absolute top-2 right-2 flex gap-1">
          <div className="w-2 h-2 bg-green-400 rounded-full" />
          <div className="text-[10px] text-gray-400">Live</div>
        </div>
      </div>
    </div>
</WindowFrame>;
export const SalesRoleVisual = () => <WindowFrame title="Demo Mode" color="bg-emerald-50">
    <div className="flex flex-col h-full bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/30 to-transparent" />
      
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[200px] aspect-video bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl relative flex items-center justify-center group">
          <motion.div whileHover={{
          scale: 1.1
        }} animate={{
          scale: [1, 1.05, 1]
        }} transition={{
          repeat: Infinity,
          duration: 2
        }} className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-emerald-500/30">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white" className="ml-1">
              <path d="M5 3l14 9-14 9V3z" />
            </svg>
          </motion.div>
          
          <div className="absolute -right-4 -bottom-4 w-24 h-16 bg-white rounded-lg shadow-lg p-2 z-10">
            <div className="space-y-1">
               <div className="w-full h-2 bg-gray-200 rounded" />
               <div className="w-2/3 h-2 bg-gray-200 rounded" />
               <div className="w-full h-4 bg-emerald-100 rounded mt-1" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-3 bg-black/20 backdrop-blur-sm flex justify-between items-center text-xs text-emerald-100">
        <span>Enterprise Demo</span>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span>Online</span>
        </div>
      </div>
    </div>
</WindowFrame>;

// --- Team Size Visuals (Question 5) ---

export const TeamSoloVisual = () => <WindowFrame title="Solo Hacker" color="bg-indigo-50">
  <div className="flex items-center justify-center h-full bg-white relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
    
    <div className="relative z-10 flex flex-col items-center gap-4">
      <motion.div animate={{
        y: [0, -10, 0],
        boxShadow: ["0 4px 6px -1px rgba(0, 0, 0, 0.1)", "0 20px 25px -5px rgba(0, 0, 0, 0.1)", "0 4px 6px -1px rgba(0, 0, 0, 0.1)"]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }} className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center text-white text-3xl shadow-xl">
        🚀
      </motion.div>
      
      <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 flex items-center gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-sm font-medium text-gray-600">Shipping Mode</span>
      </div>
    </div>

    {/* Flying particles */}
    {[...Array(6)].map((_, i) => <motion.div key={i} className="absolute w-2 h-2 bg-indigo-200 rounded-full" initial={{
      x: 0,
      y: 0,
      opacity: 0
    }} animate={{
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
      opacity: [0, 1, 0],
      scale: [0, 1, 0]
    }} transition={{
      duration: 2,
      repeat: Infinity,
      delay: i * 0.3,
      ease: "easeOut"
    }} style={{
      left: '50%',
      top: '50%'
    }} />)}
  </div>
</WindowFrame>;
export const TeamSmallVisual = () => <WindowFrame title="Team Sync" color="bg-orange-50">
  <div className="flex items-center justify-center h-full bg-white p-6">
    <div className="relative w-48 h-48">
      {/* Central Hub */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center border-4 border-white shadow-sm z-10">
          <div className="w-8 h-8 bg-orange-500 rounded-full" />
        </div>
      </div>

      {/* Orbiting Members */}
      {[0, 1, 2].map(i => <motion.div key={i} className="absolute inset-0" animate={{
        rotate: 360
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
        delay: i * -2
      }}>
          <motion.div className="absolute top-0 left-1/2 -ml-6 w-12 h-12 bg-white rounded-full shadow-md border border-gray-100 p-1 flex items-center justify-center" animate={{
          rotate: -360
        }} transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
          delay: i * -2
        }}>
            <div className={`w-8 h-8 rounded-full bg-${['blue', 'green', 'purple'][i]}-400 opacity-80`} />
          </motion.div>
        </motion.div>)}

      {/* Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <motion.circle cx="50%" cy="50%" r="60" fill="none" stroke="#fed7aa" strokeWidth="2" strokeDasharray="4 4" animate={{
          rotate: -360
        }} transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }} />
      </svg>
    </div>
  </div>
</WindowFrame>;
export const TeamGrowingVisual = () => <WindowFrame title="Client Prototypes" color="bg-blue-50">
  <div className="flex flex-col h-full p-4 bg-white relative overflow-hidden">
    <div className="flex-1 flex flex-col items-center justify-center gap-4 relative">
      {/* Client request appears */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="absolute top-4 left-4 bg-gray-50 border border-gray-200 rounded-lg p-3 shadow-sm z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full" />
          <div className="h-2 bg-gray-300 rounded w-20" />
        </div>
        <div className="text-xs text-gray-600">"Need a custom dashboard<br/>prototype by Friday"</div>
      </motion.div>

      {/* Prototype being built - shows rapid creation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ delay: 0.5, duration: 0.4 }}
        className="w-48 h-32 bg-white border-2 border-blue-300 rounded-lg shadow-lg p-3 relative z-20"
      >
        {/* Building animation - elements appear quickly */}
        <motion.div initial={{ width: 0 }} animate={{ width: "75%" }} transition={{ delay: 0.7, duration: 0.3 }} className="h-3 bg-blue-200 rounded mb-2" />
        <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ delay: 0.9, duration: 0.3 }} className="h-2 bg-gray-100 rounded mb-1" />
        <motion.div initial={{ width: 0 }} animate={{ width: "60%" }} transition={{ delay: 1.1, duration: 0.3 }} className="h-2 bg-gray-100 rounded mb-3" />
        <motion.div initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ delay: 1.3, duration: 0.3 }} className="h-6 bg-blue-500 rounded mt-auto" />
        
        {/* "Building" indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, delay: 0.7 }}
          className="absolute top-2 right-2 bg-blue-100 text-blue-700 text-[10px] font-bold px-2 py-1 rounded"
        >
          Building...
        </motion.div>
      </motion.div>

      {/* Arrow showing progression */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6 }}
        className="flex items-center gap-2"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <div className="text-xs text-gray-500 font-medium">Ready in minutes</div>
      </motion.div>

      {/* Prototype being shared/presented */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="w-48 h-32 bg-white border-2 border-green-400 rounded-lg shadow-xl p-3 relative z-30"
      >
        <div className="h-3 bg-blue-300 rounded mb-2 w-3/4" />
        <div className="h-2 bg-gray-200 rounded mb-1 w-full" />
        <div className="h-2 bg-gray-200 rounded mb-3 w-3/5" />
        <div className="h-6 bg-blue-600 rounded w-2/5 mt-auto" />
        
        {/* Share indicator */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2.3, type: "spring" }}
          className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" y1="3" x2="12" y2="15" />
          </svg>
          Shared
        </motion.div>
      </motion.div>

      {/* Enterprise win badge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.8, type: "spring", stiffness: 200 }}
        className="absolute bottom-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-40"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
        <span className="text-sm font-bold">Deal Closed</span>
      </motion.div>
    </div>
  </div>
</WindowFrame>;
export const TeamEstablishedVisual = () => <WindowFrame title="Organization" color="bg-slate-50">
  <div className="flex flex-col h-full bg-slate-50 p-4 overflow-hidden relative">
    <div className="absolute top-0 left-0 w-full h-1 bg-slate-200" />
    
    <div className="flex gap-4 h-full">
      {/* Sidebar */}
      <div className="w-1/4 h-full bg-white rounded-lg shadow-sm p-2 flex flex-col gap-2">
        <div className="w-full h-8 bg-slate-100 rounded" />
        <div className="w-full h-px bg-slate-100 my-1" />
        {[1, 2, 3].map(i => <div key={i} className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-slate-200" />
            <div className="w-12 h-2 bg-slate-200 rounded" />
          </div>)}
      </div>
      
      {/* Main Grid */}
      <div className="flex-1 grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map(i => <motion.div key={i} initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: i * 0.1
        }} className="bg-white rounded-lg shadow-sm p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <div className="w-8 h-8 rounded-full bg-slate-100" />
              <div className="w-4 h-4 rounded bg-green-100" />
            </div>
            <div className="w-full h-2 bg-slate-100 rounded mt-2" />
            <div className="w-2/3 h-2 bg-slate-100 rounded" />
          </motion.div>)}
      </div>
    </div>
  </div>
</WindowFrame>;
export const TeamEnterpriseVisual = () => <WindowFrame title="Unified System" color="bg-gray-900">
  <div className="h-full bg-gray-900 flex flex-col items-center justify-center p-4 relative overflow-hidden text-white">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

    {/* Connecting Lines */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Left Line */}
      <div className="absolute w-[160px] h-[1px] bg-gradient-to-r from-pink-500/30 to-blue-500/30 -rotate-[45deg] -translate-x-20 -translate-y-12 origin-right" />
      {/* Right Line */}
      <div className="absolute w-[160px] h-[1px] bg-gradient-to-l from-emerald-500/30 to-blue-500/30 rotate-[45deg] translate-x-20 -translate-y-12 origin-left" />
      
      {/* Particles */}
      <motion.div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,1)]" animate={{
        x: [0, -110],
        y: [40, -70],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }} />
      <motion.div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,1)]" animate={{
        x: [0, 110],
        y: [40, -70],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 2,
        repeat: Infinity,
        ease: "linear",
        delay: 1
      }} />
    </div>

    {/* Marketing & Sales Nodes */}
    <div className="w-full flex justify-between px-12 mb-16 z-10">
        {/* Marketing Node */}
        <div className="flex flex-col items-center gap-2">
            <motion.div className="w-28 h-20 bg-gray-800 border border-gray-700 rounded-lg shadow-lg flex flex-col p-2.5 gap-2" animate={{
          y: [0, -5, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-pink-500 rounded-full" />
                    <div className="text-[10px] text-gray-300 font-medium">Marketing</div>
                </div>
                <div className="mt-auto space-y-1.5">
                   <div className="w-full h-1.5 bg-gray-700 rounded-full opacity-50" />
                   <div className="w-2/3 h-1.5 bg-gray-700 rounded-full opacity-50" />
                   <motion.div className="w-full h-5 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center" animate={{
              backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(59, 130, 246, 0.4)", "rgba(59, 130, 246, 0.2)"]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                       <div className="w-12 h-1.5 bg-blue-400 rounded-full" />
                   </motion.div>
                </div>
            </motion.div>
        </div>

        {/* Sales Node */}
        <div className="flex flex-col items-center gap-2">
            <motion.div className="w-28 h-20 bg-gray-800 border border-gray-700 rounded-lg shadow-lg flex flex-col p-2.5 gap-2" animate={{
          y: [0, -5, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}>
                <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <div className="text-[10px] text-gray-300 font-medium">Sales</div>
                </div>
                <div className="mt-auto space-y-1.5">
                   <div className="flex gap-1">
                      <div className="w-1/3 h-8 bg-gray-700 rounded opacity-50" />
                      <div className="w-2/3 h-8 bg-gray-700 rounded opacity-50" />
                   </div>
                </div>
            </motion.div>
        </div>
    </div>

    {/* Central System Hub */}
    <div className="relative z-10 p-1 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-900/50">
        <div className="bg-gray-900 rounded-xl px-6 py-3 flex items-center gap-3 min-w-[200px]">
             <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-inner">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2-1-2-1-2 1 2 1zm0-3.5L6 7l6 3.5L18 7l-6-3.5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                 </svg>
             </div>
             <div>
                 <div className="font-bold text-sm text-white">Design System</div>
                 <div className="text-[10px] text-gray-400 flex items-center gap-1.5">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                     </span>
                     Syncing Updates
                 </div>
             </div>
        </div>
    </div>

  </div>
</WindowFrame>;