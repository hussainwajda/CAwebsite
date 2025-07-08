import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Scale, Building, ShieldCheck, BookOpen, ClipboardList } from "lucide-react"
import { Img } from 'react-image';
import { Link } from "react-router-dom";
import SEO from "../SEO";

export default function StatutoryAuditPage() {
  return (
  <>
  <SEO
      title='Statutory Audit | VP Khambe & Associates'
      description='We offer comprehensive statutory audits to help businesses and individuals understand their tax obligations and make informed decisions about their financial situation.'
      keywords='Statutory Audit in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
      />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <Img
            src="https://pkcindia.com/wp-content/uploads/2023/05/LP-112-_-Statutory-audit-services.jpg"
            alt="GST Audit"
            loader={<div>Loading...</div>}
            unloader={<div>Failed to load</div>}
            className="object-cover opacity-30 w-full h-56 blur-xs brightness-40"
            />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          {/* Breadcrumb */}
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span></Link> <span className="mx-2">›</span> <span>Statutory Audit</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Statutory Audit Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">Ensuring compliance, accuracy, and transparency in financial reporting as mandated by law</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Statutory Audit Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive Statutory Audit Solutions</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  A <span className="text-indigo-600 font-semibold">statutory audit</span> is a legally mandated examination of a company's financial statements and reporting procedures to ensure accuracy and compliance with accounting standards and regulations. As experienced <span className="font-semibold">Chartered Accountants</span>, we provide meticulous statutory audit services that meet all regulatory requirements while adding value to your business.
                </p>

                <p>
                  Our audit process is designed to give stakeholders confidence in your financial reporting while identifying areas for improvement in your financial controls and processes. We conduct audits in accordance with <span className="font-semibold">Companies Act 2013</span>, <span className="font-semibold">Accounting Standards</span>, and <span className="font-semibold">Auditing Standards</span> issued by ICAI.
                </p>

                <p>
                  Whether you're a <span className="font-semibold">private limited company</span>, <span className="font-semibold">public limited company</span>, <span className="font-semibold">LLP</span>, or <span className="font-semibold">other regulated entity</span>, our team ensures your audit is completed efficiently with minimal disruption to your operations.
                </p>
              </div>
            </div>

            <div className="relative">
              <Img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjea8ERLHa9LVBiBYQJvrCmMG2E6d8164dJQ&s"
                alt="GST Audit"
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load</div>}
                className="object-cover w-full"
                />
            </div>
          </div>
        </section>

        {/* Legal Requirements Section */}
        <section className="mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Scale className="mr-3 text-indigo-600" />
                Statutory Audit Requirements in India
              </h2>

              <div className="space-y-4 text-slate-700">
                <p>
                  Under the <span className="font-semibold">Companies Act 2013</span>, certain entities are required to undergo mandatory statutory audits:
                </p>

                <ul className="grid md:grid-cols-2 gap-4 mt-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>All companies incorporated under the Companies Act</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>LLPs with turnover exceeding ₹40 lakhs or capital contribution exceeding ₹25 lakhs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Trusts, societies, and NGOs receiving substantial donations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Banks, insurance companies, and other regulated entities</span>
                  </li>
                </ul>

                <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
                  <p className="text-indigo-800 font-medium">
                    <span className="font-semibold">Note:</span> The statutory audit must be conducted by an independent practicing Chartered Accountant or audit firm appointed by the shareholders at the Annual General Meeting.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Statutory Audit Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <ClipboardList className="mr-3 text-indigo-600" />
            Our Statutory Audit Methodology
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-indigo-600 mb-4">
                  <BookOpen className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">1. Planning</h3>
                <p className="text-slate-700 text-sm">
                  Understanding your business, assessing risks, and developing an audit strategy tailored to your organization
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-indigo-600 mb-4">
                  <FileText className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">2. Documentation</h3>
                <p className="text-slate-700 text-sm">
                  Reviewing financial records, policies, and internal control systems
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-indigo-600 mb-4">
                  <ShieldCheck className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">3. Testing</h3>
                <p className="text-slate-700 text-sm">
                  Verifying transactions, balances, and compliance with accounting standards
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-indigo-600 mb-4">
                  <CheckCircle className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">4. Reporting</h3>
                <p className="text-slate-700 text-sm">
                  Issuing audit opinion and management letter with observations and recommendations
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scope of Our Statutory Audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Building className="mr-3 text-indigo-600" />
            Scope of Our Statutory Audit Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Financial Statement Audit</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Examination of balance sheet, profit & loss account, and cash flow statement</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Verification of assets and liabilities</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Review of revenue recognition and expense accounting</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Evaluation of going concern assumption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Compliance Verification</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Check compliance with Companies Act and other applicable laws</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Review of board and shareholders meeting minutes</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Verification of statutory registers and filings</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Assessment of related party transactions</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Internal Controls Evaluation</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Assessment of accounting systems and internal controls</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Identification of control weaknesses</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Recommendations for control improvements</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Fraud risk assessment</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Specialized Audits</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Branch audits and subsidiary audits</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Tax audit under Section 44AB of Income Tax Act</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Concurrent audits for banks and financial institutions</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Stock audits and inventory verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <ShieldCheck className="mr-3 text-indigo-600" />
            Why Choose Our Statutory Audit Services?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Scale className="w-5 h-5 text-indigo-600 mr-2" />
                  Regulatory Expertise
                </h3>
                <p className="text-slate-700">
                  Our team stays updated with the latest changes in Companies Act, Accounting Standards (Ind AS/AS), and auditing standards to ensure complete compliance.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Building className="w-5 h-5 text-indigo-600 mr-2" />
                  Industry Specialization
                </h3>
                <p className="text-slate-700">
                  We have dedicated teams with deep understanding of various industries including manufacturing, IT, real estate, banking, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-indigo-600 mr-2" />
                  Value-Added Reporting
                </h3>
                <p className="text-slate-700">
                  Beyond the standard audit report, we provide detailed management letters with practical recommendations to improve your financial processes.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <ClipboardList className="w-5 h-5 text-indigo-600 mr-2" />
                  Efficient Process
                </h3>
                <p className="text-slate-700">
                  We use technology and streamlined methodologies to complete audits with minimal disruption to your daily operations.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mr-2" />
                  Quality Assurance
                </h3>
                <p className="text-slate-700">
                  Our audits undergo rigorous internal review processes to ensure the highest quality standards are maintained.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 mr-2" />
                  Risk Focus
                </h3>
                <p className="text-slate-700">
                  Our risk-based approach ensures we focus on areas that matter most to your business and stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-indigo-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ensure Compliance with Expert Statutory Audit Services</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Partner with our experienced Chartered Accountants for a thorough, efficient statutory audit that meets all regulatory requirements while providing valuable business insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
              Request Audit Proposal
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Download Audit Checklist
            </button>
          </div>
        </section>
      </div>
    </div>
  </>
  )
}