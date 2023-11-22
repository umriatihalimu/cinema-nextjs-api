"use client";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const inputRef = useRef();
  const router = useRouter();

  const keyClick = (e) => {
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      const keyword = inputRef.current.value;
      if (keyword === null || keyword === "") {
        alert("Tidak ada yg dicari");
      } else {
        router.push(`/search/${keyword}`);
      }
      inputRef.current.value = "";
    }
  };
  return (
    <div className=" relative md:start-80 md:ms-20">
      <input
        placeholder="cari manga..."
        className="p-1.5 rounded w-full"
        ref={inputRef}
        onKeyDown={keyClick}
      />
      <button className="absolute top-1 end-2" onClick={keyClick}>
        <MagnifyingGlass size={20} />
      </button>
    </div>
  );
};
export default InputSearch;
