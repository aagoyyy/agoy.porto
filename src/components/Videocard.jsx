import { useState } from "react";

export default function VideoCard({ title, url }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = url.split("/embed/")[1];
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div
      className="relative aspect-video rounded-xl overflow-hidden cursor-pointer bg-gray-800"
      onClick={() => setIsPlaying(true)}
    >
      {isPlaying ? (
        <iframe
          src={`${url}?autoplay=1`}
          title={title}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <>
          <img src={thumbnail} alt={title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <i className="fa-solid fa-play text-white text-3xl"></i>
          </div>
        </>
      )}
    </div>
  );
}
