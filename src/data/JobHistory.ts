import { ContractType, WorkHistory } from '@/types/JobHistory';

// Helper function to generate Date objects from "YYYY-MM-DD" strings
const generateDate = (dateString: string) => {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(Date.UTC(year, month, day));
};
// TODO: Add Jobs Here
const jobHistoryData: WorkHistory = [
  {
    company: "Bits On",
    companyWebsite: "",
    logo: "",
    companyDescription: "",
    positions: [
      {
        position: "",
        location: "",
        contractType: ContractType.OwnBusiness,
        start: generateDate("2017-02-01"),
        end: generateDate("2017-08-01"),
        content: [
          "Developed and maintained an internal web application for managing vehicle maintenance schedules and records.",
        ],
        tags: [],
      }
    ],
  },
];