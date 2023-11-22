import Link from "next/link";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="relative bg-accent ">
      <div className=" flex p-4 sm:text-sm md:flex-row flex-col ">
        <Link href="/" className="font-bold text-2xl text-white ">
          FreeManga
        </Link>

        <InputSearch />
      </div>
    </header>
  );
};
export default Navbar;
