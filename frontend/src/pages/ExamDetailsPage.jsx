import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ExamHeroSection from "../components/exams/ExamHeroSection"
import ExamFiltersSidebar from "../components/exams/ExamFiltersSidebar"
import ExamsList from "../components/exams/ExamsList"

function ExamDetailsPage() {
  const [filters, setFilters] = useState({
    category: null,
    exams: []
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        <ExamHeroSection />
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              <ExamFiltersSidebar onFilterChange={handleFilterChange} />
              <ExamsList filters={filters} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ExamDetailsPage 