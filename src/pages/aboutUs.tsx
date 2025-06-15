"use client"

import { Img } from "react-image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, TrendingUp, Shield, Clock, Star, Eye, Heart, Lightbulb } from "lucide-react"
import { useNavigate } from "react-router-dom"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
}

export default function AboutUsPage() {
  const navigate = useNavigate();
  return (
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
            <span className="text-blue-600 font-medium">About Us</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInUp} initial="initial" animate="animate">
              <Badge className="mb-4 bg-blue-100 text-blue-700 hover:bg-blue-100">Professional CA Services</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                About Us - CA in <span className="text-blue-600">Pune</span>
              </h1>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                <strong>Vinay Khambe & Associates, Chartered Accountant in Pune</strong> is a professionally
                managed firm catering to domestic and international clients with wide range of services in domestic and
                taxation, regulatory and advisory services and many audit related services.
              </p>
              <motion.div
                className="flex flex-wrap gap-4"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                {[
                  { icon: Users, text: "Expert Team" },
                  { icon: Award, text: "Certified CAs" },
                  { icon: Shield, text: "Trusted Service" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm"
                  >
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative z-10">
                <Img
                  src="https://img.freepik.com/premium-photo/businessman-working-office-with-business-graphs-laptop-notepad_359031-11248.jpg?semt=ais_hybrid&w=740"
                  alt="CA Office in Pune"
                  width={500}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose VP Khambe & Associates?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              We provide comprehensive CA services with a commitment to excellence, integrity, and client satisfaction.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Award,
                title: "Professional Excellence",
                description: "We have professional, experienced and knowledgeable specialists. Decades client's needs.",
              },
              {
                icon: TrendingUp,
                title: "Proven Track Record",
                description:
                  "Our team has extensive experience in business development and charting the information in the changing economy to provide our clients with the best possible solutions.",
              },
              {
                icon: Clock,
                title: "Timely Service Delivery",
                description:
                  "We believe in strong long-lasting communication with our clients to determine their corporate identity, ensuring creating the deliverables by working with them.",
              },
              {
                icon: Users,
                title: "Client-Focused Approach",
                description: "We consider feedback from our clients. So we in important.",
              },
              {
                icon: Shield,
                title: "Reliable & Trustworthy",
                description: "Stable as our commitment.",
              },
              {
                icon: Star,
                title: "Quality Assurance",
                description:
                  "We understand the client's problems so if they want any assistance to provide them with solutions that have commercial benefit.",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full p-6 hover:shadow-lg transition-all duration-300 border-0 shadow-md group">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-full">
                <Eye className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our goal and aim are not restricted with the best solutions to our commitment. We believe that everyone
              working with them and one another. Our vision is to encourage the best of our innovation and partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-slate-600">
              Our experienced professionals are dedicated to providing exceptional service
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: "CA Vinay Khambe",
                title: "Founder & Managing Partner",
                image: "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg",
                description:
                  "CA Vinay Khambe is the founder and a Managing Partner. Vinay has over 10 years of experience in taxation, auditing, and financial consulting. He specializes in corporate taxation, GST compliance, and business advisory services. Under his leadership, the firm has built a strong reputation for delivering high-quality services.",
              },
              {
                name: "----------------------",
                title: "Partner & Financial Advisor",
                image: "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg",
                description:
                  `CA Vinay Khambe is the founder and a Managing Partner. Vinay has over 10 years of experience in taxation, auditing, and financial consulting. He specializes in corporate taxation, GST compliance, and business advisory services. Under his leadership, the firm has built a strong reputation for delivering high-quality services. `,
              },
            ].map((member, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <Img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={300}
                      height={300}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
                    <Badge variant="outline" className="mb-4">
                      {member.title}
                    </Badge>
                    <p className="text-slate-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-600">The principles that guide everything we do</p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Integrity",
                description:
                  "We maintain the highest ethical standards in all our professional dealings and client relationships.",
              },
              {
                icon: Heart,
                title: "Client-Centric",
                description:
                  "Our clients' success is our success. We are committed to understanding and exceeding their expectations.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description:
                  "We continuously evolve our practices and embrace new technologies to serve our clients better.",
              },
            ].map((value, index) => (
              <motion.div key={index} variants={scaleIn}>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300">
                  <div className="inline-flex p-4 bg-blue-600 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-blue-100 mb-8">Let's discuss how we can help your business grow and succeed</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/contact#form")}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
