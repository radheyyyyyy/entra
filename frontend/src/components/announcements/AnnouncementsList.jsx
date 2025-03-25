/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion"
import { announcements, sortOptions, paginationConfig } from "../../data/announcementsData"
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
                        "limit":10
                    }
                })                
                if(page == 1 && lengthRef.current === null)
                {
                    lengthRef.current = data.count 
                    console.log("inside condition"+lengthRef.current);

                }
                console.log(lengthRef.current);
                
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
        {loading && <h4>Loading...</h4>}
        {!loading && announcements.map((announcement, index) => (
          <AnnouncementCard 
            key={announcement.id}
            announcement={announcement}
            index={index}
          />
        ))}
        {!loading && <Pagination cardsPerPage={2}setPage={setPage} length={lengthRef.current}/>}
      </div>
      
    </motion.div>
  )
}

const ListHeader = () => {
  return (
    <motion.div 
      className="flex items-center justify-between"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
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

const Pagination = ({cardsPerPage=10,setPage,length}) => {
  return (
    <motion.div 
      className="flex items-center justify-center space-x-2 pt-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1 }}
    >
      {Array.from({ length: Math.ceil(length/cardsPerPage)  }, (_, i) => i + 1).map((page) => (
        <motion.button
          key={page}
          className={`inline-flex h-9 w-9 items-center justify-center rounded-md ${
            page === paginationConfig.currentPage ? "bg-orange-600 text-white" : "border border-input bg-background text-gray-700"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={(pageNumber)=>{
            setPage(pageNumber)
          }}
        >
          {page}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default AnnouncementsList 