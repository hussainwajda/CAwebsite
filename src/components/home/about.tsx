
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import image from "../../assets/about.jpg"
import { useNavigate } from "react-router-dom"

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src={image}
                alt="Chartered Accountant Professional analyzing charts"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Text Section - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                About Us—Chartered Accountant In Pune
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-gray-600 leading-relaxed">
                <strong>VP Khambe & Associates, Chartered Accountant in Pune</strong> is a professionally
                managed firm catering to domestic and international clients with wide range of services in domestic and
                taxation, regulatory and advisory services and many audit related services.
                The team of VP Khambe & Associates is firm of CA in Pune and has dedicated, experienced and expert professionals
                and associates like Chartered Accountants, Company Secretary and Consultants and high-end infrastructure
                to provide end to end services to your business.
              </p>

              <p className="text-gray-600 leading-relaxed">
                With effort of gaining deep understanding of your business, our qualified team is committed to provide
                valuable, consistent and efficient services based on its in-depth knowledge and wide experience in the
                areas of audit, taxation, regulatory compliances and related business services. Our objective is to help
                our clients to focus on and achieve their business and financial goals by providing them services that
                is personalized and tailored to meet our client's requirements and suit their business the best.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button
                size="lg"
                onClick={() => navigate("/about") }
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded font-medium transition-colors duration-300"
              >
                Read more
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
