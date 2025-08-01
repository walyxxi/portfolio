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
    <div className="inset-0 flex items-center justify-center bg-gray-100">
      Loading...
    </div>
  ),
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && loader}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`${className} transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
};

export default Image;
