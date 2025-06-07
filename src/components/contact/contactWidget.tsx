import { useState, useRef, useEffect } from "react";
import { MessageCircle, Phone, X } from "lucide-react"; // Keeping lucide-react for Phone, MessageCircle, X
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Import react-icons for social platforms
import { FaWhatsapp, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs"; // For the new Twitter 'X' logo

// Contact options with proper icons
const contactOptions = [
  {
    id: "phone",
    icon: Phone, // Using Lucide-react for Phone
    label: "Call Us",
    href: "tel:+1234567890",
    className: "bg-green-500 hover:bg-green-600",
  },
  {
    id: "whatsapp",
    icon: FaWhatsapp, // Replaced with react-icon
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    className: "bg-green-400 hover:bg-green-500",
  },
  {
    id: "twitter",
    icon: BsTwitterX, // Replaced with react-icon for X
    label: "Follow on X",
    href: "https://twitter.com/yourhandle",
    className: "bg-black hover:bg-gray-800",
  },
  
  {
    id: "contact",
    icon: FaEnvelope, // Replaced with react-icon
    label: "Contact Form",
    href: "/contact",
    className: "bg-blue-500 hover:bg-blue-600",
  },
];

export default function ContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Calculate positions in a perfect quarter circle
  const calculatePositions = () => {
    const radius = 100; // Radius of the quarter circle. Adjust this value to control spread.
    const totalItems = contactOptions.length;
    // Angle step for the quarter circle from right (0 deg) to top (90 deg)
    const angleStep = Math.PI / 2 / (totalItems - 1);

    return contactOptions.map((option, index) => {
      // Angle goes from 0 (right/horizontal) to PI/2 (up/vertical)
      const angle = angleStep * index;
      const xOffset = radius * Math.cos(angle); // Horizontal offset from anchor
      const yOffset = radius * Math.sin(angle); // Vertical offset from anchor

      return {
        ...option,
        position: {
          // 'right' CSS property means distance from the right edge.
          // A positive xOffset here will move the item to the LEFT of the anchor.
          // 'bottom' CSS property means distance from the bottom edge.
          // A positive yOffset here will move the item UP from the anchor.
          bottom: `${yOffset}px`,
          right: `${xOffset}px`,
        },
      };
    });
  };

  const optionsWithPositions = calculatePositions();

  // Handle hover and click events for the container
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 300); // Small delay to prevent accidental closing
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <TooltipProvider>
      <div
        ref={containerRef}
        className="fixed bottom-6 right-6 z-50"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Contact Options */}
        {optionsWithPositions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <div
              key={option.id}
              className={`absolute transition-all duration-300 ease-in-out ${
                isOpen
                  ? "opacity-100 scale-100 translate-x-0 translate-y-0"
                  : "opacity-0 scale-0 translate-x-4 translate-y-4" // Start slightly offset when hidden
              }`}
              style={{
                bottom: isOpen ? option.position.bottom : "0px",
                right: isOpen ? option.position.right : "0px",
                transitionDelay: isOpen ? `${index * 50}ms` : `${(optionsWithPositions.length - index) * 50}ms`,
              }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    className={`w-12 h-12 rounded-full shadow-lg ${option.className} text-white`}
                    asChild // Render as <a> tag
                  >
                    <a href={option.href} target="_blank" rel="noopener noreferrer">
                      {/* React-icons components are sized via text-xl/text-2xl usually */}
                      <IconComponent className="text-xl" /> {/* Adjust text-xl for icon size as needed */}
                      <span className="sr-only">{option.label}</span>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top" align="center" className="mb-2">
                  {option.label}
                </TooltipContent>
              </Tooltip>
            </div>
          );
        })}

        {/* Main Contact Button */}
        <Tooltip delayDuration={0}>
          {" "}
          {/* Set delayDuration to 0 for immediate show/hide */}
          <TooltipTrigger asChild>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              size="icon"
              className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 relative overflow-hidden" // Added relative and overflow-hidden for icon animation
            >
              {/* MessageCircle for "Get In Touch" - visible when isOpen is false */}
              <MessageCircle
                className={`absolute inset-0 m-auto w-6 h-6 transition-all duration-300 ease-in-out
                    ${isOpen ? "rotate-180 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"}
                    `}
              />
              {/* X for "Close" - visible when isOpen is true */}
              <X
                className={`absolute inset-0 m-auto w-6 h-6 transition-all duration-300 ease-in-out
                    ${isOpen ? "rotate-0 opacity-100 scale-100" : "-rotate-180 opacity-0 scale-0"}
                    `}
              />
              <span className="sr-only">{isOpen ? "Close" : "Get In Touch"}</span>
            </Button>
          </TooltipTrigger>
          {/* Tooltip Content - conditionally render based on isOpen */}
          {!isOpen && ( // Only show the tooltip content when isOpen is false
            <TooltipContent side="left" align="center" className="mr-2">
              Get In Touch
            </TooltipContent>
          )}
          {isOpen && ( // Optionally, if you want a "Hide" tooltip when open
            <TooltipContent side="left" align="center" className="mr-2">
              Hide
            </TooltipContent>
          )}
        </Tooltip>
      </div>
    </TooltipProvider>
  );
}