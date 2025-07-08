import { useState, useMemo } from "react"
import { Img } from "react-image"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Calendar, User, ChevronLeft, ChevronRight, Clock, Eye } from "lucide-react"
import SEO from "@/components/SEO"

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

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding GST Compliance for Small Businesses",
    excerpt:
      "GST compliance is crucial for small businesses in India. This comprehensive guide covers everything you need to know about GST registration, filing returns, and maintaining proper records to avoid penalties.",
    fullContent:
      "GST compliance is crucial for small businesses in India. This comprehensive guide covers everything you need to know about GST registration, filing returns, and maintaining proper records to avoid penalties.\n\nThe Goods and Services Tax (GST) has revolutionized the Indian taxation system, bringing uniformity and transparency to indirect taxation. For small businesses, understanding and complying with GST regulations is not just a legal requirement but also a strategic advantage.\n\nKey aspects of GST compliance include:\n\n1. **Registration Requirements**: Businesses with turnover exceeding ₹40 lakhs (₹20 lakhs for special category states) must register for GST.\n\n2. **Invoice Management**: Proper invoicing with all required details is essential for GST compliance.\n\n3. **Return Filing**: Regular filing of GSTR-1, GSTR-3B, and annual returns is mandatory.\n\n4. **Input Tax Credit**: Understanding how to claim and utilize input tax credit effectively.\n\n5. **Record Keeping**: Maintaining proper books of accounts and supporting documents.\n\nNon-compliance can result in heavy penalties, interest charges, and legal complications. Therefore, it's advisable to seek professional help from qualified chartered accountants who specialize in GST matters.",
    image: "https://m.media-amazon.com/images/G/31/bizzopedia/blog89/Blog_89_Image_1_Banner.jpg",
    author: "CA Vinay Khambe",
    date: "2024-01-15",
    category: "GST",
    readTime: "8 min read",
    views: 1250,
  },
  {
    id: 2,
    title: "Income Tax Planning Strategies for FY 2024-25",
    excerpt:
      "Maximize your tax savings with these proven income tax planning strategies. Learn about the latest deductions, exemptions, and investment options available under the Income Tax Act.",
    fullContent:
      "Maximize your tax savings with these proven income tax planning strategies. Learn about the latest deductions, exemptions, and investment options available under the Income Tax Act.\n\nEffective tax planning is essential for individuals and businesses to minimize their tax liability while staying compliant with the law. With the financial year 2024-25 bringing new opportunities and challenges, it's important to understand the various tax-saving instruments available.\n\n**Key Tax Planning Strategies:**\n\n1. **Section 80C Investments**: Maximize your ₹1.5 lakh deduction through EPF, PPF, ELSS, life insurance premiums, and home loan principal repayment.\n\n2. **Health Insurance**: Claim deductions up to ₹25,000 under Section 80D for health insurance premiums.\n\n3. **Home Loan Benefits**: Claim deductions for both principal (Section 80C) and interest (Section 24) components.\n\n4. **National Pension System**: Additional ₹50,000 deduction under Section 80CCD(1B).\n\n5. **Education Loan**: Interest paid on education loans is fully deductible under Section 80E.\n\n**New Tax Regime vs Old Tax Regime:**\nChoose between the new tax regime with lower rates but fewer deductions, or the old regime with higher rates but more deduction opportunities.\n\nProper planning and timely investments can significantly reduce your tax burden while building wealth for the future.",
    image: "https://taxgyany.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-15-at-19.16.38_c9df4324-1.jpg",
    author: "CA Vinay Khambe",
    date: "2024-01-10",
    category: "Income Tax",
    readTime: "10 min read",
    views: 980,
  },
  {
    id: 3,
    title: "Digital Accounting: Transforming Financial Management",
    excerpt:
      "Discover how digital accounting tools and cloud-based solutions are revolutionizing financial management for businesses of all sizes. Learn about the benefits and implementation strategies.",
    fullContent:
      "Discover how digital accounting tools and cloud-based solutions are revolutionizing financial management for businesses of all sizes. Learn about the benefits and implementation strategies.\n\nThe digital transformation of accounting has fundamentally changed how businesses manage their finances. From manual ledgers to sophisticated cloud-based accounting software, the evolution has been remarkable.\n\n**Benefits of Digital Accounting:**\n\n1. **Real-time Financial Reporting**: Access to up-to-date financial information anytime, anywhere.\n\n2. **Automated Processes**: Reduce manual errors and save time with automated bookkeeping, invoicing, and reconciliation.\n\n3. **Cost Efficiency**: Lower operational costs compared to traditional accounting methods.\n\n4. **Enhanced Security**: Cloud-based solutions offer better data security and backup options.\n\n5. **Scalability**: Easy to scale up or down based on business requirements.\n\n**Popular Digital Accounting Tools:**\n- Tally Prime\n- QuickBooks\n- Zoho Books\n- SAP Business One\n- Microsoft Dynamics\n\n**Implementation Strategy:**\n1. Assess current accounting processes\n2. Choose the right software based on business needs\n3. Plan data migration carefully\n4. Train staff on new systems\n5. Establish new workflows and controls\n\nThe future of accounting is digital, and businesses that embrace this transformation will have a competitive advantage in the marketplace.",
    image: "https://www.datarails.com/wp-content/uploads/2023/07/AI-is-changing-the-World-min.png",
    author: "CA Vinay Khambe",
    date: "2024-01-05",
    category: "Technology",
    readTime: "7 min read",
    views: 1450,
  },
  {
    id: 4,
    title: "Audit Preparation: A Complete Checklist for Businesses",
    excerpt:
      "Prepare your business for a smooth audit process with this comprehensive checklist. Ensure all documents are in order and compliance requirements are met.",
    fullContent:
      "Prepare your business for a smooth audit process with this comprehensive checklist. Ensure all documents are in order and compliance requirements are met.\n\nAudit preparation is a critical process that requires careful planning and organization. Whether it's a statutory audit, tax audit, or internal audit, being well-prepared can save time, reduce stress, and ensure compliance.\n\n**Pre-Audit Preparation Checklist:**\n\n**Financial Records:**\n- Bank statements and reconciliations\n- Cash books and ledgers\n- Trial balance and financial statements\n- Fixed asset registers\n- Inventory records\n\n**Supporting Documents:**\n- Purchase and sales invoices\n- Contracts and agreements\n- Board resolutions\n- Loan documents\n- Insurance policies\n\n**Compliance Documents:**\n- GST returns and certificates\n- TDS certificates and returns\n- PF and ESI compliance\n- ROC filings\n- License renewals\n\n**Internal Controls:**\n- Review internal control systems\n- Document key processes\n- Identify potential risk areas\n- Prepare explanations for unusual transactions\n\n**Communication:**\n- Inform all departments about the audit\n- Designate a point of contact\n- Prepare staff for auditor queries\n- Set up a dedicated workspace for auditors\n\n**Post-Audit Actions:**\n- Address audit observations promptly\n- Implement recommended improvements\n- Update internal processes\n- Plan for next audit cycle\n\nProper preparation not only ensures a smooth audit but also demonstrates the organization's commitment to transparency and good governance.",
    image: "https://bing.com/th/id/OIP.sC8KvAHtc5UXm9xUgs0udQHaEK?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain",
    author: "CA Vinay Khambe",
    date: "2023-12-28",
    category: "Audit",
    readTime: "12 min read",
    views: 875,
  },
  {
    id: 5,
    title: "Corporate Restructuring: Legal and Tax Implications",
    excerpt:
      "Understand the complexities of corporate restructuring, including mergers, acquisitions, and demergers. Learn about the legal framework and tax implications involved.",
    fullContent:
      "Understand the complexities of corporate restructuring, including mergers, acquisitions, and demergers. Learn about the legal framework and tax implications involved.\n\nCorporate restructuring is a strategic process that involves significant changes to a company's structure, operations, or ownership. It can take various forms and has far-reaching legal and tax implications.\n\n**Types of Corporate Restructuring:**\n\n1. **Mergers**: Combination of two or more companies into a single entity\n2. **Acquisitions**: One company purchasing another\n3. **Demergers**: Splitting a company into separate entities\n4. **Spin-offs**: Creating independent companies from existing divisions\n5. **Joint Ventures**: Forming strategic partnerships\n\n**Legal Framework:**\n- Companies Act, 2013 provisions\n- SEBI regulations for listed companies\n- Competition Act compliance\n- Foreign Exchange Management Act (FEMA)\n- Sectoral regulations\n\n**Tax Implications:**\n\n**Income Tax Considerations:**\n- Capital gains treatment\n- Carry forward of losses\n- Depreciation adjustments\n- Transfer pricing implications\n\n**GST Impact:**\n- Registration transfers\n- Input tax credit transitions\n- Compliance obligations\n\n**Stamp Duty:**\n- Valuation requirements\n- State-specific rates\n- Exemptions available\n\n**Key Success Factors:**\n1. Thorough due diligence\n2. Proper valuation\n3. Regulatory approvals\n4. Stakeholder communication\n5. Integration planning\n\nCorporate restructuring requires careful planning and expert guidance to ensure compliance and optimize outcomes.",
    image: "https://bing.com/th/id/OIP.2ysWKSkZL0NuO6xenUroYAHaE8?r=0&cb=thvnextc2&rs=1&pid=ImgDetMain",
    author: "CA Vinay Khambe",
    date: "2023-12-20",
    category: "Corporate Law",
    readTime: "15 min read",
    views: 650,
  },
  {
    id: 6,
    title: "Financial Planning for Startups: Essential Guidelines",
    excerpt:
      "Navigate the financial challenges of starting a business with these essential planning guidelines. From funding to cash flow management, get expert insights.",
    fullContent:
      "Navigate the financial challenges of starting a business with these essential planning guidelines. From funding to cash flow management, get expert insights.\n\nStarting a business is an exciting journey, but it comes with significant financial challenges. Proper financial planning is crucial for startup success and sustainability.\n\n**Key Financial Planning Areas:**\n\n**1. Business Plan and Financial Projections:**\n- Revenue forecasting\n- Expense budgeting\n- Break-even analysis\n- Scenario planning\n\n**2. Funding Strategy:**\n- Bootstrap vs external funding\n- Angel investors and venture capital\n- Government schemes and grants\n- Bank loans and credit facilities\n\n**3. Cash Flow Management:**\n- Working capital requirements\n- Payment terms optimization\n- Inventory management\n- Accounts receivable control\n\n**4. Legal Structure:**\n- Sole proprietorship vs partnership vs company\n- Tax implications of different structures\n- Compliance requirements\n- Intellectual property protection\n\n**5. Financial Controls:**\n- Accounting system setup\n- Internal controls implementation\n- Regular financial reporting\n- Performance monitoring\n\n**6. Risk Management:**\n- Insurance coverage\n- Contingency planning\n- Diversification strategies\n- Legal compliance\n\n**Common Financial Mistakes to Avoid:**\n- Underestimating startup costs\n- Poor cash flow management\n- Mixing personal and business finances\n- Inadequate record keeping\n- Ignoring tax obligations\n\n**Government Support Schemes:**\n- Startup India initiative\n- MUDRA loans\n- Stand-up India scheme\n- State-specific incentives\n\nWith proper financial planning and professional guidance, startups can navigate challenges and build sustainable businesses.",
    image: "https://businessupside.in/wp-content/uploads/2022/04/Strategies-of-financial-planning-1024x576.jpg",
    author: "CA Vinay Khambe",
    date: "2023-12-15",
    category: "Startup",
    readTime: "11 min read",
    views: 1100,
  },
]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [expandedPosts, setExpandedPosts] = useState<Set<number>>(new Set())
  const postsPerPage = 4

  // Filter posts based on search term
  const filteredPosts = useMemo(() => {
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }, [searchTerm])

  // Get recent posts (latest 3)
  const recentPosts = useMemo(() => {
    return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3)
  }, [])

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const startIndex = (currentPage - 1) * postsPerPage
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage)

  const toggleExpanded = (postId: number) => {
    const newExpanded = new Set(expandedPosts)
    if (newExpanded.has(postId)) {
      newExpanded.delete(postId)
    } else {
      newExpanded.add(postId)
    }
    setExpandedPosts(newExpanded)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
  <>  
    <SEO 
      title='Blog | VP Khambe & Associates'
      description='CA Vinay Khambe provides expert Chartered Accountant services in Pune, offering tax audit, internal audit, statutory audit, GST audit, and more. Book your consultation today!'
      keywords='Chartered Accountant Services in Pune, CA near me, Best CA in Pune, VP Khambe & Associates, CA Vinay Khambe'
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
            <span className="text-blue-600 font-medium">Blog</span>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center" variants={fadeInUp} initial="initial" animate="animate">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-blue-600">Blog</span>
            </h1>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Stay updated with the latest insights, tips, and trends in accounting, taxation, and business management
            </p>

            {/* Search Box */}
            <motion.div
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-slate-300 focus:border-blue-500 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Blog Posts */}
            <motion.div className="space-y-8" variants={staggerContainer} initial="initial" animate="animate">
              <AnimatePresence mode="wait">
                {currentPosts.map((post) => (
                  <motion.div
                    key={post.id}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit={{ opacity: 0, y: -20 }}
                    layout
                  >
                    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="grid md:grid-cols-3 gap-0">
                        <div className="relative h-64 md:h-auto">
                          <Img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge className="bg-blue-600 hover:bg-blue-700">{post.category}</Badge>
                          </div>
                        </div>

                        <div className="md:col-span-2 p-6">
                          <div className="flex items-center space-x-4 text-sm text-slate-500 mb-3">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {formatDate(post.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readTime}
                            </div>
                            <div className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {post.views}
                            </div>
                          </div>

                          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4 hover:text-blue-600 transition-colors cursor-pointer">
                            {post.title}
                          </h2>

                          <div className="text-slate-600 leading-relaxed">
                            {expandedPosts.has(post.id) ? (
                              <div className="space-y-4">
                                {post.fullContent.split("\n\n").map((paragraph, index) => (
                                  <p key={index}>{paragraph}</p>
                                ))}
                              </div>
                            ) : (
                              <p>{post.excerpt}</p>
                            )}
                          </div>

                          <div className="mt-6 text-center">
                            <motion.button
                              onClick={() => toggleExpanded(post.id)}
                              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              animate={{
                                boxShadow: expandedPosts.has(post.id)
                                  ? "0 0 0 0 rgba(59, 130, 246, 0.7)"
                                  : [
                                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                                      "0 0 0 10px rgba(59, 130, 246, 0)",
                                      "0 0 0 0 rgba(59, 130, 246, 0.7)",
                                    ],
                              }}
                              transition={{
                                boxShadow: {
                                  duration: 2,
                                  repeat: expandedPosts.has(post.id) ? 0 : Number.POSITIVE_INFINITY,
                                  repeatType: "loop",
                                },
                              }}
                            >
                              {expandedPosts.has(post.id) ? "Read Less" : "Read More"}
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                className="flex justify-center items-center space-x-2 mt-12"
                variants={fadeInUp}
                initial="initial"
                animate="animate"
              >
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>

                <div className="flex space-x-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                      className="w-10 h-10"
                    >
                      {page}
                    </Button>
                  ))}
                </div>

                <Button
                  variant="outline"
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-8 space-y-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {/* Recent Posts */}
              <motion.div variants={scaleIn}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Posts</h3>
                    <div className="space-y-4">
                      {recentPosts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                          <div className="flex space-x-3">
                            <div className="relative w-16 h-16 flex-shrink-0">
                              <Img
                                src={post.image || "/placeholder.svg"}
                                alt={post.title}
                                
                                className="object-cover rounded-lg"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-sm font-medium text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                                {post.title}
                              </h4>
                              <p className="text-xs text-slate-500 mt-1">{formatDate(post.date)}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Categories */}
              <motion.div variants={scaleIn}>
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Categories</h3>
                    <div className="space-y-2">
                      {Array.from(new Set(blogPosts.map((post) => post.category))).map((category) => (
                        <div
                          key={category}
                          className="flex justify-between items-center py-2 border-b border-slate-100 last:border-b-0"
                        >
                          <span className="text-slate-700 hover:text-blue-600 cursor-pointer transition-colors">
                            {category}
                          </span>
                          <Badge variant="secondary">
                            {blogPosts.filter((post) => post.category === category).length}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Newsletter */}
              <motion.div variants={scaleIn}>
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
                    <p className="text-blue-100 mb-4">Get the latest updates and insights delivered to your inbox.</p>
                    <div className="space-y-3">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                      />
                      <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Subscribe</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
