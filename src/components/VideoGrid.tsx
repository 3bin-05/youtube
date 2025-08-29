import React from 'react';
import VideoCard from './VideoCard';
import { Video } from '../types/Video';

interface VideoGridProps {
  videos: Video[];
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      {videos.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">No videos found</p>
          <p className="text-gray-400 text-sm mt-2">Try adjusting your search or category</p>
        </div>
      )}
    </div>
  );
};

export default VideoGrid;