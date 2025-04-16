import Header from "../components/Header";
import Footer from "../components/Footer";
// Import new components
import HeroSection from "../components/admissions/HeroSection";
import AdmissionsList from "../components/admissions/AdmissionList";
import { createContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Pagination } from "../components/common/Pagination";
import FiltersSidebar from "../components/admissions/FiltersSidebar";
import { BACKEND_URL } from "../../config";
export const pageContext = createContext();
function AdmissionsPage() {
    let [admissions, setAdmissions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const lengthRef = useRef(null);
    const cardsPerPage = 8;
    const [locationFilters, setLocationFilters] = useState([]);
    useEffect(() => {
        async function getFilteredLocationData() {
            console.log(page);
            
            const { data } = await axios.get(`${BACKEND_URL}/admissions`, {
                params: {
                    filters: [...locationFilters],
                    limit: cardsPerPage,
                    page: page,
                },
            });
            // console.log(data.msg);
            setAdmissions(data.msg);
        }
        getFilteredLocationData();
    }, [locationFilters, page]);
    useEffect(() => {
        async function getAnnouncements() {
            try {
                const { data } = await axios.get(`${BACKEND_URL}/admissions`, {
                    params: {
                        page: page,
                        limit: cardsPerPage,
                    },
                });
                if (page == 1 && lengthRef.current === null) {
                    lengthRef.current = data.count;
                    console.log("inside condition" + lengthRef.current);
                }
                setAdmissions(data.msg);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
            }
        }
        getAnnouncements();
    }, [loading, page]);
    console.log(admissions)
    return (
        <pageContext.Provider value={{ page, setPage }}>
            <div className="flex flex-col min-h-screen font-sans">
                <Header />
                <main className="flex-1">
                    <HeroSection />
                    <section className="w-full py-8">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <FiltersSidebar filters={locationFilters} setFilters={setLocationFilters}/>
                                <div className="w-full md:w-3/4 flex flex-col">
                                    {loading && (
                                        <div>
                                            {Array.from([1, 2, 3, 4, 5, 6], (el) => {
                                                return (
                                                    <div
                                                        key={el}
                                                        role="status"
                                                        className="mb-10 max-w-sm animate-pulse">
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
                                            <AdmissionsList admissions={admissions} />
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
        </pageContext.Provider>
    );
}

export default AdmissionsPage;
