"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const attrs = {
  dark: {
    img: "/images/icon-dark.svg",
    alt: "dark mode",
  },
  light: {
    img: "/images/icon-light.svg",
    alt: "light mode",
  },
};

const Switch = () => {
  const [mode, setMode] = useState(false);
  const image = mode ? attrs.dark : attrs.light;

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, [image]);

  return (
    <section className="flex items-center">
      <input
        type="checkbox"
        checked={mode}
        onChange={() => setMode(!mode)}
        className="relative shrink-0 w-[3.25rem] h-7 bg-gray-500 checked:bg-none checked:bg-purple-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-purple-600 focus:ring-purple-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-purple-600 dark:focus:ring-offset-gray-800 before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200"
      />
      <label className="text-sm text-gray-500 ml-3 dark:text-gray-400">
        <Image
          priority
          src={image.img}
          height={32}
          width={32}
          alt={image.alt}
        />
      </label>
    </section>
  );
};

export default Switch;
