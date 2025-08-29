import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import VideoGrid from './components/VideoGrid';
import { mockVideos } from './data/mockVideos';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Home');

  const filteredVideos = mockVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.channel.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Home' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)}
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
      />
      <div className="flex pt-16">
        <Sidebar 
          isOpen={sidebarOpen}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
        <main className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'ml-64' : 'ml-16'
        }`}>
          <VideoGrid videos={filteredVideos} />
        </main>
      </div>
    </div>
  );
}

export default App;