export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  channelAvatar: string;
  views: number;
  uploadedAt: string;
  duration: number; // in seconds
  category: string;
}