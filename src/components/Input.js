"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ENTER_KEY = 13;

const Input = ({ initialValue }) => {
  const router = useRouter();
  const [input, setInput] = useState(initialValue);
  const [error, setError] = useState(input === "");

  const onHandleChange = ({ target: { value } }) => {
    setError(value === "");
    setInput(value);
  };
  const onHandleKeyPress = ({ keyCode, which }) => {
    if ([keyCode, which].includes(ENTER_KEY)) onHandleSearch();
  };
  const onHandleSearch = () => {
    if (input === "") {
      return setError(true);
    }
    router.refresh();
    router.push(`/?search=${input}`, { scroll: true });
  };

  return (
    <section className="flex flex-col">
      <section className="flex relative items-center">
        <input
          placeholder="Search for any word ..."
          onChange={onHandleChange}
          onKeyPress={onHandleKeyPress}
          value={input}
          className={`bg-gray-200 dark:bg-gray-800 dark:text-white hover:border-purple-600 w-full rounded-lg h-16 p-6 pe-16 ${
            error ? "border-red-500" : ""
          }`}
        />
        <Image
          className="absolute end-6"
          priority
          src="/images/icon-search.svg"
          height={16}
          width={16}
          onClick={onHandleSearch}
          alt="Search icon"
        />
      </section>
      {error && (
        <section className="text-red-500">Whoops, can’t be empty…</section>
      )}
    </section>
  );
};

export default Input;
