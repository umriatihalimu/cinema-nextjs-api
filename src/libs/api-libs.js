// untuk kebutuhan fetch api kita

export const getMangaResponse = async (resource, query) => {
  const response = await fetch(
    //resouce=sumber apa yg dibutuhkan(/top/manga)
    // jika ada querynya maka jalankan
    `${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`
  );
  const manga = await response.json();
  return manga;
};

export const getNestedMangaResponse = async (resource, objectProperty) => {
  const response = await getMangaResponse(resource);
  return response.data.flatMap((items) => items[objectProperty]);
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap) + 1);
  const last = first + gap;
  const response = { data: data.slice(first, last) };
  return response;
};
