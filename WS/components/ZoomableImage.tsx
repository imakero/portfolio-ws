import Image from "next/image";
import { useState } from "react";
import { srcDimensions } from "../utils/imageDimensions";

Image;

type ZoomableImageProps = {
  src: string;
  alt: string;
};

const ZoomableImage = ({ src, alt }: ZoomableImageProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width, height } = srcDimensions(src);

  return (
    <>
      <div
        className={`relative mb-6 block w-full hover:cursor-pointer`}
        aria-label="Open image modal"
        tabIndex={0}
        style={{ aspectRatio: width / height }}
        onClick={() => setIsOpen(true)}
      >
        <Image
          className="z-0 rounded-md object-cover drop-shadow-standard"
          fill
          src={src}
          alt={alt}
        />
      </div>
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } fixed top-0 left-0 z-40 h-screen w-screen items-center justify-center bg-black/70`}
      >
        <button
          className="fixed top-6 right-7 z-50 text-5xl font-bold text-secondary"
          aria-label="Close image modal"
          onClick={() => setIsOpen(false)}
        >
          &times;
        </button>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="z-40 h-full w-full object-contain"
        />
      </div>
    </>
  );
};

export default ZoomableImage;
