export default function MediaCard({ title, type, src }) {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 hover:shadow-xl transition-all duration-300">
      {type === "video" ? (
        <video controls className="w-full h-56 object-cover">
          <source src={src} type="video/mp4" />
          Your browser does not support video.
        </video>
      ) : (
        <img src={src} alt={title} className="w-full h-56 object-cover" />
      )}
      <div className="p-3 text-center font-semibold">{title}</div>
    </div>
  );
}
