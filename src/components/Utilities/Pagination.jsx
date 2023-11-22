const Pagination = ({ currentPage, lastPage, setCurrentPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: "top",
    });
  };
  const handlePrev = () => {
    setCurrentPage((btnPrev) => btnPrev - 1);
    scrollTop();
  };
  const handleNext = () => {
    setCurrentPage((btnPrev) => btnPrev + 1);
    scrollTop();
  };

  return (
    <div className="flex justify-center gap-4 text-primary p-5 ">
      {/* jika currentPage<=1 maka kasih null atau jangan munculkan button, selain itu jalankan button */}
      {currentPage <= 1 ? null : (
        <button
          className="bg-accent transition-all rounded px-3 hover:text-dark"
          onClick={handlePrev}
        >
          Prev
        </button>
      )}
      <p>
        {currentPage}/{lastPage}
      </p>

      {currentPage >= lastPage ? null : (
        <button
          className="bg-accent transition-all rounded px-3 hover:text-dark"
          onClick={handleNext}
        >
          Next
        </button>
      )}
    </div>
  );
};
export default Pagination;
