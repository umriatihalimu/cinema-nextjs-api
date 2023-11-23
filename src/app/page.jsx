import ListManga from "@/components/MangaList";
import Header from "@/components/MangaList/Header";
import { getMangaResponse } from "./libs/api-libs"; //pke kurawal krn didalamnya kita export func

const Page = async () => {
  // cara sebelum ada file libs:
  // const response = await fetch(
  //   `${process.env.NEXT_PUBLIC_BASE_URL}/top/manga?limit=8`
  // );
  // const populerManga = await response.json();

  // cara ada file libs:
  const populerManga = await getMangaResponse("top/manga", "limit=8");

  return (
    <>
      <section>
        <Header title={"Populer"} titleLink="Lihat semua" linkHref="/populer" />
        <ListManga api={populerManga} />
      </section>
    </>
  );
};

export default Page;
