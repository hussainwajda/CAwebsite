import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Calculator, ShieldCheck, PieChart, Clock, AlertCircle, CheckCircle } from "lucide-react"
import { Link } from "react-router-dom"
import SEO from "../SEO"

export default function IncomeTaxFilingPage() {
  return (
  <>  
    <SEO 
      title='Income Tax Return Filing | VP Khambe & Associates'
      description='We offer expert income tax return (ITR) filing services to maximize your refunds and ensure full compliance with tax regulations.'
      keywords='Income Tax Return Filing in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
      canonical='https://cavinaykhambe.in/services/income-tax-filing'
    />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-r from-purple-900 to-purple-700">
        <div className="absolute inset-0 bg-[url('/images/tax-filing-hero.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span> </Link> <span className="mx-2">›</span> <span>Income Tax Filing</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Income Tax Return Filing & Compliances</h1>
          <p className="text-xl text-white/90 max-w-2xl">Expert tax filing services to maximize your refunds and ensure full compliance</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional Income Tax Filing Services</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="text-purple-600 font-semibold">Income tax return (ITR) filing</span> is a mandatory obligation for individuals and businesses in India. Our comprehensive tax filing services ensure accurate reporting of your income while maximizing deductions and minimizing tax liability.
                </p>

                <p>
                  We handle all types of ITR forms including <span className="font-semibold">ITR-1 (Sahaj)</span>, <span className="font-semibold">ITR-2</span>, <span className="font-semibold">ITR-3</span> for businesses, and <span className="font-semibold">ITR-4 (Sugam)</span> for presumptive taxation.
                </p>

                <p>
                  Our team of <span className="font-semibold">Chartered Accountants</span> and <span className="font-semibold">tax experts</span> stays updated with the latest tax laws to help you claim all eligible deductions under sections like 80C, 80D, HRA, and more.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                <AlertCircle className="mr-2" />
                Consequences of Non-Filing
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Late filing fee up to ₹10,000</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Interest on unpaid taxes (1% per month)</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Difficulty in obtaining loans/visas</span>
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 mt-1 bg-red-100 text-red-800">
                    !
                  </Badge>
                  <span>Increased scrutiny from tax department</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ITR Types Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <FileText className="mr-3 text-purple-600" />
            Types of Income Tax Returns We File
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">For Individuals</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      ITR-1
                    </Badge>
                    <span>For salaried individuals with income up to ₹50 lakhs</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      ITR-2
                    </Badge>
                    <span>For individuals with capital gains or foreign income</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      ITR-4
                    </Badge>
                    <span>For presumptive income (business/profession)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">For Businesses</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      ITR-3
                    </Badge>
                    <span>For proprietorships and partnership firms</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      ITR-5
                    </Badge>
                    <span>For LLPs, AOPs, BOIs, and other entities</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      ITR-6
                    </Badge>
                    <span>For companies not claiming 80G exemption</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Clock className="mr-3 text-purple-600" />
            Our Tax Filing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Document Collection</h3>
                <p className="text-slate-700 text-sm">
                  We collect Form 16, investment proofs, bank statements, and other necessary documents
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Tax Planning</h3>
                <p className="text-slate-700 text-sm">
                  Our experts analyze your income to maximize deductions and minimize tax liability
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Return Preparation</h3>
                <p className="text-slate-700 text-sm">
                  We prepare accurate returns with all eligible deductions and exemptions
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Filing & Verification</h3>
                <p className="text-slate-700 text-sm">
                  We e-file your return and guide you through the verification process
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <ShieldCheck className="mr-3 text-purple-600" />
            Why Choose Our Tax Filing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Calculator className="w-5 h-5 text-purple-600 mr-2" />
                  Maximum Refunds
                </h3>
                <p className="text-slate-700">
                  We identify all eligible deductions (80C, 80D, HRA, LTA, etc.) to maximize your tax savings
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-purple-600 mr-2" />
                  Error-Free Filing
                </h3>
                <p className="text-slate-700">
                  Our 3-level review process minimizes errors that could trigger tax notices
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <PieChart className="w-5 h-5 text-purple-600 mr-2" />
                  Tax Planning
                </h3>
                <p className="text-slate-700">
                  Get strategic advice to optimize your tax position throughout the year
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <ShieldCheck className="w-5 h-5 text-purple-600 mr-2" />
                  Notice Handling
                </h3>
                <p className="text-slate-700">
                  We represent you for any income tax notices or scrutiny assessments
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-purple-600 mr-2" />
                  Timely Filing
                </h3>
                <p className="text-slate-700">
                  Never miss deadlines with our systematic reminder system
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-purple-600 mr-2" />
                  Audit Support
                </h3>
                <p className="text-slate-700">
                  Comprehensive assistance if your return gets selected for audit
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Tax Saving Section */}
        <section className="mb-16 bg-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-purple-900 mb-6">Popular Tax Saving Options We Advise On</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Section 80C Deductions</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>ELSS Mutual Funds</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>PPF, NSC, Tax-saving FDs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Life Insurance Premiums</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Health & Insurance</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Health Insurance (Section 80D)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Medical Expenditure (80DDB)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Preventive Health Check-ups</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-purple-800 mb-3">Other Deductions</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Home Loan Interest (24B)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Education Loan (80E)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Donations (80G)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-purple-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">File Your Income Tax Return with Confidence</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Let our tax experts handle your return filing while you enjoy peace of mind. Maximize your refunds, stay compliant, and avoid penalties with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Your Tax Filing
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Download Tax Calendar
            </button>
          </div>
        </section>
      </div>
    </div>
  </>
  )
}