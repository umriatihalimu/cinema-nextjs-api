import Link from "next/link";
const Header = ({ title, titleLink, linkHref }) => {
  return (
    <div className="flex justify-between md:text-xl p-1 mt-6 mx-5 text-center text-primary">
      <h5 className="font-bold text-2sm ">{title} </h5>
      {/* jika maka */}
      {titleLink && linkHref ? (
        <Link
          href="/top"
          className="text-sm underline hover:text-accent sm:text-sm"
        >
          {titleLink}
        </Link>
      ) : null}
    </div>
  );
};
export default Header;
