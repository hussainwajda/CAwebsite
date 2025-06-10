import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react"; // Importing relevant icons

export default function Footer() {
  // Define navigation links for the footer, similar to the header but adapted for footer structure
  const servicesLinks = [
    { name: "Income Tax Audit", href: "/services/income-tax-audit" },
    { name: "Internal Audit", href: "/services/internal-audit" },
    { name: "Statutory Audit", href: "/services/statutory-audit" },
    { name: "GST Audit", href: "/services/gst-audit" },
    { name: "GST Return Filing & Compliances", href: "/services/gst-return-filing-compliances" },
    { name: "Income Tax Return Filing & Compliances", href: "/services/income-tax-return-filing-compliances" },
    { name: "Scrutiny, Assessment & Appeals", href: "/services/scrutiny-assessment-appeals" },
    { name: "RERA Compliances", href: "/services/rera-compliances" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#175888] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#53b948]">
              ABOUT US
            </h3>
            <p className="text-sm leading-relaxed text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia sed veniam nulla repudiandae sit nesciunt temporibus nemo, adipisci sint! Accusamus consequatur blanditiis porro nihil aperiam atque eius architecto sequi quam sed, nobis eligendi nulla veritatis amet iste voluptatum commodi esse, repellat dolore accusantium cum sint laudantium ducimus? In quae delectus optio voluptatum sequi, numquam saepe, laboriosam hic maiores ut vel 
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#53b948]">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {servicesLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    
                    to={link.href}
                    className="flex items-center text-sm text-gray-200 hover:text-[#53b948] transition-colors duration-200"
                  >
                    <span className="mr-2 text-[#53b948] text-sm">&rsaquo;</span> {/* Right arrow icon */}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#53b948]">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center text-sm text-gray-200 hover:text-[#53b948] transition-colors duration-200"
                  >
                    <span className="mr-2 text-[#53b948] text-sm">&rsaquo;</span> {/* Right arrow icon */}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#53b948]">
              HEAD OFFICE
            </h3>
            <div className="space-y-4">
              <div className="flex items-start text-sm text-gray-200">
                <MapPin className="h-5 w-5 mr-3 text-[#53b948] flex-shrink-0 mt-0.5" />
                <span>
                  Lorem ipsum consequuntur velit rerum quis, porro illum distinctio, nesciunt possimus iste numquam.
                  , Pune - 411044
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <Phone className="h-4 text-[#53b948] w-4 mr-3" />
                <span>+91 0000000000</span>
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <Phone className="h-4 w-4 mr-3 text-[#53b948]" />
                <span>+91 0000000000</span>
              </div>
              <div className="flex items-center text-sm text-gray-200">
                <Mail className="h-4 w-4 mr-3 text-[#53b948]" />
                <span>xxxxxxxxxxxxxx@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#10446b] py-6">
        <div className="container mx-auto px-4 text-center text-sm text-gray-300">
          Copyrights © All rights reserved to Vinay Khambe & Associates LLP
        </div>
      </div>
    </footer>
  );
}