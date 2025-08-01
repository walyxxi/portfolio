import React, { useState } from "react";

type ImageProps = {
  src: string;
  alt?: string;
  className?: string;
  loader?: React.ReactNode; // Optional custom loader
};

const Image: React.FC<ImageProps> = ({
  src,
  alt = "",
  className = "",
  loader = (
    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
      Loading...
    </div>
  ),
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && loader}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default Image;
