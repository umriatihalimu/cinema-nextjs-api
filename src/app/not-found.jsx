"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col  items-center justify-center ">
      <div className="flex flex-row items-center font-bold md:text-xl text-accent">
        <FileSearch size={32} className="m-2" />
        HALAMAN TIDAK DITEMUKAN
      </div>
      <Link
        href="/"
        className="underline hover:text-accent text-secondary text-sm"
      >
        Kembali
      </Link>
    </div>
  );
};
export default Page;
