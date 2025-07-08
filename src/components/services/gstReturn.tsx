import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, CheckCircle, Calendar, ShieldAlert, TrendingUp, HelpCircle } from "lucide-react"
import { Link } from "react-router-dom"
import SEO from "../SEO"

export default function GSTReturnFilingPage() {
  return (
  <>  
    <SEO 
      title='GST Return Filing | VP Khambe & Associates'
      description='We offer expert GST return filing services to ensure seamless compliance with GST regulations and maximize your input tax credit (ITC) benefits.'
      keywords='GST Return Filing in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
    />
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-56 bg-gradient-to-r from-blue-900 to-blue-500">
        <div className="absolute inset-0 w-full h-56 bg-[url('https://5.imimg.com/data5/SELLER/Default/2022/10/QA/QC/GO/159890009/gst-return-filing-service.png')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
          <nav className="text-white/80 text-sm mb-4">
            <Link to="/"><span>Home</span> </Link> <span className="mx-2">›</span> <span>GST Return Filing</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">GST Return Filing & Compliances</h1>
          <p className="text-xl text-white/90 max-w-2xl">Expert GST return filing services to ensure seamless compliance with GST regulations</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-12">
        {/* Overview Section */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Professional GST Return Filing Services</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <span className="text-blue-600 font-semibold">GST return filing</span> is a mandatory compliance requirement for all businesses registered under GST. Our expert services ensure accurate and timely filing of all GST returns while maximizing your input tax credit (ITC) benefits.
                </p>

                <p>
                  We handle all types of GST returns including <span className="font-semibold">GSTR-1</span>, <span className="font-semibold">GSTR-3B</span>, <span className="font-semibold">GSTR-9</span>, and <span className="font-semibold">GSTR-9C</span> for businesses of all sizes across industries.
                </p>

                <p>
                  Our team of <span className="font-semibold">GST practitioners</span> and <span className="font-semibold">Chartered Accountants</span> stays updated with the latest GST law changes to keep your business compliant and penalty-free.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                <ShieldAlert className="mr-2" />
                Why Timely GST Filing Matters
              </h3>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Avoid late fees up to ₹10,000 per return</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Prevent blocking of e-way bills</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Maintain input tax credit eligibility</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                  <span>Reduce scrutiny and notices from tax authorities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* GST Return Types Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <FileText className="mr-3 text-blue-600" />
            Types of GST Returns We Handle
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Monthly Returns</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      GSTR-1
                    </Badge>
                    <span>Outward supplies (Due by 11th of next month)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      GSTR-3B
                    </Badge>
                    <span>Summary return with tax payment (Due by 20th)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Quarterly Returns</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      GSTR-4
                    </Badge>
                    <span>Composition scheme (Due by 18th after quarter)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      CMP-08
                    </Badge>
                    <span>Composition tax payment (Due by 18th)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Annual Returns</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      GSTR-9
                    </Badge>
                    <span>Annual return (Due by Dec 31st)</span>
                  </li>
                  <li className="flex items-start">
                    <Badge variant="outline" className="mr-2 mt-1">
                      GSTR-9C
                    </Badge>
                    <span>Reconciliation statement (For turnover {">"} ₹2Cr)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <Calendar className="mr-3 text-blue-600" />
            Our GST Return Filing Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Collection</h3>
                <p className="text-slate-700 text-sm">
                  We collect your sales/purchase invoices, bank statements, and other relevant documents
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Reconciliation</h3>
                <p className="text-slate-700 text-sm">
                  We reconcile your books with GST portal data to identify mismatches
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Return Preparation</h3>
                <p className="text-slate-700 text-sm">
                  Our experts prepare accurate returns with optimal tax computation
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Filing & Follow-up</h3>
                <p className="text-slate-700 text-sm">
                  We file returns and handle any notices or queries from authorities
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center">
            <TrendingUp className="mr-3 text-blue-600" />
            Benefits of Our GST Filing Services
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  Timely Filing
                </h3>
                <p className="text-slate-700">
                  Never miss a deadline with our systematic reminder system and dedicated compliance calendar
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <FileText className="w-5 h-5 text-blue-600 mr-2" />
                  ITC Maximization
                </h3>
                <p className="text-slate-700">
                  We ensure you claim every eligible input tax credit while staying compliant
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <ShieldAlert className="w-5 h-5 text-blue-600 mr-2" />
                  Error-Free Filing
                </h3>
                <p className="text-slate-700">
                  Our 3-level review process minimizes errors that could trigger notices
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
                  Expert Support
                </h3>
                <p className="text-slate-700">
                  Dedicated GST expert available for all your queries and notices
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                  Comprehensive Reports
                </h3>
                <p className="text-slate-700">
                  Receive detailed compliance reports and tax liability analysis
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-blue-600 mr-2" />
                  Business Insights
                </h3>
                <p className="text-slate-700">
                  Get valuable insights from your GST data to improve business decisions
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-blue-50 rounded-lg p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Streamline Your GST Compliance Today</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Let our GST experts handle your return filing while you focus on growing your business. Stay compliant, avoid penalties, and maximize your input tax credits with our professional services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started with GST Filing
            </button>
            <button className="border border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Download GST Calendar
            </button>
          </div>
        </section>
      </div>
    </div>
    </>    
  )
}