import { motion } from "framer-motion";
import Header from "../Header";
import Footer from "../Footer";
import NavigationSidebar from "../common/NavigationSidebar";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { getExamBySlug } from "../../data/examsData";
import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../../config";
const ExamDetailsPage = () => {
    const { name } = useParams();
    const [announcements, setAnnouncements] = useState([]);
    const data = getExamBySlug(name);
    useEffect(() => {
        async function getAnnouncements() {
            const { data } = await axios.get(`${BACKEND_URL}/announcements/filters`, {
                params: {
                    filter: name,
                },
            });
            console.log(data);

            setAnnouncements(data.data);
        }
        getAnnouncements();
    }, [name]);
    return (
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex-1">
                <section className="bg-blue-50 py-12">
                    <div className="container px-4 md:px-6 mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{data.name}</h1>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                {data.description || "Latest information, updates, and resources for the exam."}
                            </p>
                        </motion.div>
                    </div>
                </section>

                <section className="w-full py-8">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col md:flex-row gap-6">
                            <NavigationSidebar activeExam={name.toLowerCase().replace(/\s+/g, "-")} />

                            <div className="w-full md:w-3/4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="bg-white rounded-lg shadow p-6">
                                    {/* Exam Overview Section */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Overview</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-gray-800 mb-2">Conducting Body</h3>
                                                <p>{data.conductingBody || "Information not available"}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-gray-800 mb-2">Exam Level</h3>
                                                <p>{data.level || "National Level"}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-gray-800 mb-2">Mode of Exam</h3>
                                                <p>{data.mode || "Computer Based Test (CBT)"}</p>
                                            </div>
                                            <div className="bg-gray-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-gray-800 mb-2">Exam Frequency</h3>
                                                <p>{data.frequency || "Once a year"}</p>
                                            </div>
                                        </div>
                                        <p className="text-gray-600">
                                            {data.overview ||
                                                "The exam is designed to test candidates on their knowledge and skills in the subject areas. It serves as an entrance examination for admission to various colleges and institutions."}
                                        </p>
                                    </div>

                                    {/* Important Dates Section */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Dates</h2>
                                        <div className="overflow-x-auto">
                                            <table className="min-w-full bg-white border border-gray-200">
                                                <thead>
                                                    <tr className="bg-gray-100">
                                                        <th className="py-3 px-4 text-left border-b">Event</th>
                                                        <th className="py-3 px-4 text-left border-b">Date</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {data.importantDates ? (
                                                        data.importantDates.map((date, index) => (
                                                            <tr
                                                                key={index}
                                                                className={index % 2 === 0 ? "bg-gray-50" : ""}>
                                                                <td className="py-3 px-4 border-b">{date.event}</td>
                                                                <td className="py-3 px-4 border-b">{date.date}</td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td className="py-3 px-4 border-b" colSpan="2">
                                                                Dates will be announced soon
                                                            </td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    {/* Eligibility Section */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            {data.eligibility ? (
                                                <ul className="list-disc list-inside space-y-2">
                                                    {data.eligibility.map((criterion, index) => (
                                                        <li key={index} className="text-gray-700">
                                                            {criterion}
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <p className="text-gray-600">
                                                    Please refer to the official website for detailed eligibility
                                                    criteria.
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Exam Pattern Section */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Pattern</h2>
                                        {data.pattern ? (
                                            <div className="space-y-4">
                                                {data.pattern.map((section, index) => (
                                                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                                                        <h3 className="font-semibold text-gray-800 mb-2">
                                                            {section.name}
                                                        </h3>
                                                        <p className="text-gray-600">{section.description}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="text-gray-600">
                                                Information about the exam pattern will be updated soon. Please check
                                                the official website for the latest details.
                                            </p>
                                        )}
                                    </div>

                                    {/* Resources Section */}
                                    <div className="mb-8">
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-blue-700 mb-2">Official Website</h3>
                                                <a
                                                    href={data.officialWebsite || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline">
                                                    {data.officialWebsite || "Visit the official website"}
                                                </a>
                                            </div>
                                            <div className="bg-blue-50 p-4 rounded-lg">
                                                <h3 className="font-semibold text-blue-700 mb-2">Syllabus</h3>
                                                <a
                                                    href={data.syllabus || "#"}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline">
                                                    Download Syllabus
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Latest Announcements Section */}
                                    <div>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest Announcements</h2>
                                        <div className="space-y-4">
                                            {announcements.map((announcement, ind) => {
                                                return (
                                                    <div
                                                        className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                                                        key={ind}>
                                                        <div className="flex justify-between items-start">
                                                            <h3 className="font-semibold text-gray-800">
                                                                {announcement.title}
                                                            </h3>
                                                        </div>
                                                        <div className="flex justify-between items-center mt-3">
                                                            <span className="text-xs text-gray-500">
                                                                {new Date(announcement.date).toLocaleString("en-US", {
                                                                    year: "numeric",
                                                                    month: "long",
                                                                    day: "numeric",
                                                                })}
                                                            </span>
                                                            <a
                                                                href={announcement.link}
                                                                className="text-blue-600 hover:underline text-sm font-medium">
                                                                Link
                                                            </a>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-4 text-center">
                                            <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-700 bg-blue-50 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                                <Link to={"/exams"}>View All Announcements</Link>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="ml-1 h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M9 5l7 7-7 7"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

ExamDetailsPage.propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.shape({
        description: PropTypes.string,
        conductingBody: PropTypes.string,
        level: PropTypes.string,
        mode: PropTypes.string,
        frequency: PropTypes.string,
        overview: PropTypes.string,
        importantDates: PropTypes.arrayOf(
            PropTypes.shape({
                event: PropTypes.string,
                date: PropTypes.string,
            })
        ),
        eligibility: PropTypes.arrayOf(PropTypes.string),
        pattern: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                description: PropTypes.string,
            })
        ),
        officialWebsite: PropTypes.string,
        syllabus: PropTypes.string,
    }),
};

ExamDetailsPage.defaultProps = {
    data: {},
};

export default ExamDetailsPage;
