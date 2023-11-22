// untuk kebutuhan fetch api kita

export const getMangaResponse = async ({ resource, query }) => {
  const response = await fetch(
    //resouce=sumber apa yg dibutuhkan(/top/manga)
    // jika ada querynya maka jalankan
    `${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`
  );
  const manga = await response.json();
  return manga;
};
