// Static data for exam details

let jeeDates = [
    {
        event: "JEE (Main) 2025 [Computer Based Tests by NTA]",
        date: "JEE (Main) 2025 website",
    },
    {
        event: "Results of JEE (Main) 2025 by NTA",
        date: "JEE (Main) 2025 website",
    },
    {
        event: "Online Direct Registration for JEE (Advanced) 2025 for Foreign National Candidates and OCI/PIO (F) Candidates",
        date: "Monday, April 07, 2025 (10:00 IST)  to Friday, May 02, 2025 (23:59 IST)",
    },
    {
        event: "Online Registration for JEE (Advanced) 2025 for JEE Main 2025 Qualified Candidates",
        date: "Wednesday, April 23, 2025 (10:00 IST)  to Friday, May 02, 2025 (23:59 IST)",
    },
    {
        event: "Last date for fee payment of registered candidates",
        date: "Monday, May 05, 2025 (23:59 IST)",
    },
    {
        event: "Admit Card available for downloading",
        date: "Sunday, May 11, 2025 (10:00 IST)  to  Sunday, May 18, 2025 (14:30 IST)",
    },
    {
        event: "Choosing of scribe by PwD candidates /  candidates with less than 40% disability and having difficulty in writing",
        date: "Saturday, May 17, 2025",
    },
    {
        event: "JEE (Advanced) 2025 Examination",
        date: "Sunday, May 18, 2025  Paper 1: 09:00-12:00 IST Paper 2: 14:30-17:30 IST",
    },
    {
        event: "Copy of candidate responses to be available on the JEE (Advanced) 2025 website",
        date: "Thursday, May 22, 2025 (17:00 IST)",
    },
    {
        event: "Online display of provisional answer keys",
        date: "Monday, May 26, 2025 (10:00 IST)",
    },
    {
        event: "Feedback and comments on provisional answer keys",
        date: "Monday, May 26, 2025 (10:00 IST)  to  Tuesday, May 27, 2025 (17:00 IST)",
    },
    {
        event: "Online declaration of final answer key and Results of JEE (Advanced) 2025",
        date: "Monday, June 02, 2025 (10:00 IST)",
    },
    {
        event: "Online registration for Architecture Aptitude Test (AAT) 2025",
        date: "Monday, June 02, 2025 (10:00 IST)  to  Tuesday, June 03, 2025 (17:00 IST)",
    },
    {
        event: "Tentative Start of Joint Seat Allocation (JoSAA) 2025 Process",
        date: "Tuesday, June 03, 2025 (17:00 IST)",
    },
    {
        event: "Architecture Aptitude Test (AAT) 2025",
        date: "Thursday, June 05, 2025  (09:00 IST to 12:00 IST)",
    },
    {
        event: "Declaration of results of AAT 2025",
        date: "Sunday, June 08, 2025 (17:00 IST)",
    },
];

export const examsData = {
    "jee-main": {
        name: "JEE Main",
        description:
            "Joint Entrance Examination for undergraduate engineering programs across India. Known for its competitive nature, JEE Main is taken by over 10 lakh students annually and serves as the gateway to prestigious institutions like NITs, IIITs, and GFTIs. The exam tests students on Physics, Chemistry, and Mathematics with advanced problem-solving skills.",
        conductingBody: "National Testing Agency (NTA)",
        level: "National Level",
        mode: "Computer Based Test (CBT)",
        frequency: "Twice a year",
        overview:
            "JEE Main is the first stage of the two-tier Joint Entrance Examination system and one of India's most challenging undergraduate entrance exams. It opens doors to NITs, IIITs, and other CFTIs across the country. Top 2,50,000 candidates qualify for JEE Advanced, which is the entrance test for IITs. The exam features multiple-choice questions and numerical value questions designed to test conceptual understanding and analytical skills. With percentile-based scoring, it effectively ranks students nationally.",
        importantDates: jeeDates,
        eligibility: [
            "Candidates should have passed 10+2 or equivalent examination from a recognized board.",
            "Students appearing for 10+2 in the current academic year can also apply.",
            "There is no age limit for JEE Main.",
        ],
        pattern: [
            {
                name: "Paper 1 (B.E./B.Tech)",
                description:
                    "Three sections: Physics, Chemistry, and Mathematics. Total marks: 300. Duration: 3 hours.",
            },
            {
                name: "Paper 2A (B.Arch)",
                description:
                    "Three sections: Mathematics, Aptitude Test, and Drawing. Total marks: 400. Duration: 3 hours.",
            },
            {
                name: "Paper 2B (B.Planning)",
                description:
                    "Three sections: Mathematics, Aptitude Test, and Planning Based Questions. Total marks: 400. Duration: 3 hours.",
            },
        ],
        officialWebsite: "https://jeemain.nta.nic.in/",
    },

    gate: {
        name: "GATE",
        description:
            "Graduate Aptitude Test in Engineering for postgraduate admissions in engineering and science disciplines. GATE scores are used not only for academic admissions but also for recruitment in PSUs and research positions. The exam tests in-depth knowledge of undergraduate engineering subjects and analytical thinking abilities.",
        conductingBody: "IIT Bombay (for 2024)",
        level: "National Level",
        mode: "Computer Based Test (CBT)",
        frequency: "Once a year",
        overview:
            "GATE is a rigorous national-level examination that assesses comprehensive understanding of undergraduate subjects in engineering and science. Beyond its primary role for M.Tech/MS/direct PhD admissions in IITs, IISc, and other prestigious institutions, GATE scores are accepted by international universities and serve as hiring criteria for numerous Public Sector Undertakings. The exam emphasizes conceptual clarity, analytical skills, and problem-solving capabilities. Scoring is normalized across multiple sessions using advanced statistical methods to ensure fairness for all candidates.",
        importantDates: [
            { event: "Application Form Release", date: "August 2023" },
            { event: "Last Date to Apply", date: "October 2023" },
            { event: "Exam Date", date: "February 2024" },
            { event: "Result Declaration", date: "March 2024" },
        ],
        eligibility: [
            "Bachelor's degree holders in Engineering/Technology/Architecture (4 years after 10+2) or equivalent.",
            "Master's degree holders in any branch of Science/Mathematics/Statistics/Computer Applications or equivalent.",
            "Candidates in the final year of such programs can also apply.",
        ],
        pattern: [
            {
                name: "General Aptitude (GA)",
                description: "15 marks (10% of total marks). Consists of verbal ability and numerical ability.",
            },
            {
                name: "Subject-specific section",
                description: "85 marks (90% of total marks). Questions based on the chosen GATE paper code.",
            },
        ],
        officialWebsite: "https://gate.iitb.ac.in/",
        syllabus: "#",
    },

    "neet-ug": {
        name: "NEET UG",
        description:
            "National Eligibility cum Entrance Test for undergraduate medical and dental programs is India's single largest medical entrance examination. It determines admissions to all medical and dental colleges nationwide, including AIIMS and JIPMER institutions, unifying the medical entrance system under a single standardized test.",
        conductingBody: "National Testing Agency (NTA)",
        level: "National Level",
        mode: "Pen and Paper Test",
        frequency: "Once a year",
        overview:
            "NEET UG stands as the singular, comprehensive medical entrance examination for MBBS, BDS, AYUSH, Veterinary, and other medical/paramedical courses across India. With over 15 lakh candidates appearing annually, it's among the world's largest entrance exams. The test evaluates in-depth knowledge of Physics, Chemistry, and Biology at the 10+2 level. Recent policy changes have eliminated upper age limits and attempt restrictions, making it more accessible. NEET UG scores now determine admissions to all 542 medical, 313 dental, and numerous AYUSH colleges in India, including previously autonomous institutions like AIIMS and JIPMER.",
        importantDates: [
            { event: "Application Form Release", date: "February 2024" },
            { event: "Last Date to Apply", date: "March 2024" },
            { event: "Exam Date", date: "May 2024" },
            { event: "Result Declaration", date: "June 2024" },
        ],
        eligibility: [
            "Candidates should have passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology with minimum 50% marks (40% for reserved categories).",
            "Minimum age requirement is 17 years as on December 31 of the admission year.",
            "There is no upper age limit.",
        ],
        pattern: [
            {
                name: "Physics",
                description: "45 questions for a total of 180 marks.",
            },
            {
                name: "Chemistry",
                description: "45 questions for a total of 180 marks.",
            },
            {
                name: "Biology (Botany & Zoology)",
                description: "90 questions for a total of 360 marks.",
            },
        ],
        officialWebsite: "https://neet.nta.nic.in/",
        syllabus: "#",
    },

    cat: {
        name: "CAT",
        description:
            "Common Admission Test is the premier MBA entrance examination in India conducted by the prestigious Indian Institutes of Management (IIMs). Beyond IIMs, over 1,200 B-schools across India accept CAT scores, making it the most significant management aptitude test in the country with approximately 2.3 lakh candidates appearing annually.",
        conductingBody: "Indian Institutes of Management (IIMs)",
        level: "National Level",
        mode: "Computer Based Test (CBT)",
        frequency: "Once a year",
        overview:
            "CAT is not merely a prerequisite for IIM admissions but a comprehensive assessment of management aptitude that tests verbal ability, reading comprehension, data interpretation, logical reasoning, and quantitative skills. The exam is known for its dynamic pattern and challenging difficulty level, with percentile-based scoring that ranks candidates nationally. The non-MCQ questions with no negative marking and section-wise time limits add to its distinctive character. Success in CAT opens doors to India's elite business schools including all 20 IIMs, FMS Delhi, MDI Gurgaon, SPJIMR Mumbai, and numerous other top-tier institutions.",
        importantDates: [
            { event: "Registration Begins", date: "August 2024" },
            { event: "Registration Ends", date: "September 2024" },
            { event: "Admit Card Release", date: "October 2024" },
            { event: "Exam Date", date: "November 2024" },
            { event: "Result Declaration", date: "January 2025" },
        ],
        eligibility: [
            "Bachelor's degree with at least 50% marks or equivalent CGPA (45% for SC/ST/PwD candidates).",
            "Final year bachelor's degree students can also apply.",
            "There is no specific age limit for appearing in CAT.",
        ],
        pattern: [
            {
                name: "Verbal Ability and Reading Comprehension (VARC)",
                description: "24-26 questions. Duration: 40 minutes.",
            },
            {
                name: "Data Interpretation and Logical Reasoning (DILR)",
                description: "20-22 questions. Duration: 40 minutes.",
            },
            {
                name: "Quantitative Ability (QA)",
                description: "22-24 questions. Duration: 40 minutes.",
            },
        ],
        officialWebsite: "https://iimcat.ac.in/",
        syllabus: "#",
    },

    "jee-advanced": {
        name: "JEE Advanced",
        description:
            "Second stage of Joint Entrance Examination for admission to the prestigious Indian Institutes of Technology (IITs). It is known as one of the most challenging undergraduate engineering entrance exams globally, testing exceptional analytical thinking and problem-solving skills with an unconventional question format.",
        conductingBody: "Indian Institutes of Technology (IIT Roorkee for 2024)",
        level: "National Level",
        mode: "Computer Based Test (CBT)",
        frequency: "Once a year",
        overview:
            "JEE Advanced represents the pinnacle of engineering entrance examinations in India, serving as the exclusive gateway to the 23 IITs, globally recognized for their academic excellence and innovation. Only the top 2,50,000 rank holders from JEE Main qualify to attempt this significantly more challenging second stage. The exam is meticulously designed to identify students with exceptional analytical abilities and creative problem-solving skills through uniquely structured questions that often integrate multiple concepts. JEE Advanced tests not just knowledge but the ability to apply concepts in novel situations. Successful candidates gain access to various engineering disciplines at IITs, with counseling conducted through the Joint Seat Allocation Authority (JoSAA).",
        importantDates: jeeDates,
        eligibility: [
            "Candidates must be among the top 2,50,000 AIR holders in JEE Main of the respective year.",
            "Candidates can attempt JEE Advanced a maximum of two times in consecutive years.",
            "Candidates should have passed 10+2 or equivalent examination with Physics, Chemistry, and Mathematics as compulsory subjects.",
        ],
        pattern: [
            {
                name: "Paper 1",
                description:
                    "Physics, Chemistry, and Mathematics. Duration: 3 hours. Multiple choice and numerical questions.",
            },
            {
                name: "Paper 2",
                description: "Physics, Chemistry, and Mathematics. Duration: 3 hours. Different format from Paper 1.",
            },
        ],
        officialWebsite: "https://jeeadv.ac.in/",
        syllabus: "#",
    },

    "neet-pg": {
        name: "NEET PG",
        description:
            "National Eligibility cum Entrance Test for postgraduate medical courses in India serves as the unified entrance exam for all MD/MS/PG Diploma courses nationwide. As the successor to AIPGMEE, it standardizes the admission process for all 10,821 Master of Surgery (MS), 19,953 Doctor of Medicine (MD), and 1,979 PG Diploma seats across India.",
        conductingBody: "National Board of Examinations (NBE)",
        level: "National Level",
        mode: "Computer Based Test (CBT)",
        frequency: "Once a year",
        overview:
            "NEET PG has revolutionized postgraduate medical education in India by establishing a unified, merit-based selection system for all MD/MS and PG Diploma Courses. This comprehensive entrance examination evaluates MBBS graduates on their clinical knowledge, diagnostic skills, and medical fundamentals across all major disciplines. The exam employs advanced psychometric methods and equating algorithms to ensure fair scoring across multiple sessions. NEET PG scores determine admissions to all government, private, and deemed universities/institutions nationwide, including prestigious institutions like AIIMS and PGI Chandigarh. The centralized counseling process through the Medical Counselling Committee (MCC) streamlines seat allocation based on merit, reservations, and candidate preferences.",
        importantDates: [
            { event: "Application Form Release", date: "February 2024" },
            { event: "Last Date to Apply", date: "March 2024" },
            { event: "Exam Date", date: "June 2024" },
            { event: "Result Declaration", date: "July 2024" },
        ],
        eligibility: [
            "MBBS degree holders from recognized universities.",
            "Candidates who have completed their internship or are completing it by the specified date.",
            "Permanent or provisional registration with Medical Council of India (MCI) or State Medical Council (SMC).",
        ],
        pattern: [
            {
                name: "Single Paper Exam",
                description:
                    "200 Multiple Choice Questions covering the entire MBBS curriculum. Duration: 3 hours 30 minutes.",
            },
        ],
        officialWebsite: "https://nbe.edu.in/",
        syllabus: "#",
    },
};

export const getAllExams = () => {
    return Object.keys(examsData).map((key) => ({
        id: key,
        name: examsData[key].name,
    }));
};

export const getExamBySlug = (slug) => {
    return examsData[slug] || null;
};
