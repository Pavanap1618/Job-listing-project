// /* eslint-disable no-unused-vars */   
// //fuse
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Fuse from 'fuse.js';
// import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
// import './JobForm.css';  // Import your custom CSS file

// const JobForm = () => {
//   const [jobs, setJobs] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [companyFilter, setCompanyFilter] = useState(""); // New state for company filter
//   const [dateFilter, setDateFilter] = useState(""); // New state for date filter
//   const [filteredJobs, setFilteredJobs] = useState([]);
//   const [companies, setCompanies] = useState([]); // To store unique companies

//   useEffect(() => {
//     // Fetch data from backend API
//     axios
//       .get('http://localhost:8080/api/jobs')
//       .then((response) => {
//         const jobData = response.data;
//         setJobs(jobData);
//         setFilteredJobs(jobData); // Initialize with full list

//         // Extract unique companies from job data
//         const uniqueCompanies = Array.from(new Set(jobData.map(job => job.company)));
//         setCompanies(uniqueCompanies);
//       })
//       .catch((error) => {
//         console.error('Error fetching jobs:', error);
//       });
//   }, []);

//   // Helper function to convert relative time strings like "1 day ago" to a JavaScript Date
//   const parseRelativeTime = (timeString) => {
//     const regex = /(\d+)\s*(day|hour|minute)s?\s*ago/;
//     const match = timeString.match(regex);
//     if (match) {
//       const amount = parseInt(match[1], 10);
//       const unit = match[2];

//       const now = new Date();
//       let pastDate = new Date();

//       switch (unit) {
//         case "day":
//           pastDate.setDate(now.getDate() - amount);
//           break;
//         case "hour":
//           pastDate.setHours(now.getHours() - amount);
//           break;
//         case "minute":
//           pastDate.setMinutes(now.getMinutes() - amount);
//           break;
//         default:
//           return now; // Fallback in case of an unexpected unit
//       }

//       return pastDate;
//     }
//     return new Date(); // Default to current date if no match
//   };

//   useEffect(() => {
//     let results = jobs;

//     // Apply Fuse.js search for title, location, and tags
//     if (searchQuery) {
//       const fuse = new Fuse(jobs, {
//         keys: ["title", "location", "tags"], 
//         threshold: 0.3, // Fuzziness level (lower = stricter)
//       });

//       results = fuse.search(searchQuery).map(result => result.item);
//     }

//     // Apply company filter if provided
//     if (companyFilter) {
//       results = results.filter(job => job.company === companyFilter);
//     }

//     // Apply date filter if provided
//     if (dateFilter) {
//       const currentDate = new Date();
//       results = results.filter(job => {
//         const postedDate = parseRelativeTime(job.postedAgo);

//         switch (dateFilter) {
//           case "past_24_hours":
//             // Filter jobs posted within the past 24 hours + 1 day ago
//             return (currentDate - postedDate) <= 24 * 60 * 60 * 1000 || job.postedAgo === "1 day ago";
//           case "past_week":
//             // Filter jobs posted within the past week + 24 hours + 1 day ago
//             return (currentDate - postedDate) <= 7 * 24 * 60 * 60 * 1000 || (currentDate - postedDate) <= 24 * 60 * 60 * 1000 || job.postedAgo === "1 day ago";
//           case "past_month":
//             // Filter jobs posted within the past month + week + 24 hours + 1 day ago
//             return (currentDate - postedDate) <= 30 * 24 * 60 * 60 * 1000 || (currentDate - postedDate) <= 7 * 24 * 60 * 60 * 1000 || (currentDate - postedDate) <= 24 * 60 * 60 * 1000 || job.postedAgo === "1 day ago";
//           default:
//             return true; // No date filter, show all jobs
//         }
//       });
//     }

//     setFilteredJobs(results);
//   }, [searchQuery, companyFilter, dateFilter, jobs]);
//   console.log(jobs)

// return (

//   <div className='jobs'>
//     <div className="job-list-container">
//       <h2>Job Listings</h2>
// <div className='job-search-container'> 
     
// <input
//   type="text"
//   placeholder="Search jobs...locations.."
//   value={searchQuery}
//   onChange={(e) => setSearchQuery(e.target.value)}
//   className="job-search-input"
// />

// {/* Company Filter Dropdown */}
// <select 
//   value={companyFilter} 
//   onChange={(e) => setCompanyFilter(e.target.value)} 
//   className="job-filter-dropdown company-filter"
// >
//   <option value="">Select Company</option>
//   {companies.map((company, index) => (
//     <option key={index} value={company}>{company}</option>
//   ))}
// </select>

// {/* Date Posted Filter Dropdown */}
// <select 
//   value={dateFilter} 
//   onChange={(e) => setDateFilter(e.target.value)} 
//   className="job-filter-dropdown date-filter"
// >
//   <option value="">Any Time</option>
//   <option value="past_24_hours">Past 24 Hours</option>
//   <option value="past_week">Past Week</option>
//   <option value="past_month">Past Month</option>
// </select>
// </div>

//       <div className="job-list">
//         {filteredJobs.map((job) => (
//           <div key={job.id} className="job-card">
//             <div className="job-header">
//               <div className="job-company">
//                 <img src={job.logo} alt={job.company} className="job-logo" />
//                 <div>
//                   <h3 className="company-name">{job.company}</h3>
//                   <h2 className="job-title">{job.title}</h2>
//                   <p className="job-location">
//                     <FaMapMarkerAlt /> {job.location}
//                   </p>
//                   <p className="job-posted">{job.postedAgo}</p>
//                 </div>
//               </div>
//               <button className="apply-btn">Apply</button>
//             </div>

//             <div className="job-tags-container">
//               {job.tags && job.tags.length > 0 ? (
//                 job.tags.split(',').map((tag, index) => (
//                   <span key={index} className="job-tag">
//                     {tag.trim()}
//                   </span>
//                 ))
//               ) : (
//                 <span className="no-tags">No tags available</span>
//               )}
//             </div>

//             <div className="job-footer">
//               <p className="job-salary">
//                 <FaDollarSign /> {job.salary}
//               </p>
//               <p className="job-deadline">
//                 <strong>Deadline:</strong> {job.deadline}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default JobForm;





// /* eslint-disable no-unused-vars */
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";
// import './Joblist.css';  // Import your custom CSS file

// const JobForm = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     // Fetch data from backend API
//     axios
//       .get('http://localhost:8080/api/jobs')
//       .then((response) => {
//         setJobs(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching jobs:', error);
//       });
//   }, []);

//   return (
//     <div className="job-list-container">
//       <h2>Job Listings</h2>
//       <div className="job-list">
//         {jobs.map((job) => (
//           <div key={job.id} className="job-card">
//             <div className="job-header">
//               <div className="job-company">
//                 <img src={job.logo} alt={job.company} className="job-logo" />
//                 <div>
//                   <h3 className="company-name">{job.company}</h3>
//                   <h2 className="job-title">{job.title}</h2>
//                   <p className="job-location">
//                     <FaMapMarkerAlt /> {job.location}
//                   </p>
//                   <p className="job-posted">{job.postedAgo} ago</p>
//                 </div>
//               </div>
//               <button className="apply-btn">Apply</button>
//             </div>

//             <div className="job-tags-container">
//               {job.tags && job.tags.length > 0 ? (
//                 job.tags.split(',').map((tag, index) => (
//                   <span key={index} className="job-tag">
//                     {tag.trim()} {/* Trim any extra spaces */}
//                   </span>
//                 ))
//               ) : (
//                 <span className="no-tags">No tags available</span>
//               )}
//             </div>

//             <div className="job-footer">
//               <p className="job-salary">
//                 <FaDollarSign /> {job.salary}
//               </p>
//               <p className="job-deadline">
//                 <strong>Deadline:</strong> {job.deadline}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default JobForm;







// // eslint-disable-next-line no-unused-vars
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import './JobForm.css';

// const JobForm = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     // Fetch data from backend API
//     axios
//       .get('http://localhost:8080/api/jobs')
//       .then((response) => {
//         setJobs(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching jobs:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>Job Listings</h2>
//       <ul>
//         {jobs.map((job) => (
//           <li key={job.id}>
//             <h3>Company:{job.company}</h3>
//             <h4>Title:{job.title}    </h4>
//              <p>Location: {job.location}</p>
//             <p>Salary: {job.salary}</p>
//             <p>Tags: {job.tags}</p>
//             <p>Deadline: {job.deadline}</p>
//             <div>
//               <img src={job.logo} alt={job.company + ' logo'} style={{ width: '50px', height: '50px' }} />
//             </div>
//             {/* Display posted ago */}
//             <p>Posted {job.postedAgo} ago</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default JobForm;


















// /* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import axios from "axios";

// const JobForm = () => {
//   const [company, setCompany] = useState("");
//   const [title, setTitle] = useState("");
//   const [location, setLocation] = useState("");
//   const [tags, setTags] = useState(""); // Comma-separated tags
//   const [salary, setSalary] = useState("");
//   const [deadline, setDeadline] = useState("");
//   const [logo, setLogo] = useState("");
//   const [postedAgo, setPostedAgo] = useState("");

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const jobData = {
//       company,
//       title,
//       location,
//       tags, 
//       salary,
//       deadline,
//       logo,
//       postedAgo,
//     };

//     // Send the job data to the backend
//     axios
//       .post("http://localhost:8080/api/jobs", jobData)
//       .then((response) => {
//         alert("Job posted successfully!");
//         console.log(response.data);
//       })
//       .catch((error) => {
//         alert("Error posting job");
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <h2>Post a New Job</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Company:</label>
//           <input
//             type="text"
//             value={company}
//             onChange={(e) => setCompany(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Job Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Location:</label>
//           <input
//             type="text"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Tags (comma-separated):</label>
//           <input
//             type="text"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             placeholder="C++, Java, PHP"
//             required
//           />
//         </div>
//         <div>
//           <label>Salary:</label>
//           <input
//             type="text"
//             value={salary}
//             onChange={(e) => setSalary(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Deadline:</label>
//           <input
//             type="text"
//             value={deadline}
//             onChange={(e) => setDeadline(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Logo URL:</label>
//           <input
//             type="text"
//             value={logo}
//             onChange={(e) => setLogo(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Posted Ago:</label>
//           <input
//             type="text"
//             value={postedAgo}
//             onChange={(e) => setPostedAgo(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Post Job</button>
//       </form>
//     </div>
//   );
// };

// export default JobForm;
 