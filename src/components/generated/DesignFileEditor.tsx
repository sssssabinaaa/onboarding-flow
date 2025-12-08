import React, { useState } from 'react';
import { ChevronDown, PanelLeft, Globe, Download, MousePointer2, Plus, Hand, Square, Type, Pencil } from 'lucide-react';
import { CreationTypeModal } from './CreationTypeModal';
type DesignFileEditorProps = Record<string, never>;

// @component: DesignFileEditor
export const DesignFileEditor = (props: DesignFileEditorProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // @return
  return <div className="flex h-screen w-full bg-[#f5f5f5] font-sans">
      {/* Left Sidebar */}
      <div className={`bg-white border-r border-gray-200 transition-all duration-300 ${isSidebarOpen ? 'w-[216px]' : 'w-0'} overflow-hidden flex-shrink-0`}>
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="h-14 border-b border-gray-200 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded-md flex items-center justify-center">
                <div className="w-3 h-3 border-2 border-white rounded-sm" />
              </div>
              <span className="text-sm font-medium text-gray-900">My Cool File</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
            <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded">
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200">
            <button className="flex-1 px-4 py-2 text-xs font-medium text-gray-900 border-b-2 border-gray-900">
              Components
            </button>
            <button className="flex-1 px-4 py-2 text-xs font-medium text-gray-500 hover:text-gray-900">
              Libraries
            </button>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto">
            {/* Empty state - can add components here later */}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Toolbar */}
        <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded">
              <PanelLeft className="w-4 h-4 text-gray-700" />
            </button>
            <div className="w-px h-6 bg-gray-200" />
            <span className="text-sm font-medium text-gray-900">Themes</span>
          </div>

          <div className="flex items-center gap-2">
            <button className="h-8 px-3 flex items-center gap-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
              <Globe className="w-4 h-4" />
              <span>Import from web</span>
            </button>
            <button className="h-8 px-3 flex items-center gap-2 text-sm text-white bg-green-600 hover:bg-green-700 rounded">
              <Download className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Canvas Area */}
        <div className="flex-1 overflow-auto">
          <div className="w-full h-full flex items-center justify-center p-8">
            {/* Canvas content goes here */}
          </div>
        </div>

        {/* Bottom Toolbar */}
        <div className="h-14 bg-white border-t border-gray-200 flex items-center justify-center gap-1 flex-shrink-0">
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded">
            <MousePointer2 className="w-5 h-5 text-gray-700" />
          </button>
          <button onClick={() => setIsModalOpen(true)} className="w-10 h-10 flex items-center justify-center bg-green-600 hover:bg-green-700 rounded">
            <Plus className="w-5 h-5 text-white" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded">
            <Hand className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded">
            <Square className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded">
            <Type className="w-5 h-5 text-gray-700" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded">
            <Pencil className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Bottom Left Icons */}
      <div className="fixed bottom-4 left-4 flex items-center gap-2">
        {isSidebarOpen && <>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <div className="w-4 h-4 border-2 border-gray-700 rounded-full" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="2" fill="currentColor" />
                <circle cx="8" cy="2" r="1" fill="currentColor" />
                <circle cx="8" cy="14" r="1" fill="currentColor" />
              </svg>
            </button>
            <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded">
              <svg className="w-4 h-4 text-gray-700" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="12" height="12" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="8" cy="8" r="1.5" fill="currentColor" />
              </svg>
            </button>
          </>}
      </div>

      {/* Creation Type Modal */}
      <CreationTypeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>;
};