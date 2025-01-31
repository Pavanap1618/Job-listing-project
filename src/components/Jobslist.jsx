/* eslint-disable no-unused-vars */
import React,{ useState } from "react";
import "./Joblist.css";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const jobs = [
  {
    id: 1,
    company: "TCS",
    title: "Backend Developer",
    location: "South Korea",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "27th Dec, 2023",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-9.png",
    postedAgo: "3 days ago",
  },
  
  {
    id: 2,
    company: "e-plugins Inc",
    title: "Chief Product Manager",
    location: "Los Angeles, New York",
    tags: ["Designer", "Full Time", "Remote"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 3,
    company: "Sklassics Technologies",
    title: "Front-End Developer",
    location: "Houston",
    tags: ["C++", "Creative", "Designer"],
    salary: "25000-30000",
    deadline: "31st Dec, 2023",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-2.png",
    postedAgo: "2 days ago",
  },
  {
    id: 4,
    company: "NVIDIA",
    title: "Software Engineer",
    location: "Berlin",
    tags: ["Full Time", "Javascript", "Remote"],
    salary: "10000-20000",
    deadline: "1st Jun, 2024",
    logo: "	https://www.logo.wine/a/logo/Nvidia/Nvidia-Light-Vertical-Dark-Background-Logo.wine.svg",
    postedAgo: "10 days ago",
  },
  {
    id: 5,
    company: "Infosys",
    title: "Data Scientist",
    location: "USA",
    tags: ["Data Science", "Python", "AI", "Machine Learning"],
    salary: "40000-45000",
    deadline: "15th Feb, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-2.png",
    postedAgo: "3 days ago",
  },
  {
    id: 6,
    company: "Wipro",
    title: "Power BI Developer",
    location: "India",
    tags: ["Power BI", "Data Analytics", "Visualization"],
    salary: "25000-30000",
    deadline: "10th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-3.png",
    postedAgo: "1 day ago",
  },
  {
    id: 7,
    company: "Google",
    title: "Data Analyst",
    location: "Canada",
    tags: ["SQL", "Excel", "Data Analytics", "EDA"],
    salary: "50000-55000",
    deadline: "5th Apr, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 8,
    company: "Microsoft",
    title: "AI Engineer",
    location: "Germany",
    tags: ["AI", "Deep Learning", "Generative AI"],
    salary: "60000-65000",
    deadline: "20th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-5.png",
    postedAgo: "1 day ago",
  },
  {
    id: 9,
    company: "Amazon",
    title: "NLP Engineer",
    location: "UK",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 10,
    company: "IBM",
    title: "Tableau Developer",
    location: "Singapore",
    tags: ["Tableau", "Data Visualization", "SQL", "Excel"],
    salary: "35000-40000",
    deadline: "18th Feb, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-7.png",
    postedAgo: "1 day ago",
  },
  {
    id: 11,
    company: "HCL",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  {
    id: 12,
    company: "Accenture",
    title: "R Programmer",
    location: "Netherlands",
    tags: ["R Programming", "Statistics", "Data Analysis"],
    salary: "40000-45000",
    deadline: "25th Feb, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-1.png",
    postedAgo: "1 day ago",
  },
  {
    id: 13,
    company: "SpaceX",
    title: "Backend Developer",
    location: "USA",
    tags: ["C++", "Developer", "Javascript"],
    salary: "40000-50000",
    deadline: "27th March, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-9.png",
    postedAgo: "2 days ago",
  },
  {
    id: 14,
    company: "X",
    title: "Front-End Developer",
    location: "UK",
    tags: ["HTML", "Creative", "Designer"],
    salary: "25000-30000",
    deadline: "31st Dec, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-2.png",
    postedAgo: "16 days ago",
  },
  {
    id: 15,
    company: "TCS",
    title: "Front-End Developer",
    location: "Telangana",
    tags: ["Html", "CSS", "Javascript"],
    salary: "40000-55000",
    deadline: "27th Dec, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-9.png",
    postedAgo: "15 days ago",
  },
  {
    id: 16,
    company: "TCS",
    title: "AI Engineer",
    location: "Mumbai",
    tags:["AI", "Deep Learning", "Generative AI"],
    salary: "40000-55000",
    deadline: "27th Dec, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-9.png",
    postedAgo: "1 day ago",
  },
  {
    id: 17,
    company: "TCS",
    title: "Data Analyst",
    location: "Hyderabad",
    tags: ["SQL", "Excel", "Data Analytics", "EDA"],
    salary: "20000-35000",
    deadline: "5th Apr, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "5 days ago",
  },
  {
    id: 18,
    company: "e-plugins Inc",
    title: "Front-End Developer",
    location: "Los Angeles, New York",
    tags: ["Designer", "Full Time", "Remote"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "10 days ago",
  },
  {
    id: 19,
    company: "e-plugins Inc",
    title: "Backend Developer",
    location: "Los Angeles, New York",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "10 days ago",
  },
  {
    id: 20,
    company:"e-plugins Inc",
    title: "NLP Engineer",
    location: "Los Angeles, New York",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "15 days ago",
  },
  
  {
    id: 21,
    company: "Sklassics Technologies",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 22,
    company:"Sklassics Technologies",
    title: "NLP Engineer",
    location:"Houston",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 23,
    company: "Sklassics Technologies",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  {
    id: 24,
    company: "NVIDIA",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 25,
    company:"NVIDIA",
    title: "NLP Engineer",
    location:"Houston",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 26,
    company:"NVIDIA",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  {
    id: 27,
    company: "Infosys",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 28,
    company:"Infosys",
    title: "NLP Engineer",
    location:"Houston",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 29,
    company:"Infosys",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  {
    id: 30,
    company: "Wipro",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 31,
    company:"Wipro",
    title: "NLP Engineer",
    location:"Houston",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 32,
    company:"Wipro",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  
  {
    id: 33,
    company: "Google",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 34,
    company:"Google",
    title: "NLP Engineer",
    location:"Houston",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 35,
    company:"Google",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  
  {
    id: 36,
    company: "Microsoft",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 37,
    company: "Microsoft",
    title: "NLP Engineer",
    location:"Houston",
    tags: ["NLP", "Machine Learning", "Python", "Deep Learning"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 38,
    company: "Microsoft",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  
   
  {
    id: 39,
    company: "Amazon",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 40,
    company: "Amazon",
    title: "Front-End Develper",
    location:"Houston",
    tags: ["Html", "CSS", "Python", "Javascript"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 41,
    company: "Amazon",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  
   
  {
    id: 42,
    company: "IBM",
    title: "Backend Developer",
    location: "Houston",
    tags: ["C++", "Developer", "Javascript"],
    salary: "30000-35000",
    deadline: "31st Jan, 2024",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-4.png",
    postedAgo: "1 day ago",
  },
  {
    id: 43,
    company: "IBM",
    title: "Front-End Develper",
    location:"Houston",
    tags: ["Html", "CSS", "Python", "Javascript"],
    salary: "55000-60000",
    deadline: "30th Jan, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-6.png",
    postedAgo: "1 day ago",
  },
  {
    id: 44,
    company: "IBM",
    title: "Flask Developer",
    location: "Australia",
    tags: ["Flask", "Python", "Backend Development"],
    salary: "30000-35000",
    deadline: "12th Mar, 2025",
    logo: "https://hijobs.e-plugins.com/wp-content/uploads/2023/06/company-logo-8.png",
    postedAgo: "1 day ago",
  },
  
];


const Jobslist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [companyFilter, setCompanyFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");

  const isWithinDays = (postedAgo, days) => {
    const currentDate = new Date();
    const jobDate = new Date();
    
    // Match the "x days ago" format
    const match = postedAgo.match(/(\d+) days ago/);
    if (!match) return false;
    
    const jobDaysAgo = parseInt(match[1]);
    
    return jobDaysAgo <= days;
  };

  const handleSearch = () => {
    const filtered = jobs
      .filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((job) => (companyFilter ? job.company === companyFilter : true))
      .filter((job) => {
        if (dateFilter === "Past 24 hours") {
          return job.postedAgo === "1 day ago" || job.postedAgo === "2 days ago";
        }
        if (dateFilter === "Past Week") {
          return isWithinDays(job.postedAgo, 7);
        }
        if (dateFilter === "Past Month") {
          return isWithinDays(job.postedAgo, 30);
        }
        return true; // No date filter applied
      });
    setFilteredJobs(filtered);
  };
  const companies = [...new Set(jobs.map((job) => job.company))];
  return (
    <div className="job-list-container">
      {/* Search box at the top */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search job titles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          Search
        </button>
        
        {/* Company Filter */}
        <select
          className="filter-select"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
        >
          <option value="">Filter by Company</option>
          {companies.map((company, index) => (
            <option key={index} value={company}>
              {company}
            </option>
          ))}
        </select>

        {/* Date Posted Filter */}
        <select
          className="filter-select"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
        >
          <option value="">Filter by Date Posted</option>
          
          <option value="Any time">Any time</option>
          <option value="Past Month">Past month</option>
          <option value="Past Week">Past week</option>
          <option value="Past 24 hours">Past 24 hours</option>
        </select>
      </div>
    <div className="job-list">
     
      {filteredJobs.map((job) => (
        <div key={job.id} className="job-card">
          <div className="job-header">
            <div className="job-company">
              <img src={job.logo} alt={job.company} className="job-logo" />
              <div>
                <h3 className="company-name">{job.company}</h3>
                <h2 className="job-title">{job.title}</h2>
                <p className="job-location">
                  <FaMapMarkerAlt /> {job.location}
                </p>
                <p className="job-posted">{job.postedAgo}</p>
              </div>
            </div>
            <button className="apply-btn">Apply</button>
          </div>

          <div className="job-tags">
            {job.tags.map((tag, index) => (
              <span key={index} className="job-tag">
                {tag}
              </span>
            ))}
          </div>

          <div className="job-footer">
            <p className="job-salary">
              <FaDollarSign /> {job.salary}
            </p>
            <p className="job-deadline">
              <strong>Deadline:</strong> {job.deadline}
            </p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Jobslist;
