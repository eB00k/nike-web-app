import { services } from "../constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section
      id="services"
      className="flex max-container justify-space items-center flex-wrap gap-9"
    >
      {services.map((service, index) => (
        <ServiceCard {...service} key={index} />
      ))}
    </section>
  );
};

export default Services;
