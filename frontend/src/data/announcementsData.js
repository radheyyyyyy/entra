export const institutionTypes = [
  "IITs",
  "NITs", 
  "IIMs",
  "Medical Colleges",
  "Universities"
]

export const courseLevels = [
  "Undergraduate",
  "Postgraduate", 
  "Doctoral",
  "Diploma",
  "Certificate"
]

export const locations = [
  { value: "", label: "All Locations" },
  { value: "delhi", label: "Delhi" },
  { value: "mumbai", label: "Mumbai" },
  { value: "bangalore", label: "Bangalore" },
  { value: "chennai", label: "Chennai" },
  { value: "kolkata", label: "Kolkata" },
  { value: "hyderabad", label: "Hyderabad" },
  { value: "pune", label: "Pune" }
]

export const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "relevance", label: "Relevance" }
]

export const announcements = [
  {
    id: 1,
    title: "IIT Delhi B.Tech Admissions 2024-25",
    description: "Applications are now open for B.Tech programs at IIT Delhi for the academic year 2024-25. Eligible candidates can apply through the JEE Advanced portal.",
    date: "May 15, 2024",
    tag: "Engineering",
    link: "/announcements/1"
  },
  {
    id: 2,
    title: "Delhi University UG Admission Schedule Released",
    description: "Delhi University has released the undergraduate admission schedule for the academic session 2024-25. Registration begins on June 1, 2024.",
    date: "May 12, 2024",
    tag: "University",
    link: "/announcements/2"
  },
  {
    id: 3,
    title: "AIIMS MBBS Entrance Exam Notification",
    description: "All India Institute of Medical Sciences has announced the dates for MBBS entrance examination for the academic year 2024-25.",
    date: "May 10, 2024",
    tag: "Medical",
    link: "/announcements/3"
  },
  {
    id: 4,
    title: "IIM Ahmedabad MBA Admissions 2024",
    description: "Indian Institute of Management, Ahmedabad has started the application process for MBA programs. Candidates with valid CAT scores can apply.",
    date: "May 8, 2024",
    tag: "Management",
    link: "/announcements/4"
  },
  {
    id: 5,
    title: "NIT Trichy B.Tech Admission Through JoSAA",
    description: "National Institute of Technology, Trichy announces B.Tech admissions through Joint Seat Allocation Authority (JoSAA) for the academic year 2024-25.",
    date: "May 5, 2024",
    tag: "Engineering",
    link: "/announcements/5"
  },
  {
    id: 6,
    title: "Jamia Millia Islamia Entrance Test Schedule",
    description: "Jamia Millia Islamia University has released the entrance test schedule for various undergraduate and postgraduate programs.",
    date: "May 3, 2024",
    tag: "University",
    link: "/announcements/6"
  },
  {
    id: 7,
    title: "NEET UG 2024 Admit Cards Released",
    description: "National Testing Agency has released the admit cards for NEET UG 2024. Candidates can download their admit cards from the official website.",
    date: "May 1, 2024",
    tag: "Medical",
    link: "/announcements/7"
  }
]

export const heroContent = {
  title: "Admission Announcements",
  description: "Stay updated with the latest admission notifications from top educational institutions across India."
}

export const paginationConfig = {
  totalPages: 5,
  currentPage: 1
} 