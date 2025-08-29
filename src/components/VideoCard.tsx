import React from 'react';
import { MoreVertical, Clock } from 'lucide-react';
import { Video } from '../types/Video';

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const formatViews = (views: number) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(0)}K views`;
    }
    return `${views} views`;
  };

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="group cursor-pointer">
      {/* Thumbnail */}
      <div className="relative bg-gray-200 rounded-xl overflow-hidden aspect-video mb-3">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded flex items-center space-x-1">
          <Clock className="w-3 h-3" />
          <span>{formatDuration(video.duration)}</span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>

      {/* Video info */}
      <div className="flex space-x-3">
        {/* Channel avatar */}
        <div className="flex-shrink-0">
          <img 
            src={video.channelAvatar} 
            alt={video.channel}
            className="w-9 h-9 rounded-full object-cover"
          />
        </div>

        {/* Video details */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
            {video.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1 hover:text-gray-900 transition-colors cursor-pointer">
            {video.channel}
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
            <span>{formatViews(video.views)}</span>
            <span>•</span>
            <span>{video.uploadedAt}</span>
          </div>
        </div>

        {/* More options */}
        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded-full transition-all duration-200">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default VideoCard;