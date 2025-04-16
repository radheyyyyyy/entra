/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { sortOptions } from "../../data/announcementsData";
import AdmissionCard from "./AdmissionCard";
const AdmissionList = ({ admissions }) => {
    return (
        <motion.div
            className="w-full md:w-3/4 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <ListHeader />
            <div className="space-y-4">
                {admissions.map((admission, index) => (
                    <AdmissionCard key={admission.id} admission={admission} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

const ListHeader = () => {
    return (
        <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-bold">Latest admissions</h2>
            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">Sort by:</span>
                <select className="flex h-9 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </motion.div>
    );
};

export default AdmissionList;
