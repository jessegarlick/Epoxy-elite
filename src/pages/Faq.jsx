import React, { useState } from 'react';
import { Collapse, Accordion } from 'react-bootstrap';
import '../css/faq.css';

function Faq() {
  const [open, setOpen] = useState({ one: false, two: false, three: false, four: false, five: false, six: false, seven: false, eight: false, nine: false, ten: false });

  return (
    <div>
        <h1 className='title'>FREQUENTLY ASKED QUESTIONS</h1>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is epoxy flooring?</Accordion.Header>
          <Accordion.Body>Epoxy flooring is a type of floor coating that is made up of a two-part resin system that is mixed together and applied to a concrete substrate. The resulting floor is durable, easy 
to clean, and has a glossy finish.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What are the benefits of epoxy flooring?</Accordion.Header>
          <Accordion.Body>Epoxy flooring offers a number of benefits, including durability, chemical resistance, stain resistance, and a glossy, attractive finish. It is also easy to clean and 
maintain.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>What types of floors can be coated with epoxy?</Accordion.Header>
          <Accordion.Body>Epoxy flooring is typically used on concrete floors, but it can also be applied to other types of surfaces, including wood and metal. Yes, epoxy flooring is commonly used in 
residential settings, particularly in garages, basements, and other areas that require a durable and easy-to-clean floor.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Can epoxy flooring be used in residential settings?</Accordion.Header>
          <Accordion.Body>Yes, epoxy flooring is commonly used in residential settings, particularly in garages, basements, and other areas that require a durable and easy-to-clean floor.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>How is epoxy flooring installed?</Accordion.Header>
          <Accordion.Body>Epoxy flooring is typically installed in several steps, including surface preparation, primer application, epoxy application, and topcoat application. The process can take several 
days, depending on the size and complexity of the area being coated. We offer a range of floor coating options, including polyurea, polyaspartic, and epoxy floors. We work closely with clients to determine 
the best coating for their specific needs. Polyurea and polyaspartic are ideal for quick installations, while epoxy is great for durability. Our experienced team is committed to delivering high-quality work 
and excellent customer service, ensuring complete satisfaction with the new floor coating.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>What should I look for when choosing an epoxy flooring company?</Accordion.Header>
          <Accordion.Body>When choosing an epoxy flooring company, look for a company that has experience installing epoxy floors, a good reputation in the industry, and positive reviews from past customers. 
Additionally, make sure the company is properly licensed and insured.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>What does epoxy flooring cost?</Accordion.Header>
          <Accordion.Body>The cost of epoxy flooring varies depending on a number of factors, including the size of the area being coated, the condition of the existing floor, and the type of epoxy being 
used. Generally, epoxy flooring costs between $3 and $12 per square foot.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>How long does epoxy flooring last?</Accordion.Header>
          <Accordion.Body>Epoxy flooring can last for many years with proper care and maintenance. The lifespan of the floor depends on a number of factors, including the quality of the installation, the type
of epoxy used, and the amount of foot traffic and wear and tear the floor experiences.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Is epoxy flooring slippery?</Accordion.Header>
          <Accordion.Body>Epoxy flooring can be slippery when wet, particularly if a high-gloss topcoat is used. However, slip-resistant additives can be added to the epoxy to improve 
traction.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>How do I maintain my epoxy flooring?</Accordion.Header>
          <Accordion.Body>Epoxy flooring is easy to clean and maintain. Regular sweeping and mopping with a neutral cleaner is typically all that is needed to keep the floor looking its best. Avoid using 
harsh chemicals or abrasive cleaners, as they can damage the surface of the epoxy.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>Can epoxy flooring be repaired?</Accordion.Header>
          <Accordion.Body>Yes, epoxy flooring can be repaired if it becomes damaged or worn over time. Repairs typically involve patching the affected area with additional epoxy and blending it into the 
surrounding floor. We begin by preparing the surface, removing any coatings or contaminants through grinding or shot blasting. We then repair any damage and apply a primer coat to ensure proper adhesion. 
Next, we apply the chosen floor coating in multiple layers to achieve the desired finish, along with any topcoats, such as a high-gloss or matte finish. Throughout the installation process, we maintain a 
clean and safe work environment and work closely with our clients to ensure their satisfaction with the finished product.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Faq;