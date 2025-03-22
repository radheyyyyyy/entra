import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      })
    }, 1500)
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-orange-50 to-white">
          <div className="w-full max-w-full px-4 md:px-6">
            <motion.div 
              className="mx-auto max-w-3xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.h1 
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Contact Us
              </motion.h1>
              <motion.p 
                className="mt-4 text-gray-500 md:text-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Have questions about admissions? We&apos;re here to help you navigate the admission process.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="w-full py-12 md:py-24">
          <div className="w-full max-w-full px-4 md:px-6">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              {/* Contact Information */}
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div>
                  <h2 className="text-2xl font-bold">Get in Touch</h2>
                  <p className="mt-2 text-gray-500">
                    Our dedicated support team is available to answer your queries about admission requirements,
                    deadlines, or application procedures.
                  </p>
                </div>

                <div className="space-y-4">
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="rounded-full bg-orange-100 p-3">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-orange-600"
                        animate={{ rotate: [0, 10, 0, -10, 0] }}
                        transition={{ repeat: Infinity, repeatDelay: 4, duration: 1 }}
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-500">+91 123 456 7890</p>
                      <p className="text-gray-500">Mon-Fri, 9:00 AM - 6:00 PM</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <div className="rounded-full bg-green-100 p-3">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-green-600"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-500">support@admissionportal.com</p>
                      <p className="text-gray-500">info@admissionportal.com</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="rounded-full bg-blue-100 p-3">
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-blue-600"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </motion.svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Office Address</h3>
                      <p className="text-gray-500">123 Education Street, Knowledge Park</p>
                      <p className="text-gray-500">New Delhi, 110001, India</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex gap-4">
                    <motion.a 
                      href="#" 
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                      whileHover={{ y: -5, backgroundColor: "#e2e8f0" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                      whileHover={{ y: -5, backgroundColor: "#e2e8f0" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                      whileHover={{ y: -5, backgroundColor: "#e2e8f0" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      className="rounded-full bg-gray-100 p-3 hover:bg-gray-200"
                      whileHover={{ y: -5, backgroundColor: "#e2e8f0" }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect width="4" height="12" x="2" y="9"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                className="rounded-lg border bg-white p-6 shadow-sm"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {submitSuccess ? (
                  <motion.div 
                    className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="rounded-full bg-green-100 p-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8 text-green-600"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </motion.div>
                    <motion.h3 
                      className="text-xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      Thank You!
                    </motion.h3>
                    <motion.p 
                      className="text-gray-500"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      Your message has been received. We&apos;ll get back to you shortly.
                    </motion.p>
                    <motion.button
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.h2 
                      className="text-2xl font-bold"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      Send Us a Message
                    </motion.h2>
                    <motion.p 
                      className="text-gray-500 mb-6"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1, duration: 0.4 }}
                    >
                      Fill out the form below and we&apos;ll get back to you as soon as possible.
                    </motion.p>
                    
                    <div className="grid gap-4 sm:grid-cols-2">
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <label htmlFor="name" className="text-sm font-medium leading-none">
                          Full Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Your name"
                        />
                      </motion.div>
                      <motion.div 
                        className="space-y-2"
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                      >
                        <label htmlFor="email" className="text-sm font-medium leading-none">
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Your email"
                        />
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                    >
                      <label htmlFor="subject" className="text-sm font-medium leading-none">
                        Subject
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="What is this regarding?"
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <label htmlFor="message" className="text-sm font-medium leading-none">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full rounded-md border border-gray-300 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                        placeholder="Your message"
                      ></textarea>
                    </motion.div>
                    
                    {error && (
                      <motion.div 
                        className="rounded-md bg-red-50 p-3 text-sm text-red-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {error}
                      </motion.div>
                    )}
                    
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex h-10 items-center justify-center rounded-md bg-orange-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-orange-700 focus-visible:outline-none focus-visible:ring-1 disabled:opacity-70"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="w-full max-w-full px-4 md:px-6">
            <div className="mx-auto max-w-6xl">
              <motion.h2 
                className="text-2xl font-bold mb-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Find Us
              </motion.h2>
              <motion.div 
                className="aspect-video overflow-hidden rounded-lg shadow-md"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src="https://maps.googleapis.com/maps/api/staticmap?center=New+Delhi,India&zoom=14&size=1200x600&key=demo&style=feature:road|element:geometry|color:0x00ff00&style=feature:landscape|element:geometry.fill|color:0xf5f5f5&style=feature:water|element:geometry.fill|color:0xb3d1ff"
                  alt="Office Location Map"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="w-full max-w-full px-4 md:px-6">
            <motion.div 
              className="mx-auto flex max-w-3xl flex-col items-center justify-center space-y-4 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Have Admission Related Questions?
              </h2>
              <p className="text-white/90 md:text-xl/relaxed">
                Our team of experts is ready to guide you through the admission process.
              </p>
              <motion.div 
                className="flex flex-col gap-2 min-[400px]:flex-row"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/announcements"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white text-orange-600 px-8 text-sm font-medium shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Browse FAQs
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    to="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-white bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1"
                  >
                    Register for Updates
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage 