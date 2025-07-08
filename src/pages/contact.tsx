import type React from "react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Mail, Phone, Send, CheckCircle } from "lucide-react"
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import SEO from "@/components/SEO"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function ContactUsPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const socialIconComponents: { [key: string]: React.ElementType } = {
    BsFacebook: BsFacebook,
    BsTwitterX: BsTwitterX,
    BsLinkedin: BsLinkedin,
    BsInstagram: BsInstagram,
  };

  const location = useLocation();

  useEffect(() => {
    const scrollToForm = () => {
      const hash = location.hash;
      if (hash === "#form") {
        const formElement = document.getElementById("contact-form");
        if (formElement) {
          formElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Slight delay to ensure DOM is rendered
    setTimeout(scrollToForm, 100);
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setFormStatus("submitting")

  try {
    const response = await fetch("https://formspree.io/f/xkgbbzvz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setFormStatus("success")
      setTimeout(() => {
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        })
        setFormStatus("idle")
      }, 3000)
    } else {
      setFormStatus("error")
    }
  } catch (error) {
    console.error(error)
    setFormStatus("error")
  }
}


  return (
    <>
    <SEO
      title='Contact Us | VP Khambe & Associates | Schedule Your Consultation Now!'
      description='Get in touch with our team of experts for any queries on tax, audit, or business advisory. Fast response and personalized service guaranteed.'
      keywords='Chartered Accountant Services in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
      canonical='https://cavinaykhambe.in/contact'
    />
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className="bg-white shadow-sm border-b"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-slate-600">
            <span className="hover:text-blue-600 cursor-pointer">Home</span>
            <span>›</span>
            <span className="text-blue-600 font-medium">Contact Us</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div className="text-center" variants={fadeInUp} initial="initial" animate="animate">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Reach out to us for professional chartered accounting services and personalized solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="mb-12 text-center" variants={fadeInUp} initial="initial" animate="animate">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Reach us for Best Chartered Accounting Services</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From financial consulting to taxation planning, we encourage you to connect with us for a free
              consultation and the best CA's approach for your clients, as we serve CA firms and our prospective clients
              located anywhere in the globe.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information - Left Side */}
            <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-0">
                    <div className="bg-blue-600 p-6 text-white">
                      <h3 className="text-xl font-semibold mb-2">Get In Touch</h3>
                      <p className="text-blue-100">We're here to help with any questions you might have</p>
                    </div>
                    <div className="p-6 space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Address Info</h4>
                          <p className="text-slate-600">
                            Office No. 102, G Wing, K K market, 4th floor, Dhankawadi, Pune :- 411043
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Clock className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Office Schedule</h4>
                          <p className="text-slate-600">Monday to Saturday: 10:00 am to 06:30 pm</p>
                          <p className="text-slate-600">Sunday: Closed</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                          <Link to="tel:+918282826060" ><p className="text-slate-600">Mobile: +91 8282826060</p></Link>
                          <Link to="mailto:vpkhambeandassociates@gmail.com" ><p className="text-slate-600">Email: vpkhambeandassociates@gmail.com</p></Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Card className="overflow-hidden border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      {["BsFacebook", "BsTwitterX", "BsLinkedin", "BsInstagram"].map((socialKey) => {
                            const IconComponent = socialIconComponents[socialKey]; 

                            return (
                            <div
                                key={socialKey} // Using socialKey as the key is good
                                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer"
                            >
                                {/* Render the icon component */}
                                {IconComponent && <IconComponent size={24} color="#3b82f6" />} 
                            </div>
                            );
                        })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7568.851296786725!2d73.85028233990964!3d18.46436915703426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1e0c8ba477%3A0xb74177f9ec39f4f4!2sV%20P%20Khambe%20%26%20Associates!5e0!3m2!1sen!2sin!4v1750003620489!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Office Location"
                  className="absolute inset-0"
                ></iframe>
              </motion.div>
            </motion.div>

            {/* Contact Form - Right Side */}
            <motion.div variants={fadeIn} initial="initial" animate="animate">
              <Card className="border-0 shadow-lg" id="contact-form">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Your Message Us</h3>
                    <p className="text-slate-600">
                      Your email address will not be published. Required fields are marked *
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-slate-700">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                          Phone *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Your phone number"
                          required
                          className="border-slate-300 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email address"
                        required
                        className="border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-slate-700">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message"
                        required
                        className="min-h-[150px] border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-md font-medium text-lg"
                        disabled={formStatus === "submitting" || formStatus === "success"}
                      >
                        {formStatus === "idle" && (
                          <span className="flex items-center">
                            <Send className="mr-2 h-5 w-5" /> Submit
                          </span>
                        )}
                        {formStatus === "submitting" && "Submitting..."}
                        {formStatus === "success" && (
                          <span className="flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5" /> Message Sent!
                          </span>
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  {/* Form Status Message */}
                  {formStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md"
                    >
                      <p className="text-green-700 flex items-center">
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Thank you! Your message has been sent successfully.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our team is ready to provide expert advice and solutions for your accounting needs
            </p>
            <div className="inline-flex items-center justify-center space-x-4">
              <Phone className="h-6 w-6" />
              <span className="text-2xl font-semibold">+91-7823217804</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  </>  
  )
}
