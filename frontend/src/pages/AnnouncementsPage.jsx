import Header from "../components/Header"
import Footer from "../components/Footer"
// Import new components
import HeroSection from "../components/announcements/HeroSection"
import FiltersSidebar from "../components/announcements/FiltersSidebar"
import AnnouncementsList from "../components/announcements/AnnouncementsList"

function AnnouncementsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <section className="w-full py-8">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-6">
              <FiltersSidebar />
              <AnnouncementsList />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default AnnouncementsPage

