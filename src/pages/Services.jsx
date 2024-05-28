import React from "react"; 
import "../css/services.css";
import flakeImage from "../EpoxyStuff/flakeAI.jpg";
import solid from "../EpoxyStuff/solidAI.jpg";
import metallic from "../EpoxyStuff/metallicAI.jpg";
import concrete from "../EpoxyStuff/polishingAI.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <section className="service-item">
        <h1>SOLID COATING</h1>
        <img src={solid} alt="Solid Coating" />
        <p>
        A liquid-applied, high-build coating system that provides a smooth, glossy finish.
 Formulated with a mixture of resin and hardener, it cures to form a durable, chemical-resistant surface.
 Typically used on concrete floors, walls, and ceilings in industrial, commercial, or residential settings.
 Benefits: easy application, fast curing time, high gloss finish, resistant to chemicals and abrasion.
        </p>
      </section>

      <section className="service-item">
        <h1>FLAKE COATING</h1>
        <img src={flakeImage} alt="Flake Coating" />
        <p>
        A textured, flake-based coating system that adds visual interest and texture to the surface.
	 Composed of a mixture of epoxy resin, hardener, and flakes (small particles or aggregates) that create a unique appearance.
	 Typically used in decorative, architectural, or industrial settings where a distinct look is desired.
	 Benefits: unique textured finish, high durability, chemical resistance, and abrasion resistance.
        </p>
      </section>

      <section className="service-item">
        <h1>METALLIC COATING</h1>
        <img src={metallic} alt="Metallic Coating" />
        <p>
        A specialized coating system that combines the strength and durability of epoxy with the visual appeal of metallic flakes or pigments.
	 Offers a range of metallic finishes, from subtle to dramatic, depending on the type and amount of flakes used.
	 Typically used in high-end architectural, decorative, or industrial applications where a unique, eye-catching finish is desired.
	 Benefits: stunning metallic appearance, excellent durability, chemical resistance, and abrasion resistance.
        </p>
      </section>

      <section className="service-item">
        <h1>CONCRETE SEALING AND POLISHING</h1>
        <img src={concrete} alt="Concrete Sealing" />
        <p>
        A process that enhances the appearance and durability of concrete surfaces by applying a sealant or polish.
	 Sealants protect concrete from stains, spills, and wear-and-tear, while polishes improve the surface's texture and shine.
	 Typically used in residential, commercial, or industrial settings to maintain and restore concrete floors, walls, and countertops.
	 Benefits: improved appearance, increased durability, reduced maintenance, and enhanced safety.
        </p>
      </section>
    </div>
  );
};

export default Services;
