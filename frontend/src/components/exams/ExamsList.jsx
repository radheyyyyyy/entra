/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { sortOptions } from "../../data/examData";
import ExamCard from "./ExamCard";
import axios from "axios";
import { BACKEND_URL } from "../../../config";
const ExamsList = ({ filters }) => {
    const [exams, setExams] = useState(null);
    const [filteredExams, setFilteredExams] = useState(null);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const lengthRef = useRef(null);
    // Apply filters when they change
    useEffect(() => {
        setLoading(true);
        async function fetchExams() {
            const { data } = await axios.get(`${BACKEND_URL}/exams`, {
                params: {
                    page: page,
                    limit: 3,
                },
            });
            if (page == 1 && lengthRef.current === null) {
                lengthRef.current = data.count;
                console.log("inside condition" + lengthRef.current);
            }
            setExams((exams) => [...exams, ...data]);
            setLoading(false)
        }
        // Filter logic
        let results = [...exams];

        if (filters?.category) {
            results = results.filter((exam) => exam.category === filters.category);
        }

        if (filters?.exams && filters.exams.length > 0) {
            results = results.filter((exam) => filters.exams.includes(exam.exam));
        }

        // Simulate network delay
        setTimeout(() => {
            setFilteredExams(results);
            setLoading(false);
        }, 500);
    }, [filters, exams]);

    return (
        <motion.div
            className="w-full md:w-3/4 space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <ListHeader examCount={filteredExams.length} />

            <div className="space-y-4">
                {loading ? (
                    <LoadingState />
                ) : filteredExams.length > 0 ? (
                    filteredExams.map((exam, index) => <ExamCard key={exam.id} announcement={exam} index={index} />)
                ) : (
                    <NoResultsState />
                )}
            </div>
        </motion.div>
    );
};

const ListHeader = ({ examCount }) => {
    return (
        <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <h2 className="text-2xl font-bold">
                Exam Announcements{" "}
                {examCount > 0 && <span className="text-base font-normal text-gray-500">({examCount})</span>}
            </h2>
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

const LoadingState = () => (
    <div>
        <div role="status" className="mb-6 max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="mb-6 max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
        <div role="status" className="mb-6 max-w-sm animate-pulse">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

const NoResultsState = () => (
    <motion.div
        className="text-center py-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}>
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
            className="mx-auto h-12 w-12 text-gray-400">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" x2="12" y1="8" y2="12"></line>
            <line x1="12" x2="12.01" y1="16" y2="16"></line>
        </svg>
        <h3 className="mt-2 text-sm font-semibold text-gray-900">No exam announcements found</h3>
        <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
    </motion.div>
);


export default ExamsList;
