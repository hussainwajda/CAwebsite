import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Users, Shield, Layers, BarChart, Target, Clock } from "lucide-react"
import { Img } from "react-image"
import { Link } from "react-router-dom"

export default function InternalAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-r from-blue-900 to-blue-700">
        <Img
            src="https://static.vecteezy.com/system/resources/thumbnails/006/844/855/small/internal-control-on-virtual-screen-accounting-and-audit-photo.jpg"
            alt="GST Audit"
            loader={<div>Loading...</div>}
            unloader={<div>Failed to load</div>}
            className="object-cover opacity-30 w-full h-56"
            />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          {/* Breadcrumb */}
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span></Link> <span className="mx-2">›</span> <span>Internal Audit</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Internal Audit Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">Enhancing governance, risk management, and operational efficiency through comprehensive internal audits</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Internal Audit Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Internal Audit Services</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Our <span className="text-blue-600 font-semibold">internal audit services</span> provide independent, 
                  objective assurance and consulting activity designed to add value and improve your organization's operations. 
                  We help organizations accomplish their objectives by bringing a systematic, disciplined approach to evaluate 
                  and improve the effectiveness of <span className="font-semibold">risk management</span>, <span className="font-semibold">control</span>, 
                  and <span className="font-semibold">governance processes</span>.
                </p>

                <p>
                  As experienced <span className="font-semibold">Chartered Accountants</span>, we offer more than just compliance checks. 
                  Our internal audits provide strategic insights that help businesses identify opportunities for 
                  <span className="font-semibold"> operational improvements</span>, <span className="font-semibold">cost savings</span>, 
                  and <span className="font-semibold">risk mitigation</span>.
                </p>

                <p>
                  Whether you need a <span className="font-semibold">one-time review</span> or <span className="font-semibold">ongoing audit support</span>, 
                  our team tailors the approach to your specific industry, regulatory environment, and organizational objectives.
                </p>
              </div>
            </div>

            <div className="relative">
              <Img
                src="https://insight.accovet.com/storage/2022/08/Introduction-and-Overview-of-Auditing.jpg"
                alt="GST Audit"
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load</div>}
                className="object-cover w-full"
                />
            </div>
          </div>
        </section>

        {/* Importance of Internal Audit */}
        <section className="mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Layers className="mr-3 text-blue-600" />
                Why Internal Audit Matters
              </h2>

              <div className="space-y-4 text-slate-700">
                <p>
                  In today's complex business environment, internal audit has evolved from being a <span className="font-semibold">compliance function</span> 
                  to a <span className="font-semibold">strategic partner</span> that provides valuable insights for business growth and sustainability. 
                  Effective internal auditing helps organizations:
                </p>

                <ul className="grid md:grid-cols-2 gap-4 mt-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Identify and mitigate risks before they become issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Improve operational efficiency and reduce costs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Ensure compliance with laws, regulations, and policies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Protect assets and prevent fraud</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Enhance the reliability of financial reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Provide objective assurance to stakeholders</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <BarChart className="mr-3 text-blue-600" />
            Our Internal Audit Approach
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 h-full">
              <CardContent className="p-0">
                <div className="text-blue-600 mb-4">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Risk-Based Focus</h3>
                <p className="text-slate-700">
                  We prioritize audit areas based on your organization's specific risk profile, ensuring we address the most critical vulnerabilities first.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 h-full">
              <CardContent className="p-0">
                <div className="text-blue-600 mb-4">
                  <FileText className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Comprehensive Methodology</h3>
                <p className="text-slate-700">
                  Our audit process includes planning, fieldwork, reporting, and follow-up to ensure complete coverage and actionable recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 h-full">
              <CardContent className="p-0">
                <div className="text-blue-600 mb-4">
                  <Clock className="w-10 h-10" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Continuous Improvement</h3>
                <p className="text-slate-700">
                  We don't just identify issues - we help implement solutions and monitor progress to ensure sustainable improvements.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Internal Audit Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Layers className="mr-3 text-blue-600" />
            Our Internal Audit Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Financial Audits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Review of accounting systems and financial controls</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Verification of financial statement accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Assessment of compliance with accounting standards</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Detection and prevention of financial fraud</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Operational Audits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Evaluation of business processes and efficiency</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Identification of cost-saving opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Assessment of resource utilization</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Benchmarking against industry best practices</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Compliance Audits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Review of regulatory compliance (GST, Income Tax, Company Law)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Assessment of internal policy adherence</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Identification of compliance gaps and risks</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Recommendations for compliance framework improvements</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">IT Audits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Evaluation of IT controls and security</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Assessment of data integrity and privacy measures</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Review of system access controls</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Business continuity and disaster recovery planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Shield className="mr-3 text-blue-600" />
            Why Choose Our Internal Audit Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Experienced Professionals</h3>
                <p className="text-slate-700 text-sm">
                  Our team comprises seasoned Chartered Accountants and audit specialists with extensive experience across industries.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Customized Solutions</h3>
                <p className="text-slate-700 text-sm">
                  We tailor our audit approach to your specific business needs, size, and industry requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Value-Added Reporting</h3>
                <p className="text-slate-700 text-sm">
                  Our reports go beyond identifying issues - we provide practical, actionable recommendations for improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Strengthen Your Internal Controls?</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Our professional internal audit services help you identify risks, improve operations, and ensure compliance. 
            Partner with us to gain valuable insights into your business processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Audit Consultation
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Download Audit Checklist
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}