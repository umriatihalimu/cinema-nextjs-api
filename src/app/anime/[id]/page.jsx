import { getMangaResponse } from "@/app/libs/api-libs";
import Image from "next/image";

const Page = async ({ params: { id } }) => {
  const { data } = await getMangaResponse(`manga/${id}`);
  console.log({ data });

  return (
    <>
      <div className="flex text-primary text-xl p-4 mx-3 ">
        <h3>{data.title}</h3>
      </div>

      {/* overflow-x-auto spy klo dibuka dimobile */}
      <div className="flex text-primary ms-7 pb-5 text-sm gap-3 overflow-x-auto">
        <div className="border rounded text-center items-center justify-center p-2">
          <h5>Peringkat</h5>
          <p>{data.rank}</p>
        </div>
        <div className="border rounded text-center items-center justify-center p-2">
          <h5>Skor</h5>
          <p>{data.score}</p>
        </div>

        {data.chapters === null ? null : (
          <div className="border rounded text-center items-center justify-center p-2">
            <h5>Chapters</h5>
            <p>{data.chapters}</p>
          </div>
        )}

        {data.volumes === null ? null : (
          <div className="border rounded text-center items-center justify-center p-2">
            <h5>Volumes</h5>
            <p>{data.volumes}</p>
          </div>
        )}

        <div className="border rounded text-center items-center justify-center p-2">
          <h5>Status</h5>
          <p>{data.status}</p>
        </div>
      </div>

      <div className="flex sm:flex-nowrap flex-wrap px-6 text-primary sm:content-center">
        {/* flex-nowrap untuk klo di hp tulisannya turun kebawah, wrap tulisannya ke samping */}
        <Image
          src={data.images.webp.image_url}
          alt={data.images.jpg.image_url}
          width={550}
          height={550}
          className="img-detail w-full  rounded mr-4  "
        />
        <p className="text-justify ">{data.synopsis}</p>
      </div>
    </>
  );
};

export default Page;
