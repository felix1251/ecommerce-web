/* eslint-disable @next/next/no-img-element */

const MediaPhotos: React.FunctionComponent = () => {
  const mediaPhotos = [
    "/about-us-camera-image.png",
    "/about-us-female-image.png",
    "/about-us-wall-image.png",
    "/about-us-flower-cake-image.png",
    "/about-us-photoshoot-image.png",
    "/about-us-studying-image.png",
    "/about-us-mountain-image.png",
    "/about-us-river-image.png",
    "/about-us-blue-image.png",
  ];

  return (
    <div className="grid-cols-3 gap-4 hidden lg:grid">
      {mediaPhotos.map((url, idx) => (
        <img
          key={idx}
          className="w-32 h-32 object-cover object-center"
          src={url}
          alt={url}
        />
      ))}
    </div>
  );
};

export default MediaPhotos;
