import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.annoucments.deleteMany({})

  // Sample announcements data
  const announcements = [
    {
      link: "https://www.nta.ac.in/",
      source: "NTA",
      title: "Important Instructions for Confirming Admission for Candidates Admitted to Degree Engineering Courses Round 03",
      date: new Date("2024-08-27")
    },
    {
      link: "https://www.aicte-india.org/",
      source: "Aicte-India",
      title: "Important Instructions for Confirming Admission for Candidates Admitted to Degree Engineering Courses Round 2",
      date: new Date("2024-08-12")
    },
    {
      link: "https://gujacpc.admissions.nic.in/activity-board/",
      source: "ACPC Gujarat",
      title: "Click Here for Common Registration ACPC 2025",
      date: new Date("2024-08-01")
    }
  ]

  // Insert data
  for (const announcement of announcements) {
    await prisma.annoucments.create({
      data: announcement
    })
  }

  console.log('Database has been seeded')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
