import React from 'react';
import { motion } from 'framer-motion';
export const ProductDesignerVisual = () => <div className="relative w-full h-64 flex items-center justify-center">
    <motion.div initial={{
    x: -30,
    rotate: -5,
    opacity: 0
  }} animate={{
    x: -20,
    rotate: -5,
    opacity: 1
  }} transition={{
    duration: 0.5,
    ease: "easeOut"
  }} className="w-32 h-44 bg-white rounded-xl shadow-lg border border-purple-100 flex flex-col p-3 gap-3 absolute z-10">
      <div className="w-full h-20 bg-purple-50 rounded-lg flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-purple-200" />
      </div>
      <div className="space-y-2">
        <div className="w-full h-2 bg-purple-50 rounded-full" />
        <div className="w-3/4 h-2 bg-purple-50 rounded-full" />
      </div>
    </motion.div>
    
    <motion.div initial={{
    scale: 0
  }} animate={{
    scale: 1
  }} transition={{
    delay: 0.4,
    type: "spring"
  }} className="z-20 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 absolute">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7l7 7-7 7" />
      </svg>
    </motion.div>

    <motion.div initial={{
    x: 30,
    rotate: 5,
    opacity: 0
  }} animate={{
    x: 20,
    rotate: 5,
    opacity: 1
  }} transition={{
    duration: 0.5,
    delay: 0.2,
    ease: "easeOut"
  }} className="w-32 h-44 bg-gray-900 rounded-xl shadow-xl flex flex-col p-3 gap-3 absolute z-10">
      <div className="w-full h-20 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
        <span className="text-green-400 font-mono text-xs">{'<Comp />'}</span>
      </div>
      <div className="space-y-2">
        <div className="w-full h-2 bg-gray-700 rounded-full" />
        <div className="w-3/4 h-2 bg-gray-700 rounded-full" />
      </div>
    </motion.div>
  </div>;
export const FounderVisual = () => <div className="relative w-full h-64 flex items-center justify-center">
    <motion.div initial={{
    y: 20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className="w-48 h-32 bg-white rounded-xl shadow-md border border-gray-200 flex flex-col p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-yellow-400" />
      <div className="flex gap-2 mb-3">
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.3
      }} className="w-3 h-3 rounded-full bg-red-400" />
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.4
      }} className="w-3 h-3 rounded-full bg-yellow-400" />
        <motion.div initial={{
        scale: 0
      }} animate={{
        scale: 1
      }} transition={{
        delay: 0.5
      }} className="w-3 h-3 rounded-full bg-green-400" />
      </div>
      <motion.div initial={{
      width: "0%"
    }} animate={{
      width: "80%"
    }} transition={{
      delay: 0.6,
      duration: 0.8
    }} className="h-2 bg-gray-100 rounded-full mb-2" />
      <motion.div initial={{
      width: "0%"
    }} animate={{
      width: "60%"
    }} transition={{
      delay: 0.7,
      duration: 0.8
    }} className="h-2 bg-gray-100 rounded-full mb-2" />
      <motion.div initial={{
      width: "0%"
    }} animate={{
      width: "40%"
    }} transition={{
      delay: 0.8,
      duration: 0.8
    }} className="h-2 bg-gray-100 rounded-full" />
    </motion.div>
    
    <motion.div initial={{
    scale: 0,
    y: 10
  }} animate={{
    scale: 1,
    y: -20
  }} transition={{
    delay: 1,
    type: "spring"
  }} className="absolute -top-2 right-12 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
      Shipped!
    </motion.div>
  </div>;
export const DesignEngineerVisual = () => <div className="relative w-full h-64 flex items-center justify-center gap-4">
    <motion.div initial={{
    x: -20,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} className="w-24 h-24 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg">
       <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    </motion.div>
    
    <motion.div initial={{
    scaleX: 0
  }} animate={{
    scaleX: 1
  }} transition={{
    delay: 0.3
  }} className="w-16 h-1 bg-gray-300 rounded-full" />

    <motion.div initial={{
    x: 20,
    opacity: 0
  }} animate={{
    x: 0,
    opacity: 1
  }} transition={{
    delay: 0.1
  }} className="w-24 h-24 rounded-2xl bg-gray-900 flex items-center justify-center shadow-lg">
      <span className="text-white font-mono text-xl">{'{}'}</span>
    </motion.div>
  </div>;
export const FrontendEngVisual = () => <div className="relative w-full h-64 flex items-center justify-center">
    <div className="w-56 h-40 bg-white rounded-lg shadow-lg border border-gray-200 p-2 flex flex-col gap-2">
      <motion.div initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }} className="w-full h-8 bg-gray-100 rounded flex items-center px-2 gap-2">
        <div className="w-4 h-4 rounded-full bg-gray-300" />
        <div className="w-16 h-2 rounded-full bg-gray-200" />
      </motion.div>
      
      <div className="flex-1 flex gap-2">
        <motion.div initial={{
        opacity: 0,
        x: -10
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        delay: 0.4
      }} className="w-16 h-full bg-gray-50 rounded" />
        <div className="flex-1 flex flex-col gap-2">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.6
        }} className="w-full h-16 bg-green-50 rounded border border-green-100 flex items-center justify-center">
            <div className="w-8 h-8 rounded bg-green-200" />
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          delay: 0.8
        }} className="w-full h-8 bg-blue-50 rounded border border-blue-100" />
        </div>
      </div>
    </div>
  </div>;
export const BackendEngVisual = () => <div className="relative w-full h-64 flex items-center justify-center">
    <motion.div initial={{
    y: 20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} className="relative z-10 w-40 h-10 bg-white border border-gray-300 rounded-lg shadow-sm flex items-center justify-center gap-2 mb-16">
      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span className="text-xs font-mono text-gray-600">GET /api/users</span>
    </motion.div>

    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-32 mt-8">
        <motion.div initial={{
      scaleY: 0
    }} animate={{
      scaleY: 1
    }} transition={{
      delay: 0.4
    }} className="absolute left-1/2 top-0 -mt-6 w-0.5 h-6 bg-gray-300 transform -translate-x-1/2" />
        <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 1,
      scale: 1
    }} transition={{
      delay: 0.6
    }} className="w-full h-full bg-gray-900 rounded-lg shadow-xl p-4 flex flex-col gap-2">
            <div className="flex gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="w-2 h-2 rounded-full bg-yellow-500" />
                <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="space-y-1.5 opacity-70">
                <div className="w-3/4 h-1.5 bg-gray-500 rounded-full" />
                <div className="w-1/2 h-1.5 bg-gray-500 rounded-full" />
                <div className="w-2/3 h-1.5 bg-gray-500 rounded-full" />
                <div className="w-1/2 h-1.5 bg-gray-500 rounded-full" />
            </div>
        </motion.div>
    </div>
  </div>;
export const MarketerVisual = () => <div className="relative w-full h-64 flex items-center justify-center overflow-hidden">
    <motion.div initial={{
    y: 100
  }} animate={{
    y: 0
  }} transition={{
    duration: 0.8,
    ease: "easeOut"
  }} className="w-48 bg-white shadow-xl rounded-t-xl border-t border-x border-gray-200">
      {/* Header */}
      <div className="h-12 border-b border-gray-100 flex items-center justify-between px-3">
        <div className="w-6 h-6 rounded bg-purple-600" />
        <div className="flex gap-1">
            <div className="w-8 h-2 bg-gray-100 rounded-full" />
            <div className="w-8 h-2 bg-gray-100 rounded-full" />
        </div>
      </div>
      {/* Hero */}
      <div className="h-24 bg-purple-50 flex flex-col items-center justify-center gap-2">
        <div className="w-24 h-2 bg-purple-200 rounded-full" />
        <div className="w-16 h-2 bg-purple-200 rounded-full" />
        <div className="mt-2 w-12 h-4 bg-purple-600 rounded text-[6px] text-white flex items-center justify-center">CTA</div>
      </div>
      {/* Features */}
      <div className="p-3 grid grid-cols-2 gap-2">
        <div className="h-12 bg-gray-50 rounded" />
        <div className="h-12 bg-gray-50 rounded" />
      </div>
    </motion.div>
  </div>;
export const SalesVisual = () => <div className="relative w-full h-64 flex items-center justify-center">
    <div className="w-64 h-40 bg-white rounded-lg shadow-xl border border-gray-200 flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-16 bg-gray-50 border-r border-gray-100 flex flex-col gap-2 p-2">
        <div className="w-8 h-8 rounded bg-gray-200 mb-2" />
        <div className="w-full h-2 bg-gray-200 rounded" />
        <div className="w-full h-2 bg-gray-200 rounded" />
        <div className="w-full h-2 bg-gray-200 rounded" />
      </div>
      {/* Content */}
      <div className="flex-1 p-3 flex flex-col gap-3">
        <div className="flex justify-between items-center">
            <div className="w-20 h-3 bg-gray-100 rounded" />
            <div className="w-12 h-6 bg-green-600 rounded text-white text-[8px] flex items-center justify-center">Share</div>
        </div>
        <motion.div initial={{
        scale: 0.9,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        delay: 0.3
      }} className="flex-1 bg-gray-50 rounded border border-dashed border-gray-300 flex items-center justify-center">
            <div className="text-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1" />
                <div className="w-16 h-2 bg-gray-200 rounded mx-auto" />
            </div>
        </motion.div>
      </div>
    </div>
    <motion.div initial={{
    scale: 0,
    rotate: 10
  }} animate={{
    scale: 1,
    rotate: 0
  }} transition={{
    delay: 0.6,
    type: "spring"
  }} className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-lg shadow-lg flex items-center gap-2">
        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        <span className="text-xs font-bold">Demo Ready</span>
    </motion.div>
  </div>;