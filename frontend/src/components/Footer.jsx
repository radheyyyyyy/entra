import { Link } from "react-router-dom"
import { motion } from "framer-motion"

function Footer() {
  return (
    <motion.footer 
      className="w-full border-t bg-background py-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-full flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <Link to="/">
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
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
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, repeatDelay: 5, duration: 1 }}
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </motion.svg>
            <span className="text-lg font-semibold">Entra</span>
          </motion.div>
        </Link>
        <motion.p 
          className="text-center text-sm text-gray-500 md:text-left"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          © {new Date().getFullYear()} Entra. All rights reserved.
        </motion.p>
        <div className="flex gap-4">
          {[
            { to: "/terms", label: "Terms" },
            { to: "/privacy", label: "Privacy" },
            { to: "/contact", label: "Contact" }
          ].map((link, index) => (
            <motion.div
              key={link.to}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (index * 0.1), duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              <Link to={link.to} className="text-sm text-gray-500 hover:underline">
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

