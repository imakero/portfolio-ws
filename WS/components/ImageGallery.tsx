import { useState } from "react";
import { SbImageType } from "../types/Types";
import { imageDimensions } from "../utils/image";
import ZoomableImage from "./ZoomableImage";

type ImageGalleryProps = {
  images: SbImageType[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { width, height } = imageDimensions(images[currentIndex]);

  if (!images.length) {
    return null;
  }

  return (
    <div id="default-carousel" className="relative">
      <div
        className={`relative mb-8 w-full`}
        style={{ aspectRatio: `${width} / ${height}` }}
      >
        {images.map((image, index) => (
          <div
            className={`duration-700 ease-in-out ${
              index !== currentIndex ? "hidden" : ""
            }`}
            key={image.id}
          >
            <ZoomableImage src={image.filename} alt={image.alt} />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <div className="absolute -bottom-4 left-1/2 z-50 flex -translate-x-1/2 space-x-3">
          {images.map((image, index) => {
            return (
              <button
                key={image.id}
                type="button"
                className={`h-3 w-3 rounded-full ${
                  index === currentIndex ? "bg-gray-800/60" : "bg-gray-800/30"
                } hover:bg-gray-800/60 `}
                aria-current={index === currentIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
              ></button>
            );
          })}
        </div>
      )}

      {images.length > 1 && (
        <>
          <button
            type="button"
            className="group absolute top-0 -left-6 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none sm:-left-3"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev - 1 < 0 ? images.length - 1 : prev - 1
              )
            }
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/60  group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-800/70">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="group absolute top-0 -right-6 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none sm:-right-3"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev + 1 === images.length ? 0 : prev + 1
              )
            }
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-800/30 group-hover:bg-gray-800/60 group-focus:outline-none group-focus:ring-4 group-focus:ring-gray-800/70">
              <svg
                aria-hidden="true"
                className="h-5 w-5 text-gray-800 sm:h-6 sm:w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </>
      )}
    </div>
  );
};

export default ImageGallery;
