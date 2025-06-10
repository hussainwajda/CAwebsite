"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Calculator, FileSearch, Shield, Receipt, FileText, DollarSign, Scale, Building } from "lucide-react"
import { Link } from "react-router-dom"

const services = [
  {
    id: 1,
    title: "Income Tax Audit",
    description:
      "Comprehensive income tax audit services ensuring compliance with tax regulations and identifying potential savings.",
    icon: Calculator,
    gradient: "from-blue-500 to-blue-600",
    link: "/services/income-tax-audit",
  },
  {
    id: 2,
    title: "Internal Audit",
    description:
      "Thorough internal audit processes to evaluate and improve the effectiveness of risk management and control processes.",
    icon: FileSearch,
    gradient: "from-green-500 to-green-600",
    link: "/services/internal-audit",
  },
  {
    id: 3,
    title: "Statutory Audit",
    description:
      "Professional statutory audit services ensuring compliance with legal requirements and financial accuracy.",
    icon: Shield,
    gradient: "from-purple-500 to-purple-600",
    link: "/services/statutory-audit",
  },
  {
    id: 4,
    title: "GST Audit",
    description:
      "Expert GST audit services to ensure proper compliance with GST regulations and optimize tax efficiency.",
    icon: Receipt,
    gradient: "from-orange-500 to-orange-600",
    link: "/services/gst-audit",
  },
  {
    id: 5,
    title: "GST Return Filing & Compliances",
    description: "Complete GST return filing services and ongoing compliance management for your business.",
    icon: FileText,
    gradient: "from-red-500 to-red-600",
    link: "/services/gst-return-filing-compliances",
  },
  {
    id: 6,
    title: "Income Tax Return Filing & Compliances",
    description: "Professional income tax return filing and compliance services for individuals and businesses.",
    icon: DollarSign,
    gradient: "from-teal-500 to-teal-600",
    link: "/services/income-tax-return-filing-compliances",
  },
  {
    id: 7,
    title: "Scrutiny, Assessment & Appeals",
    description: "Expert handling of tax scrutiny, assessment proceedings, and appeals before tax authorities.",
    icon: Scale,
    gradient: "from-indigo-500 to-indigo-600",
    link: "/services/scrutiny-assessment-appeals",
  },
  {
    id: 8,
    title: "RERA Compliances",
    description: "Comprehensive RERA compliance services for real estate developers and projects.",
    icon: Building,
    gradient: "from-pink-500 to-pink-600",
    link: "/services/rera-compliances",
  },
]

export default function ServicesCarousel() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Carousel className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={service.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="h-full"
                  >
                    <Card className="h-full bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden group">
                      <CardContent className="p-6 h-full flex flex-col">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                          className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}
                        >
                        <Link to={service.link}><service.icon className="w-7 h-7 text-white" /></Link>
                        </motion.div>

                        <Link to={service.link}><h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                        </Link>

                        <p className="text-gray-600 text-sm leading-relaxed flex-grow">{service.description}</p>

                        <motion.div
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                          className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mt-4 rounded-full"
                        />
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white shadow-md hover:bg-gray-50 border-gray-200" />
            <CarouselNext className="hidden md:flex -right-12 bg-white shadow-md hover:bg-gray-50 border-gray-200" />
          </Carousel>
        </motion.div>

        {/* Service indicators for mobile */}
        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {services.slice(0, 4).map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-400" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
