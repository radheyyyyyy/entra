import { motion } from "framer-motion";
import { locations } from "../../data/announcementsData";
import { useState } from "react";
import axios from "axios";
import { FilterCheckBox } from "../common/FilterCheckBox";
import { BACKEND_URL } from "../../../config";

// eslint-disable-next-line react/prop-types
const FiltersSidebar = ({ setAdmissions}) => {
    const [locationFilters, setLocationFilters] = useState([]);
    return (
        <motion.div
            className="w-full md:w-1/4 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            {/* Search Box */}
            <motion.div
                className="rounded-lg border bg-card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}>
                <h3 className="text-lg font-semibold mb-4">Search</h3>
                <div className="relative">
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
                        className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, repeatDelay: 2, duration: 0.8 }}>
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </motion.svg>
                    <input
                        type="search"
                        placeholder="Search admissions..."
                        className="flex h-10 w-full rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                </div>
            </motion.div>

            {/* Filters Box */}
            <motion.div
                className="rounded-lg border bg-card p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}>
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                <div className="space-y-4">
                    {/* Institution Type */}
                    {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h4 className="font-medium mb-2">Entrance Exams</h4>
            <div className="space-y-2">
              {institutionTypes.map((type, index) => (
                <motion.div 
                  key={type} 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 + (index * 0.05) }}
                >
                  <input
                    id={`type-${type}`}
                    type="checkbox"
                    onClick={()=>{
                      if(document.getElementById(`type-${type}`).checked){
                        setFilters([...filters,type.split(" ")[1]])
                      }
                    }}
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                  />
                  <label htmlFor={`type-${type}`} className="text-sm text-gray-700">
                    {type}
                  </label>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

                    {/* Course Level */}
                    {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
          >
            <h4 className="font-medium mb-2">Course Level</h4>
            <div className="space-y-2">
              {courseLevels.map((level, index) => (
                <motion.div 
                  key={level} 
                  className="flex items-center space-x-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 + (index * 0.05) }}
                >
                  <input
                    id={`level-${level}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                  />
                  <label htmlFor={`level-${level}`} className="text-sm text-gray-700">
                    {level}
                  </label>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}>
                        <h4 className="font-medium mb-2">Location</h4>
                        <div className="space-y-2">
                            {locations.map((location, index) => (
                                <FilterCheckBox
                                    key={`location-${location.value}`}
                                    label={location.label}
                                    value={location.value}
                                    index={index}
                                    filters={locationFilters}
                                    setFilters={setLocationFilters}
                                />
                            ))}
                        </div>
                    </motion.div>

                    {/* Apply Filters Button */}
                    <motion.button
                        className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 w-full"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={async () => {
                            console.log(locationFilters)
                            const {data}=await axios.post(`${BACKEND_URL}/admission/filters`,{
                                filter:locationFilters
                            });
                            setAdmissions(...data.data)
                        }}>
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
                            className="mr-2 h-4 w-4"
                            animate={{ rotate: [0, -10, 0, 10, 0] }}
                            transition={{ repeat: Infinity, repeatDelay: 3, duration: 1 }}>
                            <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                        </motion.svg>
                        Apply Filters
                    </motion.button>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default FiltersSidebar;
