const HeaderTop = ({ title, curretPage }) => {
  return (
    <div className="flex justify-center p-4 text-2xl text-primary">
      <h3>
        {title} {curretPage}
      </h3>
    </div>
  );
};
export default HeaderTop;
