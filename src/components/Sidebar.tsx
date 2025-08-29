import React from 'react';
import { 
  Home, 
  TrendingUp, 
  Users, 
  Music, 
  Film, 
  Gamepad2, 
  Radio, 
  Trophy,
  Lightbulb,
  Shirt,
  Settings,
  HelpCircle,
  Flag
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, selectedCategory, onCategorySelect }) => {
  const menuItems = [
    { icon: Home, label: 'Home', category: 'Home' },
    { icon: TrendingUp, label: 'Trending', category: 'Trending' },
    { icon: Users, label: 'Subscriptions', category: 'Subscriptions' },
  ];

  const exploreItems = [
    { icon: Music, label: 'Music', category: 'Music' },
    { icon: Film, label: 'Movies', category: 'Movies' },
    { icon: Radio, label: 'Live', category: 'Live' },
    { icon: Gamepad2, label: 'Gaming', category: 'Gaming' },
    { icon: Trophy, label: 'Sports', category: 'Sports' },
    { icon: Lightbulb, label: 'Learning', category: 'Learning' },
    { icon: Shirt, label: 'Fashion', category: 'Fashion' },
  ];

  const settingsItems = [
    { icon: Settings, label: 'Settings', category: 'Settings' },
    { icon: HelpCircle, label: 'Help', category: 'Help' },
    { icon: Flag, label: 'Report', category: 'Report' },
  ];

  const SidebarItem = ({ icon: Icon, label, category }: { icon: any; label: string; category: string }) => {
    const isSelected = selectedCategory === category;
    return (
      <button
        onClick={() => onCategorySelect(category)}
        className={`w-full flex items-center space-x-6 px-3 py-2 rounded-lg transition-all duration-200 ${
          isSelected 
            ? 'bg-gray-100 text-black font-medium' 
            : 'text-gray-700 hover:bg-gray-50'
        } ${!isOpen ? 'justify-center px-2' : ''}`}
      >
        <Icon className={`w-5 h-5 flex-shrink-0 ${isSelected ? 'text-red-600' : ''}`} />
        {isOpen && <span className="truncate">{label}</span>}
      </button>
    );
  };

  return (
    <aside className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-white border-r border-gray-200 transition-all duration-300 z-40 overflow-y-auto ${
      isOpen ? 'w-64' : 'w-16'
    }`}>
      <div className="p-3 space-y-1">
        {/* Main Navigation */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem key={item.category} {...item} />
          ))}
        </div>

        {isOpen && (
          <>
            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Explore Section */}
            <div className="space-y-1">
              <h3 className="px-3 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Explore
              </h3>
              {exploreItems.map((item) => (
                <SidebarItem key={item.category} {...item} />
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Settings Section */}
            <div className="space-y-1">
              {settingsItems.map((item) => (
                <SidebarItem key={item.category} {...item} />
              ))}
            </div>
          </>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;