import React, { useState } from "react";
import CardSwap, { Card } from "./CardSwap";
import tax from "../../assets/tax.jpg";
import com from "../../assets/companyRegister.webp"
import GST from "../../assets/GST.jpg"

const cards = [
  {
    title: "Expert Tax Filing",
    caption: "Handled by top CAs to ensure accuracy and peace of mind.",
    image: tax,
  },
  {
    title: "Company Registration",
    caption: "We make business registration seamless and compliant.",
    image: com,
  },
  {
    title: "GST & Compliance",
    caption: "Never miss a filing deadline with our CA-led support.",
    image: GST,
  },
];

const HeroSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* Left Text Section */}
      <img
        src="https://blog.ipleaders.in/wp-content/uploads/2016/12/audit-committee.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover blur-md scale-105 brightness-35"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex items-center justify-between h-full px-10 max-[768px]:flex-col max-[768px]:justify-center max-[768px]:text-center">
        {/* Left text section */}
        <div className="text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Service Beyond Trust
          </h1>
          <p className="text-lg md:text-xl mb-6">
            We serve every size and type company from startups to Fortune.
          </p>
          <button className="px-6 py-2 bg-green-600 hover:bg-green-500 transition-all rounded-lg font-semibold">
            About Us
          </button>
        </div>

      {/* Right Card Swap */}
      <div className="hidden md:block">
      <CardSwap
        width={600}
        height={620}
        cardDistance={70}
        verticalDistance={90}
        delay={5000}
        pauseOnHover={true}
        onSwap={(newIndex) => setActiveIndex(newIndex)}
      >
        {cards.map((item, i) => (
          <Card key={i} customClass="overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center flex items-end p-4"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="p-2 rounded text-sm">
                {item.title}
              </div>
            </div>
          </Card>
        ))}
      </CardSwap>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
