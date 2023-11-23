"use client";

import ListManga from "@/components/MangaList";
import HeaderTop from "@/components/Utilities/HeaderTop";
import Pagination from "@/components/Utilities/Pagination";
import { useEffect, useState } from "react";
import { getMangaResponse } from "../libs/api-libs";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [populerManga, setPopulerManga] = useState([]);

  const fetchData = async () => {
    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_BASE_URL}/top/manga?page=${currentPage}`
    // );
    // const data = await response.json();

    const populerManga = await getMangaResponse(
      "top/manga",
      `page=${currentPage}`
    );
    setPopulerManga(populerManga);
  };

  // trigger fethData
  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const lastPage = Math.ceil(populerManga.pagination?.last_visible_page / 550);

  return (
    <>
      <HeaderTop title={`Top Manga ${currentPage}`} />
      <ListManga api={populerManga} />
      <Pagination
        currentPage={currentPage}
        lastPage={lastPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};
export default Page;
