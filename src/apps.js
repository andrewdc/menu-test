/*
This is a concept of the data model we might get back from
a service that verifies the user access, and returns app links etc.
*/
const apps = [
  {
    name: "HR Management",
    links: [
      { name: "Core HR", url: "http://starwars.com" },
      { name: "Time & Attendance", url: "http://google.com" }
    ]
  },
  {
    name: "Recruiting",
    links: [
      { name: "Applicant Tracking", url: "http://starwars.com" },
      { name: "Onboarding", url: "http://google.com" }
    ]
  },
  {
    name: "Learning and Development",
    links: [
      { name: "Learning Management", url: "http://starwars.com" },
      { name: "Performance", url: "http://google.com" },
      { name: "Succession", url: "http://google.com" },
      { name: "Collaboration", url: "http://google.com" },
      { name: "Knowledge base", url: "http://google.com" },
      { name: "Dashboard", url: "http://google.com" }
    ]
  }
];
export default apps;
