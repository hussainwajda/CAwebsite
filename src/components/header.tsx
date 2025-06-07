import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const navigationLinks = [
  { name: "HOME", href: "/" },
  {
    name: "SERVICES",
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Income Tax Audit", href: "/services/income-tax-audit" },
      { name: "Internal Audit", href: "/services/internal-audit" },
      { name: "Statutory Audit", href: "/services/statutory-audit" },
      { name: "GST Audit", href: "/services/gst-audit" },
      {
        name: "GST Return Filing & Compliances",
        href: "/services/gst-return-filing-compliances",
      },
      {
        name: "Income Tax Return Filing & Compliances",
        href: "/services/income-tax-return-filances",
      },
      {
        name: "Scrutiny, Assessment & Appeals",
        href: "/services/scrutiny-assessment-appeals",
      },
      { name: "RERA Compliances", href: "/services/rera-compliances" },
    ],
  },
  { name: "ABOUT US", href: "/about" },
  { name: "BLOGS", href: "/blogs" },
  { name: "CAREERS", href: "/careers" },
  { name: "CONTACT US", href: "/contact" },
];

export default function Header() {
  const [activeLink, setActiveLink] = useState("HOME");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openServiceAccordion, setOpenServiceAccordion] = useState(false); // New state for accordion

  const { scrollY } = useScroll();

  const contactBarHeight = useTransform(scrollY, [0, 100], [60, 0]);
  const contactBarOpacity = useTransform(scrollY, [0, 50], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setIsMobileMenuOpen(false);
    setOpenServiceAccordion(false); // Close accordion when any link is clicked
  };

  return (
    <header className="relative">
      {/* Contact Bar */}
      <motion.div
        style={{ height: contactBarHeight, opacity: contactBarOpacity }}
        className="bg-[#175888] text-white overflow-hidden"
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-center md:justify-start">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>cavinaykhambe@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91-000000000</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        className={`bg-white border-b border-gray-200 transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : ""
        }`}
        initial={false}
        animate={{
          y: isSticky ? 0 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-3">
                <img src={logo} alt="Logo" className="w-80 h-80" />
              </div>
            </motion.div>

            {/* Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      activeLink === link.name
                        ? "text-[#53b948]"
                        : "text-gray-700 hover:text-[#53b948]"
                    }`}
                    onClick={() => setActiveLink(link.name)}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Active indicator */}
                  {activeLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#53b948]"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}

                  {/* Dropdown for SERVICES (Desktop) */}
                  {link.hasDropdown && (
                    <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#53b948]"
                            onClick={() => handleLinkClick(item.name)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
              
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#53b948] hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setOpenServiceAccordion(false); // Close accordion if menu is closing
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-200 pb-4"
            >
              <div className="flex flex-col items-center space-y-4 py-4">
                {navigationLinks.map((link) => (
                  <div key={link.name} className="relative w-full text-center">
                    {link.hasDropdown ? (
                      // Accordion header for Services
                      <button
                        className={`flex items-center justify-center gap-1 px-4 py-2 text-base font-medium w-full transition-colors duration-200 ${
                          activeLink === link.name || openServiceAccordion
                            ? "text-[#53b948]"
                            : "text-gray-700 hover:text-[#53b948]"
                        }`}
                        onClick={() => setOpenServiceAccordion(!openServiceAccordion)}
                      >
                        {link.name}
                        <motion.span
                          animate={{ rotate: openServiceAccordion ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </motion.span>
                      </button>
                    ) : (
                      // Regular link for other menu items
                      <Link
                        to={link.href}
                        className={`block px-4 py-2 text-base font-medium transition-colors duration-200 ${
                          activeLink === link.name
                            ? "text-[#53b948]"
                            : "text-gray-700 hover:text-[#53b948]"
                        }`}
                        onClick={() => handleLinkClick(link.name)}
                      >
                        {link.name}
                      </Link>
                    )}

                    {/* Accordion content for Services */}
                    <AnimatePresence>
                      {link.hasDropdown && openServiceAccordion && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden mt-2 flex flex-col items-center space-y-2"
                        >
                          {link.dropdownItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#53b948] w-full"
                              onClick={() => handleLinkClick(item.name)}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sticky animation indicator */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#175888] to-[#53b948]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isSticky ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </motion.nav>

      {/* Spacer to prevent content jump when nav becomes sticky */}
      {isSticky && <div className="h-20" />}
    </header>
  );
}