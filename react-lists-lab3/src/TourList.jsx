import Tour from "./Tour";

const TourList = ({ tours }) => {
  return (
    <section>
      <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      <div className="tours-container">
        {tours.map((tour) => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default TourList;
