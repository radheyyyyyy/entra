/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import {sortOptions, paginationConfig } from "../../data/announcementsData"
import AnnouncementCard from "./AnnouncementCard"
import { useEffect, useRef, useState } from "react"
import axios from "axios"
const AnnouncementsList = () => {
  const [announcements,setAnnouncements] = useState([])
  const [loading,setLoading] = useState(true)
  const [page,setPage] = useState(1)
  const lengthRef = useRef(null)
  useEffect(()=>{
        async function getAnnouncements(){
            try {
                const {data} = await axios.get("http://localhost:3000/announcements",{
                    params:{
                        "page":page,
                        "limit":3
                    }
                })                
                if(page == 1 && lengthRef.current === null)
                {
                    lengthRef.current = data.count 
                    console.log("inside condition"+lengthRef.current);
                }                
                setAnnouncements(data.msg)    
                setLoading(false)                             
            } catch (error) {
                console.log(error.message);
                
            }
        }
        getAnnouncements()
  },[loading,page])
  return (
    <motion.div 
      className="w-full md:w-3/4 space-y-6"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <ListHeader />
      <div className="space-y-4">
        {loading &&
            <div>
                <div role="status" className="mb-10 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="mb-10 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="mb-10 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="mb-10 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[400] mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="mb-10 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="mb-10 max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        }
          {!loading && announcements.map((announcement, index) => (
              <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                  index={index}
              />
          ))}
          {!loading && <Pagination cardsPerPage={3} setPage={setPage} length={lengthRef.current} pageno={page}/>}
      </div>

    </motion.div>
  )
}

const ListHeader = () => {
    return (
        <motion.div
            className="flex items-center justify-between"
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.4}}
        >
            <h2 className="text-2xl font-bold">Latest Announcements</h2>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Sort by:</span>
        <select className="flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
          {sortOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  )
}

const Pagination = ({cardsPerPage=10, setPage, length, pageno}) => {
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

export default AnnouncementsList 