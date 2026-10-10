import React from "react";
import Image from "next/image";

export const PolaroidPhoto = () => {
  return (
    <div className="relative">
      <div className="relative w-86 bg-white shadow-sm shadow-primary-dark-foreground pt-2 gap-2">
        <Image
          alt="Photo Tape"
          src="/pressets/kraftTape.png"
          width="22"
          height="65"
          className="object-cover rounded-sm absolute -right-1 -top-5 -rotate-40 z-2"
        />
        <div className="w-80 h-120 rounded-sm mx-auto relative overflow-hidden">
          {" "}
          {/* Profile pic*/}
          <Image
            alt="Lilia E. Martínez Rosas"
            src="/pressets/me.jpg"
            fill
            className="object-cover rounded-sm -hue-rotate-15"
          />
        </div>
        <div className="px-4">
          <span className="font-photoText text-black font-bold">
            Lilia Elba Martínez Rosas
          </span>
          <span className="text-sm font-light text-gray-700 block pb-2"> </span>
        </div>
      </div>
    </div>
  );
};
