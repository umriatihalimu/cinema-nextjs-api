import Image from "next/image";
import Link from "next/link";

const ListManga = ({ api }) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 mx-6 ">
      {/* mapping data manga */}
      {api.data?.map((manga, index) => {
        return (
          <div
            className="card shadow-md shadow-primary bg-primary rounded text-center  justify-center font-bold  text-dark hover:text-accent md:text-xl text-sm my-2"
            key={index}
          >
            <Link href={`/anime/${manga.mal_id}`} className="cursor-pointer ">
              <Image
                src={manga.images.webp.image_url}
                alt="..."
                width={300}
                height={300}
              />
              {manga.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};
export default ListManga;
