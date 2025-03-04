/*function Tours() {
  return (
    <div>
      <p className="section-dummy">Tours</p>
      <p className="section-dummy">...</p>
    </div>
  );
}

export default Tours;*/

import { tours } from "../data";
import Tour from "./Tour";

const Tours = () => {
  return (
    <section className="tours">
      <div className="section-center">
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
