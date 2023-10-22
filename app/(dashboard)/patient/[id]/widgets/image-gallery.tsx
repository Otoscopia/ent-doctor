"use client";

import Image from "next/image";
import React, { useState } from "react";

interface Props {
  images: string[];
  position: "Left" | "Right";
}

export default function ImageGallery({ images, position }: Props) {
  const [showImage, setShowImage] = useState(false);
  const [imageSrc, setImageSrc] = useState("");

  const handleImageClick = (src: string) => {
    setImageSrc(src);
    setShowImage(true);
  };

  const handleCloseClick = () => {
    setShowImage(false);
  };

  return (
    <div>
      <h3 className="card-title">{position} Images</h3>
      <div className="flex flex-row flex-wrap space-x-4">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index}`}
            width={100}
            height={100}
            className="w-32 h-32 object-cover cursor-pointer"
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>

      {showImage && (
        <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-10">
          <div className="relative">
            <Image
              src={imageSrc}
              alt="Full screen image"
              className="max-h-full max-w-full"
              layout="responsive"
              width={720}
              height={720}
            />
            <button
              type="button"
              className="absolute top-0 right-0 m-4 text-white font-bold text-xl btn btn-primary"
              onClick={handleCloseClick}
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
