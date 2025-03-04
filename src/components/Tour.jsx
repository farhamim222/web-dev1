/*function Tour() {
  return <div>Tour</div>;
}

export default Tour;
*/
const Tour = ({ image, title, info, price }) => {
  return (
    <article className="tour">
      <img src={image} alt={title} />
      <div className="tour-info">
        <h4>{title}</h4>
        <p>{info.substring(0, 100)}...</p>
        <span className="tour-price">${price}</span>
      </div>
    </article>
  );
};

export default Tour;
