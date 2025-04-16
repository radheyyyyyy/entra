import { useState } from "react";
import { motion } from "framer-motion"
/* eslint-disable react/prop-types */
export const Pagination = ({cardsPerPage=10, setPage, length, pageno}) => {
    const totalPages = Math.ceil(length/cardsPerPage);
    const [currentGroup, setCurrentGroup] = useState(Math.floor((pageno - 1) / 5));
  
    const renderPageNumbers = () => {
      const pages = [];
      const startPage = currentGroup * 5 + 1;
      const endPage = Math.min(startPage + 4, totalPages);
  
      if (totalPages <= 5) {
        // Show all pages if total pages are 5 or less
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Show navigation arrows and current group of pages
        if (currentGroup > 0) {
          pages.push('prev');
        }
        
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
        
        if (endPage < totalPages) {
          pages.push('next');
        }
      }
      
      return pages;
    };
  
    return (
      <motion.div 
        className="flex items-center justify-center space-x-2 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        {renderPageNumbers().map((page, index) => (
          <motion.button
            key={index}
            className={`inline-flex h-9 ${
              page === 'prev' || page === 'next' ? 'px-3' : 'w-9'
            } items-center justify-center rounded-md ${
              page === pageno 
                ? "bg-blue-600 text-white hover:bg-blue-700" 
                : "border border-blue-200 bg-white text-blue-600 hover:bg-blue-50"
            } transition-colors duration-200`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (page === 'prev') {
                setCurrentGroup(currentGroup - 1);
                setPage(currentGroup * 5);
              } else if (page === 'next') {
                setCurrentGroup(currentGroup + 1);
                setPage((currentGroup + 1) * 5 + 1);
              } else {
                setPage(page);
              }
            }}
          >
            {page === 'prev' ? '←' : page === 'next' ? '→' : page}
          </motion.button>
        ))}
      </motion.div>
    )
  }