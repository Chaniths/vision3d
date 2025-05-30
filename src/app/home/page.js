import React from "react";
import Card from "./Card";
import Hero from "../hero/Hero";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import HomeSolutionSection from "./HomeSolutionSection";

const Land = () => {
  return (
    <div>
      <Hero />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 p-8">
        <Card
          title="Create a floor plan"
          imageSrc="/card_images/Architect-pana 1.svg"
          altText="Floor plan"
          href="/floor"
        />
        <Card
          title="Design your room"
          imageSrc="/card_images/freepik--Walls--inject-134.svg"
          altText="Room design"
          href="/room_planner"
        />
        <Card
          title="Furnish and decorate"
          imageSrc="/card_images/House restyling-cuate 1.svg"
          altText="Furnish"
          href="/furniture_shop"
        />
        <Card
          title="Get inspired"
          imageSrc="/card_images/select house-cuate 1.svg"
          altText="Get inspired"
          href="/inspiration"
        />
      </div>
      <FeaturesSection />
      <TestimonialsSection />
      <HomeSolutionSection />
    </div>
  );
};

export default Land;
