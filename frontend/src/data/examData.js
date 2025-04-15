export const examCategories = [
  {
    id: "postgraduate",
    label: "Postgraduate",
    exams: ["GATE", "CAT", "GPAT", "NEET PG"]
  },
  {
    id: "undergraduate",
    label: "Undergraduate",
    exams: ["GUJCET", "NEET", "JEE"]
  }
];

export const sortOptions = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "upcoming", label: "Upcoming Exams" }
];

export const heroContent = {
  title: "Exam Announcements",
  description: "Stay updated with the latest exam notifications and important updates."
};

// Sample data for testing
export const sampleExamAnnouncements = [
  {
    id: 1,
    title: "GATE 2024 Registration Deadline Extended",
    category: "postgraduate",
    exam: "GATE",
    date: "2023-12-15",
    description: "The registration deadline for GATE 2024 has been extended to December 30, 2023.",
    link: "/exam-details/1"
  },
  {
    id: 2,
    title: "CAT 2024 Application Process to Start Soon",
    category: "postgraduate",
    exam: "CAT",
    date: "2023-11-20",
    description: "IIM Bangalore to conduct CAT 2024. Applications expected to open in August 2024.",
    link: "/exam-details/2"
  },
  {
    id: 3,
    title: "NEET PG 2024 Exam Date Announced",
    category: "postgraduate",
    exam: "NEET PG",
    date: "2023-12-05",
    description: "National Board of Examinations announces NEET PG 2024 to be held on March 15, 2024.",
    link: "/exam-details/3"
  },
  {
    id: 4,
    title: "JEE Main 2024 Registration Now Open",
    category: "undergraduate",
    exam: "JEE",
    date: "2023-12-10",
    description: "NTA has opened the registration portal for JEE Main 2024 January session.",
    link: "/exam-details/4"
  },
  {
    id: 5,
    title: "NEET UG 2024 Information Brochure Released",
    category: "undergraduate",
    exam: "NEET",
    date: "2023-11-30",
    description: "NTA releases information brochure for NEET UG 2024 with important exam dates.",
    link: "/exam-details/5"
  },
  {
    id: 6,
    title: "GUJCET 2024 Registration to Begin in January",
    category: "undergraduate",
    exam: "GUJCET",
    date: "2023-12-01",
    description: "Gujarat Secondary and Higher Secondary Education Board announces GUJCET 2024 registration to begin in January.",
    link: "/exam-details/6"
  }
]; 