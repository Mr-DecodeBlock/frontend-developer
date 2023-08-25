import React from "react";
import ServiceCard from "./services-area/service-card";
import service_data from "@/src/data/service-data";

const ServicesArea = () => {
  return (
    <div className="container my-5 mx-auto">
      <div className="row gy-5">
        {service_data.slice(9, 13).map(({ img, description, title }, i) => (
          <ServiceCard
            key={i}
            image={img}
            title={title}
            description={description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesArea;
