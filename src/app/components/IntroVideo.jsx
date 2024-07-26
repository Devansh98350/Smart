"use client";
import React, { useState } from "react";

const VideoOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openOverlay = () => setIsOpen(true);
  const closeOverlay = () => setIsOpen(false);

  return (
    <div className=" w-full sm:w-10/12 mx-auto ">
      <video class="h-full w-full rounded-lg" controls>
        <source src="video/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoOverlay;
