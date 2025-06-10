import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Receipt, Calculator, Shield, AlertCircle, Clock, TrendingUp, ClipboardList } from "lucide-react"
import { Img } from "react-image"
import { Link } from "react-router-dom"

export default function GSTAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <Img
            src="https://www.shutterstock.com/image-illustration/2d-rendering-gst-tax-india-260nw-2427406493.jpg"
            alt="GST Audit"
            loader={<div>Loading...</div>}
            unloader={<div>Failed to load</div>}
            className="object-cover opacity-30 w-full h-56 blur-xs brightness-40"
            />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          {/* Breadcrumb */}
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span></Link> <span className="mx-2">›</span> <span>GST Audit</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GST Audit Services</h1>
          <p className="text-xl text-white/90 max-w-2xl">Ensuring compliance with GST regulations and optimizing your tax position</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* GST Audit Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Comprehensive GST Audit Solutions</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  A <span className="text-emerald-600 font-semibold">GST audit</span> is a detailed examination of a taxpayer's records, returns, and other documents to verify the accuracy of taxes paid, input tax credit claimed, and compliance with GST laws. Our specialized GST audit services help businesses navigate the complex GST framework while minimizing risks and maximizing compliance.
                </p>

                <p>
                  Under <span className="font-semibold">Section 35(5)</span> of the CGST Act, certain taxpayers are required to get their accounts audited by a <span className="font-semibold">Chartered Accountant</span> or <span className="font-semibold">Cost Accountant</span>. Our team of GST experts ensures your business meets all statutory requirements while identifying opportunities for tax optimization.
                </p>

                <p>
                  Whether you're a <span className="font-semibold">manufacturer</span>, <span className="font-semibold">trader</span>, <span className="font-semibold">service provider</span>, or <span className="font-semibold">e-commerce operator</span>, our GST audit services are tailored to your specific business needs and industry requirements.
                </p>
              </div>
            </div>

            <div className="relative">
              <Img
                src="https://cainfoindia.com/wp-content/uploads/2024/02/AUDIT194-1024x683.jpg"
                alt="GST Audit"
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load</div>}
                className="object-cover w-full h-96"
                />
            </div>
          </div>
        </section>

        {/* GST Audit Requirements */}
        <section className="mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <Receipt className="mr-3 text-emerald-600" />
                Who Needs GST Audit?
              </h2>

              <div className="space-y-4 text-slate-700">
                <p>
                  As per <span className="font-semibold">Section 35(5)</span> of the CGST Act, the following taxpayers are required to get their accounts audited:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <Calculator className="w-5 h-5 text-emerald-600 mr-2" />
                      Turnover Threshold
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Businesses with aggregate turnover exceeding ₹2 crores in a financial year</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Special category states (North-Eastern states) threshold: ₹1 crore</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3 flex items-center">
                      <FileText className="w-5 h-5 text-emerald-600 mr-2" />
                      Compliance Requirements
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Submission of GSTR-9C (Reconciliation Statement)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Certification by CA/CMA for audit report</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                  <p className="text-emerald-800 font-medium">
                    <span className="font-semibold">Note:</span> The due date for filing the annual return (GSTR-9) along with the audited copy of accounts (GSTR-9C) is December 31st of the following financial year.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our GST Audit Process */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <ClipboardList className="mr-3 text-emerald-600" />
            Our GST Audit Methodology
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-emerald-600 mb-4">
                  <FileText className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">1. Document Review</h3>
                <p className="text-slate-700 text-sm">
                  Examination of GST returns, invoices, payment records, and other relevant documents
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-emerald-600 mb-4">
                  <Calculator className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">2. Reconciliation</h3>
                <p className="text-slate-700 text-sm">
                  Matching books of accounts with GST returns and identifying discrepancies
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-emerald-600 mb-4">
                  <Shield className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">3. Compliance Check</h3>
                <p className="text-slate-700 text-sm">
                  Verification of GST law compliance including input tax credit claims
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="text-emerald-600 mb-4">
                  <CheckCircle className="w-10 h-10 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">4. Reporting</h3>
                <p className="text-slate-700 text-sm">
                  Preparation of audit report and reconciliation statement (GSTR-9C)
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Scope of GST Audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <TrendingUp className="mr-3 text-emerald-600" />
            Scope of Our GST Audit Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Compliance Audit</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Verification of timely filing of GST returns (GSTR-1, GSTR-3B)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Check for correct tax rates application on supplies</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Review of reverse charge mechanism compliance</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Assessment of composition scheme eligibility and compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Input Tax Credit Verification</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Reconciliation of ITC claimed with GSTR-2A/2B</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Verification of blocked credit under Section 17(5)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Review of credit reversal for exempt/non-business use</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Assessment of transitional credit claims</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Transaction Testing</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>Sample testing of outward and inward supplies</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Verification of export/import transactions</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Review of inter-state and intra-state supplies</span>
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
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Specialized Areas</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>E-commerce operator and supplier compliance</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>Job work and works contract assessments</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>Review of SEZ supplies and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>Assessment of refund claims and documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits of GST Audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <CheckCircle className="mr-3 text-emerald-600" />
            Benefits of Professional GST Audit
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-emerald-600 mr-2" />
                  Risk Mitigation
                </h3>
                <p className="text-slate-700">
                  Identify and rectify compliance gaps before they lead to penalties or notices from tax authorities.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-emerald-600 mr-2" />
                  ITC Optimization
                </h3>
                <p className="text-slate-700">
                  Maximize legitimate input tax credit claims while ensuring compliance with reversal requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <AlertCircle className="w-5 h-5 text-emerald-600 mr-2" />
                  Dispute Prevention
                </h3>
                <p className="text-slate-700">
                  Reduce the likelihood of GST notices and disputes through proactive compliance verification.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-emerald-600 mr-2" />
                  Documentation
                </h3>
                <p className="text-slate-700">
                  Maintain proper records and documentation to support your GST filings and claims.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                  Time Savings
                </h3>
                <p className="text-slate-700">
                  Save valuable time by outsourcing complex GST compliance to experts.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <Receipt className="w-5 h-5 text-emerald-600 mr-2" />
                  Process Improvement
                </h3>
                <p className="text-slate-700">
                  Get recommendations to streamline your GST processes and accounting systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-emerald-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ensure GST Compliance with Expert Audit Services</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Our specialized GST audit services help you meet regulatory requirements while identifying opportunities to optimize your tax position and improve compliance processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors">
              Schedule GST Audit Consultation
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Download GST Audit Checklist
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}