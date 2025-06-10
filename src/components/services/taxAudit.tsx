import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, FileText, Users, Shield, Calculator, AlertTriangle } from "lucide-react"
import { Img } from 'react-image';
import { Link } from "react-router-dom";

export default function TaxAuditPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-r from-slate-900 to-slate-700">
        <Img
          src="https://st.depositphotos.com/18433260/52236/i/450/depositphotos_522364610-stock-photo-concept-of-taxes-paid-by.jpg"
          alt="GST Audit"
          loader={<div>Loading...</div>}
          unloader={<div>Failed to load</div>}
          className="object-cover opacity-30 w-full h-56"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          {/* Breadcrumb */}
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span></Link> <span className="mx-2">›</span> <span>Income Tax Audit</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Income Tax Audit</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Section 44AB Overview */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Tax Audit Under Section 44AB</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  A <span className="text-green-600 font-semibold">tax audit</span> in India involves a thorough review
                  of a taxpayer's <span className="font-semibold">financial records</span> and{" "}
                  <span className="font-semibold">tax returns</span> to confirm the accuracy of the tax payments made
                  and the tax liability declared. The primary goal of a tax audit is to ensure that the taxpayer has
                  correctly paid their taxes and to identify any errors, discrepancies, or failures to comply with{" "}
                  <span className="font-semibold">tax regulations</span>.
                </p>

                <p>
                  In India, the tax audit process is governed by the{" "}
                  <span className="font-semibold">Income Tax Act, 1961</span>. According to the Act, certain individuals
                  or businesses are required to undergo a tax audit when their{" "}
                  <span className="font-semibold">turnover</span> surpasses a specific threshold. A{" "}
                  <span className="font-semibold">chartered accountant (CA)</span>, appointed by the taxpayer, conducts
                  the audit.
                </p>

                <p>
                  During the audit, the CA will carefully review the taxpayer's{" "}
                  <span className="font-semibold">books of accounts</span> and other financial documents to ensure that
                  all income has been accurately reported and that deductions are appropriately claimed. If the audit
                  uncovers any discrepancies or instances of non-compliance, the taxpayer will be liable to pay the{" "}
                  <span className="font-semibold">additional tax</span>, along with applicable{" "}
                  <span className="font-semibold">interest</span> and <span className="font-semibold">penalties</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              <Img
                src="https://i.pinimg.com/736x/9e/01/eb/9e01eb5466ed5b90dcea3c2f2f84fe38.jpg"
                alt="GST Audit"
                loader={<div>Loading...</div>}
                unloader={<div>Failed to load</div>}
                className="object-cover w-full"
              />
            </div>
          </div>
        </section>

        {/* What is Section 44AB */}
        <section className="mb-16">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <FileText className="mr-3 text-blue-600" />
                What is Section 44AB?
              </h2>

              <div className="space-y-4 text-slate-700">
                <p>
                  Recognizing the complexities of income tax and tax administration, especially when it comes to
                  understanding <span className="font-semibold">audit requirements</span> under Indian tax laws, this
                  crucial section that every business and individual should be aware of is{" "}
                  <span className="font-semibold">Section 44AB</span> of the Income Tax Act. Section 44AB mandates a{" "}
                  <span className="font-semibold">tax audit</span> for certain individuals and entities to ensure
                  compliance with tax laws and to maintain proper books of accounts.
                </p>

                <p>
                  The audit must be conducted by a <span className="font-semibold">chartered accountant</span> and
                  submitted in the <span className="font-semibold">prescribed format</span> within the specified due
                  date.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Objectives of Tax Audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <CheckCircle className="mr-3 text-green-600" />
            Objectives of Tax Audit
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Primary Objectives</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      1
                    </Badge>
                    <span>
                      The objectives of a tax audit under the Income Tax Act, 1961 is to ensure that businesses and
                      professionals comply with the provisions of the Act, maintain proper books of accounts, and
                      accurately report their income.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      2
                    </Badge>
                    <span>
                      <span className="font-semibold">Ensuring Compliance with Tax Laws:</span> The primary objective of
                      a tax audit is to verify compliance with the provisions of the Income Tax Act, particularly the
                      laws, which mandate businesses and professionals to maintain proper books of accounts.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Additional Goals</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      3
                    </Badge>
                    <span>
                      <span className="font-semibold">Accuracy of Financial Statements:</span> The audit ensures that
                      the financial statements and the balance sheet and profit & loss statement, by reviewing the books
                      of accounts, the auditor ensures that the income, expenses, and profits disclosed by the taxpayer
                      are accurate and properly recorded.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      4
                    </Badge>
                    <span>
                      <span className="font-semibold">Prevention of Tax Evasion:</span> This objective aims to deter tax
                      evasion by having a professional Chartered Accountant (CA) examine the records, it discourages
                      businesses from hiding income or inflating expenses.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Who is Required to Get a Tax Audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Users className="mr-3 text-purple-600" />
            Who is Required to Get a Tax Audit?
          </h2>

          <Card className="p-8">
            <CardContent className="p-0">
              <p className="text-slate-700 mb-6">
                Here is a breakdown of{" "}
                <span className="font-semibold">who must get their accounts audited under Section 44AB:</span>
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Persons Carrying on Business</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Mandatory Audit:</span> Total sales/turnover/gross receipts
                        exceeds ₹1 crore in any previous year.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Enhanced Limit:</span> ₹10 crores if:
                      </span>
                    </li>
                    <li className="ml-6 text-sm text-slate-600">
                      • Total sales, turnover or gross receipts is ₹10 cr or less receipts is
                    </li>
                    <li className="ml-6 text-sm text-slate-600">
                      • Total cash payments (including for expenses) - 5% of total payments
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Persons Carrying on Profession</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Mandatory Audit:</span> Gross receipts exceeds ₹50 lakhs in
                        previous year
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>
                        <span className="font-semibold">Presumptive Taxation - Professional (Section 44ADA):</span>
                      </span>
                    </li>
                    <li className="ml-6 text-sm text-slate-600">
                      • Audit Required if income is lower than the presumptive rate, and
                    </li>
                    <li className="ml-6 text-sm text-slate-600">• Total receipts exceeds the basic exemption limit</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Us for Tax Audit */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Shield className="mr-3 text-blue-600" />
            Why Choose Us for Tax Audit?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Expert Chartered Accountants</h3>
                <p className="text-slate-700 text-sm">
                  Our team consists of highly qualified Chartered Accountants (CAs) who specialize in conducting Tax
                  Audits under Section 44AB. With deep knowledge of tax laws and regulations, we ensure thorough and
                  accurate audits.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Comprehensive Tax Audit Services</h3>
                <p className="text-slate-700 text-sm">
                  We offer end-to-end tax audit services in Pune that include preparation and review of books of
                  accounts, identifying discrepancies, and submitting the audit report within the prescribed timelines.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Timely and Accurate Reporting</h3>
                <p className="text-slate-700 text-sm">
                  We understand the importance of meeting deadlines. Our systematic approach ensures that your tax audit
                  is completed within the stipulated timelines, helping you avoid penalties.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-slate-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need Professional Tax Audit Services?</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Ensure compliance with tax regulations and avoid penalties with our expert tax audit services. Our qualified
            chartered accountants are here to help you navigate the complexities of Section 44AB.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Free Consultation
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}