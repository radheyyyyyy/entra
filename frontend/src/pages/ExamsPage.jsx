/* eslint-disable no-unused-vars */
import Header from "../components/Header";
import Footer from "../components/Footer";
// Import exam components
import ExamHeroSection from "../components/exams/ExamHeroSection";
import ExamsList from "../components/exams/ExamsList";
import ExamFiltersSidebar from "../components/exams/ExamFiltersSidebar";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Pagination } from "../components/common/Pagination";
import NavigationSidebar from "../components/common/NavigationSidebar";
import { BACKEND_URL } from "../../config";

function ExamsPage() {
    const [exams,setExams] = useState([])
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const lengthRef = useRef(null);
    const cardsPerPage = 8;
    
    useEffect(() => {
        async function getExamsAnnouncements() {
            try {
                const { data } = await axios.get("http://localhost:3000/announcements", {
                    params: {
                        page: page,
                        limit: cardsPerPage,
                    },
                });
                if (page == 1 && lengthRef.current === null) {
                    lengthRef.current = data.count;
                    console.log("inside condition" + lengthRef.current);
                }
                setExams(data.msg);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }
        getExamsAnnouncements();
    }, [loading, page]);

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-1">
                <ExamHeroSection />
                <section className="w-full py-8">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <NavigationSidebar/>
                            <div className="w-full md:w-3/4 flex flex-col">
                                {loading && (
                                    <div>
                                        {Array.from([1, 2, 3, 4, 5, 6], (el) => {
                                            return (
                                                <div key={el} role="status" className="mb-10 max-w-sm animate-pulse">
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[600px] mb-4"></div>
                                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 max-w-[100px]"></div>
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                                {!loading && (
                                    <>
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <ExamsList exams={exams} />
                                        </div>
                                        <div className="mt-8 w-full md:w-3/4">
                                            <Pagination
                                                cardsPerPage={cardsPerPage}
                                                setPage={setPage}
                                                length={lengthRef.current}
                                                pageno={page}
                                            />
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default ExamsPage; 