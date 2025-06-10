import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Scale, Gavel, AlertCircle, ArrowRight, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function ScurnityAssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-56 bg-gradient-to-r from-amber-900 to-amber-700"
      >
        <div className="absolute inset-0 bg-[url('/images/tax-assessment-hero.jpg')] bg-cover bg-center opacity-30" />
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24"
        >
          <motion.nav variants={fadeIn} className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span> </Link> <span className="mx-2">›</span> <span className="font-semibold text-[#53b948]">Scrutiny & Appeals</span>
          </motion.nav>

          <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl font-bold text-white mb-4">
            Scrutiny, Assessment & Appeals
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-white/90 max-w-2xl">
            Expert representation for tax scrutiny cases, assessments, and appeals at all levels
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Overview Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tax Scrutiny & Assessment Representation</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="text-amber-600 font-semibold">Tax scrutiny and assessments</span> can be stressful and complex. Our team of experienced <span className="font-semibold">Chartered Accountants</span> and <span className="font-semibold">tax advocates</span> provides comprehensive representation before tax authorities at all levels.
                </p>

                <p>
                  We handle all types of tax assessments including <span className="font-semibold">scrutiny assessments</span>, <span className="font-semibold">best judgment assessments</span>, <span className="font-semibold">reassessments</span>, and <span className="font-semibold">protective assessments</span> under the Income Tax Act, GST laws, and other tax statutes.
                </p>

                <p>
                  Our experts will <span className="font-semibold">analyze your case</span>, <span className="font-semibold">prepare robust responses</span>, and <span className="font-semibold">represent you effectively</span> to minimize your tax liability and avoid unnecessary penalties.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-amber-800 mb-4 flex items-center">
                <AlertCircle className="mr-2" />
                When You Need Our Services
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Receipt of scrutiny notice from tax department</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Discrepancy in tax computation by authorities</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Assessment order with excessive tax demand</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Penalty proceedings initiated against you</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Services Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Scale className="mr-3 text-amber-600" />
            Our Scrutiny & Appeal Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={fadeIn}>
              <Card className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <FileText className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Scrutiny Representation</h3>
                  </div>
                  <ul className="space-y-2 text-slate-700 pl-13">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Detailed analysis of scrutiny notice</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Preparation of comprehensive response</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Representation before AO/CIT</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <Gavel className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Appeals & Revisions</h3>
                  </div>
                  <ul className="space-y-2 text-slate-700 pl-13">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>First appeal before CIT(A)</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Appeal before ITAT/Tribunal</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>High Court & Supreme Court appeals</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeIn}>
              <Card className="p-6 h-full">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Demand & Penalty</h3>
                  </div>
                  <ul className="space-y-2 text-slate-700 pl-13">
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Stay of demand applications</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Penalty proceedings defense</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Settlement Commission applications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <ArrowRight className="mr-3 text-amber-600" />
            Our Assessment Resolution Process
          </motion.h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Case Analysis",
                desc: "Detailed review of notice, assessment order, and supporting documents"
              },
              {
                title: "Strategy Development",
                desc: "Creating customized defense strategy based on legal precedents"
              },
              {
                title: "Document Preparation",
                desc: "Compiling evidence, legal submissions, and supporting documents"
              },
              {
                title: "Representation",
                desc: "Appearing before authorities and presenting your case effectively"
              }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 h-full text-center">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-amber-600 font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-700 text-sm">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Success Factors Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Shield className="mr-3 text-amber-600" />
            Why Choose Our Assessment Services
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Scale className="w-5 h-5 text-amber-600" />,
                title: "Deep Legal Knowledge",
                desc: "Thorough understanding of tax laws and judicial precedents"
              },
              {
                icon: <FileText className="w-5 h-5 text-amber-600" />,
                title: "Strong Documentation",
                desc: "Meticulous preparation of submissions and evidence"
              },
              {
                icon: <Gavel className="w-5 h-5 text-amber-600" />,
                title: "Appellate Experience",
                desc: "Successful track record at all appellate levels"
              },
              {
                icon: <AlertCircle className="w-5 h-5 text-amber-600" />,
                title: "Risk Assessment",
                desc: "Honest evaluation of case strengths and weaknesses"
              },
              {
                icon: <Clock className="w-5 h-5 text-amber-600" />,
                title: "Timely Action",
                desc: "Meeting strict statutory deadlines for appeals"
              },
              {
                icon: <ArrowRight className="w-5 h-5 text-amber-600" />,
                title: "Alternative Resolutions",
                desc: "Exploring settlement options where appropriate"
              }
            ].map((item, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6 h-full">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </h3>
                    <p className="text-slate-700">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-16 bg-amber-50 rounded-lg p-8"
        >
          <motion.h2 variants={fadeIn} className="text-2xl font-bold text-amber-900 mb-6">
            Recent Success Cases
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "₹1.2Cr Demand Reduction",
                desc: "Successfully reduced tax demand in scrutiny assessment by proving incorrect addition of cash credits"
              },
              {
                title: "Penalty Waiver",
                desc: "Obtained complete waiver of ₹18L penalty in GST case by demonstrating reasonable cause"
              },
              {
                title: "ITAT Victory",
                desc: "Won appeal at ITAT level for client facing ₹2.8Cr addition on capital gains computation"
              },
              {
                title: "Settlement Approval",
                desc: "Secured favorable settlement for client with ₹5.6Cr disputed demand before Settlement Commission"
              }
            ].map((caseStudy, index) => (
              <motion.div key={index} variants={fadeIn}>
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">{caseStudy.title}</h3>
                    <p className="text-slate-700">{caseStudy.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-amber-50 rounded-lg p-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Facing Tax Scrutiny or Unjust Demand?</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Don't face tax authorities alone. Our experienced team will protect your interests and fight for the best possible outcome in your tax assessment or appeal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
            >
              Get Assessment Help Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
            >
              Download Appeal Process Guide
            </motion.button>
          </div>
        </motion.section>
      </div>
    </div>
  )
}