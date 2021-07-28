export default function Pagination() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <div className="pa-content">
    <div className="pagination">
      <div className="pagination__item">
        <i className="fas fa-arrow-left" onClick={scrollBottom}></i>
      </div>
      <div className="pagination__item">
        <i className="fas fa-arrow-up" onClick={scrollTop}></i>
      </div>
      <div className="pagination__item">
        <i className="fas fa-arrow-right" onClick={scrollBottom}></i>
      </div>
    </div>
    </div>
  );
}

