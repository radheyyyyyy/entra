/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
export const FilterCheckBox = ({ onChange, label, value, index, filters, setFilters }) => {
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        if (checked) {
            // console.log("Filter when checked "+filters);
            // const arr = [...filters, value]
            setFilters((filters) => [...filters, value]);
        } else {
            // console.log("Filter "+filters);
            const arr = filters.filter((el) => el != value);
            // console.log("Array "+arr);

            setFilters(arr);
        }
    }, [checked]);
    return (
        <>
            <motion.div
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.7 + index * 0.05 }}>
                <input
                    onChange={() => {
                        setChecked(!checked);
                    }}
                    id={`${label}`}
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-600"
                />
                <label htmlFor={`${value}`} className="text-sm text-gray-700">
                    {label}
                </label>
            </motion.div>
        </>
    );
};
