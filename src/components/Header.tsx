import React from 'react';
import { Search, Video, Bell, User, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  onSearch: (query: string) => void;
  searchQuery: string;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, onSearch, searchQuery }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 h-16">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Left section */}
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-1">
            <Video className="w-8 h-8 text-red-600" />
            <span className="text-xl font-bold">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="flex">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button className="px-6 py-2 bg-gray-50 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-100 transition-colors">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center space-x-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
          </button>
          <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;