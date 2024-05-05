import React from "react";
import "../css/services.css";
import flakeImage from "../EpoxyStuff/flake1.jpeg";
import solid from "../EpoxyStuff/solid.jpeg";
import metallic from "../EpoxyStuff/metallic.jpeg";
import concrete from "../EpoxyStuff/concrete.jpeg"

const services = [
  {
    id: 1,
    name: "Solid Coating",
    description:
      "Transform your garage into an appealing and functional space with our range of garage floor coatings. Our selection includes epoxy coatings, polyurethane sealers, and decorative finishes, all designed to provide exceptional resistance to chemicals, oil stains, and abrasions.",
    image: solid,
  },
  {
    id: 2,
    name: "Flake Coating",
    description:
      "Maximize the storage capacity of your garage with our durable and customizable storage solutions. From innovative shelving systems to convenient overhead storage racks, we offer effective organizational options to maintain a tidy and clutter-free garage.",
    image: flakeImage,
  },
  {
    id: 3,
    name: "Metallic Coating",
    description:
      "Elevate the appearance of your home and safeguard your driveway with our premium floor coatings. Our solutions are engineered to withstand various weather conditions, oil stains, and tire marks, ensuring a durable and visually appealing surface for your driveway.",
    image: metallic,
  },
  {
    id: 4,
    name: 'Concrete Sealing, Polishing and more',
    description:
        'Our expert technicians use advanced equipment and techniques to clean, prepare, and seal your concrete surfaces. We apply a high-quality sealant that provides superior protection against oil, grease, acid, and other substances, leaving your floors looking like new with long-lasting durability.',
    image: concrete,
}

];

function Services() {
  return (
    <div className="services-container">
        <div>
            Services We Offer
        </div>
      {services.map((service) => (
        <div key={service.id} className="service-card">
          <h2 className="service-card-text">{service.name}</h2>
          <img
            src={service.image}
            alt="Service Image"
            className="service-card-image"
          />
          <p className="service-card-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Services;
