/*function Services() {
  return (
    <div>
      <p className="section-dummy">Services</p>
      <p className="section-dummy">...</p>
    </div>
  );
}

export default Services;*/

import { services } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <Service {...service} key={service.id} />
        ))}
      </div>
    </section>
  );
};

export default Services;
