import { getMangaResponse } from "@/app/libs/api-libs";
import ListManga from "@/components/MangaList";
import Header from "@/components/MangaList/Header";

const Page = async ({ params }) => {
  const { keyword } = params;
  // decode keyword
  const decodeKeyword = decodeURI(keyword);
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/manga?q=${decodeKeyword}`
  // );
  // const searchManga = await response.json();

  const searchManga = await getMangaResponse("manga", `q=${decodeKeyword}`);

  return (
    <>
      <section>
        <Header title={`Pencarian untuk ${decodeKeyword}... `} />
        <ListManga api={searchManga} />
      </section>
    </>
  );
};

export default Page;
